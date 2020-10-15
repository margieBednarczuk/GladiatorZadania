// wg OOP i zasad SOLID zaprojektuj 2 klasy

// Product, który reprezentuje dane produktu w sklepie
class Product {
  // uuid
  // nazwę
  // opis
  // kategoria
  // tagi - array słów
  // .sale - true/false czy jest w trakcie wyprzedaży
  // .prices = {sale, regular} - ceny regularna i wyprzedażowa
  // pctTax - procent podatku
  // ceny w koszyku są cenami brutto
  // w produkcie jest metoda .calculateNet() która zwraca cenę bez podatku
}

// Cart, który reprezentuje koszyk w sklepie
class Cart {
  // uuid
  // zawiera listę produktów
  // można przeliczyć łączną wartość koszyka i łączną ilość produktów
  // można dodawać i usuwać z niego produkty
  // można zmieniać ilość produktu z listy
  // można dodać rabat na pojedynczy produkt
  // można w nim opis do koszyka
  // zawiera datę utworzenia i datę ostatniej modyfikacji (podczas operacji na produktach zmienia sie data modyfikacji)
  // można zatwiedzić koszyk i wtedy, użytkownik dostaje komunikat ile finalnie wyszło mu do zapłaty netto (bez podatku) i brutto (z podatkiem)
}

// przetestuj sytuację, w której ktoś w obrębie jednego koszyka:
// - dodaje 1x produkt X - za 300 zł
// - dodaje 2x produkt Y - za 60 zł
// - dodaje 7x produkt Z - w cenie promocyjnej 7zł, gdy normalna to 11zł
// - zmienia ilość produktu X na 2
// - usunie 1 produkt Y
// - doda opis do koszyka
// - doda rabat - 10zł za każdy produkt Y
// - zatwierdzi koszyk i zobaczy ceny brutto i netto
