import React from "react";
import Container from "./Container";

const Item = ({ searchTerm }) => {
  return (
    <div>
      {/* Z destrukturyzowanych prospsów wyciągana jest fraza szukana i dopisywane jest do nie pictures ale tylko gdy jest predefiniowana*/}
      <h2>{searchTerm} Pictures</h2>
      {/*Pod tytuł doczepiany jest komponent który wyszukuje. */}
      <Container searchTerm={searchTerm} />
    </div>
  );
};

export default Item;
