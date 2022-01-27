import React from "react";
//Zwrocenie htmlu obrazka z źródłem i podpisem z destrukturyzowanych propsów
const Image = ({ url, title }) => (
  <li>
    <img src={url} alt={title} />
  </li>
);

export default Image;
