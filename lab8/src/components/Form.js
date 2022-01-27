import React, { useState } from "react";


const Form = ({ handleSubmit, history }) => {
  //Stan przechowujący wartość szukającą
  const [searchEntry, setSearchEntry] = useState("");

  return (
    //Przy zatwierdzeniu formularza przesyłane są dane z hisotri i dane szukania.
    <form
      className="search-form"
      onSubmit={e => handleSubmit(e, history, searchEntry)}
    >
      {/* tekst z inputa jest przy każdej zmianie przypisywany do stanu searcha i aktualizowany*/}
      {/* wcześniej było tu odwołanie do funkcji która ustawia stan. W celu usprawnienia struktury kodu zagniździłem go do funkcji onChange*/}
      <input
        type="text"
        name="search"
        placeholder="Search..."
        onChange={event => setSearchEntry(event.target.value)}
        value={searchEntry}
      />
      {/*Przycisk sprawdza czy jest jakikolwiek tekst(ucina białe znaki trimem). Jeżeli tak to staje się aktywny i można nim wyszukiwać*/}
      <button
        type="submit"
        className={`search-button ${searchEntry.trim() ? "active" : null}`}
        disabled={!searchEntry.trim()}
      >
        <svg height="32" width="32">
          <path
            d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
            fill="#ffffff"
            fillRule="evenodd"
          />
        </svg>
      </button>
    </form>
  );
};

export default Form;
