// Korzystając z customowego EventEmittera
const LoadingEmitter = new EventEmitter()

// stwórz komponent funkcyjny Loader wykorzystujący hooksy useState i useEffect
// - który kiedy wykryje event "onLoadingStart" w obrębie LoadingEmitter
// - to pokaże jakąś animację ładowania zasłaniającą cały dostępny ekranu

// - który kiedy wykryje event "onLoadingStop" w obrębie LoadingEmitter
// -- to zwróci null

const Loader = () => {
  // ...
  return null
}

// Przetestuj:
// działanie LoadingEmitter - emitowanie eventów i nasłuch
// działanie komponentu Loader, czy poprawnie wyświetla komponent w oparciu o wyemitowane eventy
