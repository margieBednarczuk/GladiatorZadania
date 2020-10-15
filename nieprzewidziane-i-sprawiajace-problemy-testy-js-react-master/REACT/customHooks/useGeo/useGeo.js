// Stwórz custom hooka useGeo, który dodaje do komponentu właściwość
// - geoData - zwraca wszystkie informacje geolokalizacyjne z window
// - toggleListening(true/false) - akcja, która przyjmuję true/false i włącza lub wyłącza nasłuch na geolokalizacji

const useGeo = (ref) => {
  // return [geoData, toggleListening]
}

// sprawdz czy Twój hook działa poprawnie:
// - hook zwraca poprawny typ danych = [boolean, function]
// - włącza i wyłącza nasłuch na geolokalizacji
// - zwraca lat i long

// zamockuj window oraz metody niezbędne do geolokalizacji
// ustawiająć defaultowo lat i long na Londyn
// ustawiająć defaultowo nasłuch na wyłączony
