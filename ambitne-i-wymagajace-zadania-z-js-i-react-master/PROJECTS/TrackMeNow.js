// Apka TrackMeNow - WebApi do Geolokalizacji
// - apka ma być odpalana TYLKO na urządzeniach mobilnych (telefony i tablety)
// - apka ma wyświetlać na jakim urządzeniu pracuje, jaki jest system operacyjny, jaka przeglądarka, czy pozycja urządzenia jest w pionie czy w poziomie
// - ma spytać o pozwolenie dostępu do geolokalizacji
// - ma pobierać dane geolokalizacyjne z urządzenie użytkownika oraz czas pomiaru
// - ma wyświetlać dane geolokalizacyjne oraz czas pomiaru - jeśli może pobrać dane
// - ma wyświetlać komunikat błędu oraz czas pomiaru - jeśli nie może pobrać danych
// - powinna zawierać przycisk do włączenia i wyłączenia geolokalizacji
// - ma w surowej formie (JSON.stringify(geoData)) wyświetlać dane
// - powinna dodatkowo zawierać mapę google oraz znacznik pokazujący aktualną pozycję użytkownika
// - po odpaleniu jej na telefonie powinna pokazać drugi, odróżniający się marker, który wskazuje miejsce, z którego zaczęliśmy namierzanie
// - aplikacja powinna pamiętać ostatnio 500 pomiarów i pokazywać wszystkie na mapie jako inne markery

// Proponowany stack technologiczny: React + Redux + GoogleMaps/OpenMaps + Jest