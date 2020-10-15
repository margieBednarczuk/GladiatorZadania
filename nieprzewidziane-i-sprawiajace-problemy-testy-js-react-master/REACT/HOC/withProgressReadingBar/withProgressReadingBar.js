// Przygotuj HOC'a withProgressReadingBar, który:
// - Tworzy nad komponentem, który przyjmuje progress bar, który jest niebieski o wysokości 5px.
// - Progress bar odzwierciedla swoją długością wysokość przeskrolowanego elementu child.
// - Progress bar powinien być sticky do górnej krawędzi ekranu w obrębie elementu child.
// - Owrappowany komponent powinien mieć maksymalnie wysokość 50% wysokości ekranu.

const withProgressReadingBar = (Component) => {}

// Przetestuj:
// - Czy jak scroll przekroczy 50% komponentu owrapowanego HOCem to szerokość progress baru będzie 50%.
// - Czy jak scroll będzie nad górną krawędzią komponentu owrapowanego HOCem (nie będzie jeszcze widoczny), szerokość progress baru będzie 0%.
// - Czy jak scroll będzie pod dolną krawędzią komponentu owrapowanego HOCem (nie będzie już widoczny), szerokość progress baru będzie 100%.
