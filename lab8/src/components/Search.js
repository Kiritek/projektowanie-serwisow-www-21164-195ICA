import React from "react";
import Container from "./Container";

const Search = ({ searchTerm }) => {
  return (
    <div>
      {/* Z destrukturyzowanych prospsów wyciągana jest fraza szukana i dopisywane jest do nie pictures ale tylko gdy nie jest predefiniowana*/}  
      <h2>{searchTerm} Images</h2>
      {/*Pod tytuł doczepiany jest komponent który wyszukuje. */}
      <Container searchTerm={searchTerm} />
    </div>
  );
};

export default Search;
