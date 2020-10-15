// Zbuduj środowisko w create react app + react router do odtworzenia takiej sytuacji

// masz store reduxa lub context api połączony z aplikacją
// store zawiara array z itemami np w strukturze 

// const store = {items:["...",...]}

// Stwórz React Router gdzie masz 2 routy:
// - <ItemsListView> na  /items - pokazujący listę itemów
// - <ItemDetailView> na  /items/${id} - pokazyjący jeden item

// stwórz taką funkcjonalność w aplikacji, aby 
// przy GET na `/items/${id}` 
// wybierało ze store item o odpowiednim indexie
// i podawało item do routa <ItemDetailView> w propie item


