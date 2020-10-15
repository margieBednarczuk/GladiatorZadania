// stwórz custom hook
// usePagination(dataEntries, elementsOnPage)
const usePagination = (dataEntries, elementsOnPage = 50) => {
  // ...
  // return [paginationState, paginationActions]
}

// który zwraca poniższe dane
const [
  { actualPageIdx, lastPageIdx, entriesOnSelectedPage },
  { goToFirstPage, goToPrevPage, goToPage, goToNextPage, goToLastPage }
] = usePagination(dataEntries)

// actualPageIdx to index aktualnej strony
// lastPageIdx to index ostatniej strony
// entriesOnSelectedPage to przy elementsOnPage = 50 zawiera 50 elementów z dataEntries dla aktualnej strony

// goToPage(pageIdx) - zmienia daną stronę
// goToFirstPage, goToPrevPage, goToNextPage, goToLastPage - zmienia stronę na odpowiednią

// przetestuj przypadek użycia hooka gdy:
// - dataEntries ma 521 elementów i renderuje po 50 elementów na stronie
// - użytkownik zmienia stroną z 1 na następną
// - użytkownik zmienia stroną z 2 na 7
// - użytkownik zmienia stroną z 7 na 3
// - użytkownik zmienia stroną z 3 na poprzednią
// - użytkownik zmienia stroną z poprzednią na ostatnią
// - użytkownik zmienia stroną z ostatniej na pierwszą
