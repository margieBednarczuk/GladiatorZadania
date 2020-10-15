// Inspiracja na projekt - AppForBoredPeople :) 

// Stwórz apkę, która powie Ci co w okolicy ciekawego jest do robienia, 
// na podstawie informacji z map google i Twojej geolokalizacji

// API:
// - endpoint do szukania miejsc - https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=YOUR_API_KEY
// - docsy do endpointa do szukania miejsc - https://developers.google.com/places/web-service/search
// - opis endpointa do prowadzenia na miejsce - https://developers.google.com/maps/documentation/urls/guide#directions-action

// Technologia do wykonania dowolna - wybierz z listy:
// - czysty JS + fetch
// - czysty JS + axios
// - react + fetch
// - react + axios
// - react + axios/fetch + redux

// Jak to ma działać:
// - wchodzi user na stronę
// - są pobierane jego dane geolokalizacyjne
// - na podstawie danych geolokalizacyjnych i endpointa jest pobierana lista lokalizacji w pobliżu
// - z listy lokalizacji jest wybierane jedno losowe miejsce
// - nazwa (i opinie na temat tego miejsca) wybranego losowo miejsca jest prezentowana na stronce z przyciskiem "Prowadź"
// - poniżej przycisku "Prowadź" jest przycisk "Następne miejsce", który losuje następne miejsce z listy
// - po wciśnieściu przycisku "Prowadź" są otwierane Mapy Google w nowej zakładce oraz user jest prowadzony do danego miejsca

// Proponowany stack technologiczny: React + Redux + GoogleMaps/OpenMaps + Jest