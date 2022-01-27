import React from "react";
import NoImages from "./NoImages";
import Image from "./Image";
const Gallery = ({data}) => {
  const results = data;
  let images;
  let noImages;
  // map variables to each item in fetched image array and return image component
  if (results.length > 0) {
    images = results.map(image => {
      //Wczesniej było tutaj wielokrotne deklarowanie zmiennych i branie podwartosci image. Przy pomocy destrukturyzacji kod jest dużo bardziej czyleny
      const {farm,server,id,secret,title} =image;
      //Przygotowanie linku do odbioru obrazka
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      //Zwrocenie obrazka z linku wyzej podanego
      return <Image url={url} key={id} alt={title} />;
    });
  } else {
    noImages = <NoImages />; // Jeżeli nie ma żadnych obrazków zwrócony będzie komponent NoImages
  }
  return (
    <div>
      <ul>{images}</ul>
      {noImages}
    </div>
  );
};

export default Gallery;
