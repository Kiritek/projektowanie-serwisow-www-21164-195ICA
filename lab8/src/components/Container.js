import React, { useContext, useEffect } from "react";
import { PhotoContext } from "../context/PhotoContext";
import Gallery from "./Gallery";
import Loader from "./Loader";

const Container = ({ searchTerm }) => {
  //Uzycie konetkstu przeładowywania komponentu z odpowiednią wartością
  const { images, loading, runSearch } = useContext(PhotoContext);
  //użycie funkcji szukania
  useEffect(() => {
    runSearch(searchTerm);
    // eslint-disable-next-line
  }, [searchTerm]);

  return (
    //Gdy stan ładowania obrazków nie skończył się jest pokazany loader inaczej jest pokazana galeria obrazków
    <div className="photo-container">
      {loading ? <Loader /> : <Gallery data={images} />}
    </div>
  );
};

export default Container;
 