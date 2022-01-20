# Lab6

## Widok Aplikacji
![nua](https://github.com/Kiritek/projektowanie-serwisow-www-21164-195ICA/blob/main/lab6/assets/finalapp.png)
W aplikacji podajemy nawzwe użytkownika w serwisie github i jeżeli dany użytkownik istnieje to dodawane są jego informacje poniżej formularza. Dla pokazania dodałem 5 osób.

## Komponenty

### Card
![nua](https://github.com/Kiritek/projektowanie-serwisow-www-21164-195ICA/blob/main/lab6/assets/Card.png)
Komponent funkcyjny, z props które destrukturyzujemy pobieram avatar_url, name i login i tworzę karte profilu która zawiera awatar, nazwe użytkownika i nickname.
### CardList
![nua](https://github.com/Kiritek/projektowanie-serwisow-www-21164-195ICA/blob/main/lab6/assets/CardList.png)
Komponent funkcyjny, destrukturyzuje props a następnie dodaje nową karte przy pomocy map gdzie używam tylko ostatniego profilu by dodać go na strone, przy pomocy operatora spread. Kluczem jest unikatowa wartość jaką jest profil id z githuba.
### CardForm
![nua](https://github.com/Kiritek/projektowanie-serwisow-www-21164-195ICA/blob/main/lab6/assets/Form.png)
Komponent klasowy. Używam stanu do przechowywania wartości nazwy użytkownika jaka jest wypisywana w formie. Przy kliknięciu zatwierdzenie forma funkcja handleSubmit pobiera przy pomocy axios dane z api githuba i przesyła je do komponetu App przy pomocy funkcji z propsów, a następnie czyści stan nazwy użytkownika. Do niej i do forma używam prevent default by nie odświeżyły strony. W formie użwam onChange by cały czas mieć poprawną wartość stanu nazwy użytkownika. Dodatkowo użyłem formularza i przycisku do niego z react-bootsrapa.
### App
![nua](https://github.com/Kiritek/projektowanie-serwisow-www-21164-195ICA/blob/main/lab6/assets/App.png)
Komponent klasowy który wykorzystuje stan do przechowywania profili użytkowników. Przy wywołaniu funkcji przy pomocy danych uzyskanych z formularza dodaje nowy profil do stanu wykorzystując operator spread dla oznaczenia poprzednich profili i nowego. Tworzy on dwa komponenty potomne CardForm i CardList do pierwszego przesyła funkcje poprzez props a do drugiego profile również poprzez props.
