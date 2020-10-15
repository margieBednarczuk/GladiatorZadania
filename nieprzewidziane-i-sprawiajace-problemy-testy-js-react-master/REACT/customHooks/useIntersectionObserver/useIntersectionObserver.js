// Stwórz custom hooka useIntersectionObserver, który dodaje do komponentu właściwość
// - isOnView - który mówi czy dany element podpięty do referecji jest widoczny na ekranie

const useIntersectionObserver = (ref) => {
  // return isOnView
}

// sprawdz czy Twój hook działa poprawnie:
// - hook zwraca poprawny typ danych = [boolean, function]
// - włącza i wyłącza nasłuch na referencji
// - kiedy element jest ponad górną krawędzią okna isOnView jest false
// - kiedy element jest poniżej dolnej krawędzi okna isOnView jest false
// - kiedy element jest cześciowo na widoku isOnView jest true
// - kiedy element jest całościowo na widoku isOnView jest true
