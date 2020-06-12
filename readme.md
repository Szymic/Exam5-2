<img src="http://coderslab.pl/img/coderslab-logo.png" width="400"/>

## Uwagi dotyczące rozwiązywania zadań

Zwróćcie uwagę na następujące rzeczy:

* Jeśli w treści zadania jest wspomniane aby konkretny tekst został wpisany/zwrócony/wyśwetlony, to powinien być to **dokładnie taki sam** tekst jak w treści zadania.

* Pamiętajcie również o tym aby nazwy funkcji/komponentów były **dokładnie takie same** jak w treści zadania.

* Zadania rozwiązujcie w odpowiednich plikach **js**.

* Zawsze sprawdzajcie czy rozwiązanie działa. Jeśli powoduje ono błędy w konsoli, nie zostanie ocenione. W takim przypadku lepiej **zakomentujcie wrażliwe części**.


## Przygotowanie

Zmodyfikujcie plik `webpack.config.js`, tak aby:

- zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujecie, np. `task02.js`

**Pamiętajcie aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**

---

### Zadanie 1 - `task01.txt` **(1,5 pkt)**

Podajcie dwie zasady tagów JSX. Opiszcie je.

---

### Zadanie 2 - `js/task02.js` **(1,5 pkt)**

Wyrenderujcie za pomocą `ReactDOM.render()` elementy:
- `div` z napisem "Egzamin",
- `button` z napisem "Klik", przycisk nie ma nic robić.

Mogą się one znajdować w dowolnym elemencie głównym.

---

### Zadanie 3 - `js/task03.js` **(4 pkt)**

Stwórzcie komponent `Counter`. Ma renderować element `h1` z napisem "0". Co sekundę ma zwiększać liczbę w `h1` o 1.

---

### Zadanie 4 - `js/task04.js` **(3 pkt)**

Stwórzcie komponent `CompanyData`. Przez props ma przyjmować: nazwa (`name`), nip (`nip`), regon (`regon`) oraz adres (`address`).

Komponent ma renderować (przykład w HTML):
```HTML
<h1>{Nazwa}</h1>
<p>NIP: {NIP}, REGON: {NIP}</p>
<p>{address}</p>
```

Nazwa i adres mają być **niepustymi stringami**. NIP ma się składać z **dokładnie 10 cyfr**. REGON ma się składać z **dokładne 9 cyfr**. Jeżeli którykolwiek z warunków nie jest spełniony, to zablokuj wyświetlanie komponentu.

Wyrenderuj ten komponent dla dowolnych danych.

---

### Zadanie 5 - `js/task05.js` **(4,5 pkt)**

Stwórzcie komponent `CarsList`. Ma wyświetlać dwie listy `ul` w elemencie `div`.
Na pierwszej znajdują się: BMW, Jaguar i Porsche. Na drugiej nic.
Po kliknięciu na dowolny element pierwszej listy, uzupełniana jest druga:
- Jeżeli wybrano BMW to na drugiej pojawiają się: X6 I E71, M6 F13, SERIA 7 G11,
- Jeżeli wybrano Jaguar to na drugiej pojawiają się: X-Type, F-Type, XJ,
- Jeżeli wybrano Porsche to na drugiej pojawiają się: 718 Cayman, 911 Carrera GTS, Panamera Turbo Executive.

---

### Zadanie 6 - `js/task06.js` **(5,5 pkt)**

Stwórzcie komponent `Chat`. Ma on w elemencie `div` zawierać listę `ul` (na początku pustą) oraz formularz z następującymi (kontrolowanymi) elementami:
* `input` na nick,
* `select` z wyborem koloru: Zielony, Niebieski, Czarny (domyślny),
* `textarea` na treść wiadomości,
* przycisk `input type="submit"` wysłania.

Kiedy formularz zostanie przesłany to należy dodać do listy nowy element, który wygląda tak (podgląd HTML):
```HTML
<li>
    <h2>{Nick}</h2>
    <p>{Treść wiadomości}</p>
</li>
```

Jednocześnie dodana wiadomość (`span`) ma być wypisana kolorem z wyboru.

