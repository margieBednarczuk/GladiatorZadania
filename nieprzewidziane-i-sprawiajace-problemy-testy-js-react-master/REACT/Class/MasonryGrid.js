// stwórz kopię tego 4 kolumnowego grida na nierównej wysokości zdjęcia ze strony http://www.kristianhammerstad.com/
// NIE wykorzystując biblioteki masonry lub podobnych

const arrayOf20Images = ['...'] // 20 różnych zdjęć

const MasonryGrid = () => {}
const MasonryGridColumn = () => {}
const MasonryGridCell = () => {}

const GridWrapper = ({ width, children }) => {}

// upewnij się, że MasonryGrid będzie mieć 4 kolumny, jeśli GridWrapper ma width 1200px
// upewnij się, że MasonryGrid będzie mieć 2 kolumny, jeśli GridWrapper ma width od 600px do 1200px
// upewnij się, że MasonryGrid będzie mieć 1 kolumnę, jeśli GridWrapper ma width mniej niż 600px
// upewnij się, że MasonryGridCell w 100% wypełniać na szerokość MasonryGridColumn zdjęciem przy każdej szerokości
// upewnij się, że kiedy MasonryGrid będzie mieć 4 kolumny, będzie w nim m.in. element o indexie 0,4,8
