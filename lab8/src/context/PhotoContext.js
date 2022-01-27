import React, { createContext, useState } from "react";
import axios from "axios";
import { apiKey } from "../api/config";
export const PhotoContext = createContext();

const PhotoContextProvider = props => {
  // Stan przechowywujacy wczytane obrazki
  const [images, setImages] = useState([]); 
  //Stan który przechowuje wartość czy nie zostały wczytane jeszcze obrazki domyślnie tak
  const [loading, setLoading] = useState(true); 
  //Wyszukanie obrazków z zapytaniem w wartosci query
  const runSearch = query => {
    axios
      .get(
        //W adresie umieszczany jest klucz do api i wartosc wyszukiwania
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then(response => {
        //ustanowienie stanu przchowywanych obrazkow jako odpowiedz
        setImages(response.data.photos.photo);
        //wylaczenie stanu wczytywanie obrazkow
        setLoading(false);
      })
      .catch(error => {
       //Wczesniej informacje o błedzie wysyłane były do konsoli, teraz użytkownik dostaje informacje w alercie że coś poszło nie tak.
        Notification.requestPermission();
        new Notification("Encountered an error with fetching and parsing data");
        console.log(error);
      });
  };
  return (
    <PhotoContext.Provider value={{ images, loading, runSearch }}>
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
