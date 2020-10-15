// Stwórz klasę EnvDetector, która:
// - działa tylko na podstawie elementu window i wyrzuca error, jeśli window nie istnieje
// - każde metoda tej klasy jest statyczna

// ma metody, które zwracają:
// - wymiary okna oraz wymiary strony (pamiętaj, że zmieniają się one w przypadku window.resize)
// - typ urządzenia (mobile/tablet/laptop)
// - rodzaj przeglądarki uzytkownika (ie/edge/firefox/opera/chrome)
// - system operacyjny uzytkownika (ios/android/windows/linux/macos)
// - informację czy dane urządzenie posiada ekran dotykowy
// - informację czy dane urządzenie jest offline czy online

class EnvDetector {
  getBrowserSize() {}
  getWindowSize() {}
  getDeviceType() {}
  getOS() {}
  isTouchable() {}
  isOnline() {}
}

// zbuduj mock dla window w taki sposób,
// aby kopiowała mockowała metody, które są wymagane do poprawnego działania EnvDetector
// - wymiary mobile to 300x600, tabletu 1200x600 a desktop to 1600x900

// zaprojektu działanie mocka tak, aby dało się zasymulować poniższe konfiguracje urządzeń przechwytując je w klasie EnvDetector
// - iphone + touchable + online
// - chrome + linux
// - chrome + windows
// - firefox + windows
// - android + chrome + offline
