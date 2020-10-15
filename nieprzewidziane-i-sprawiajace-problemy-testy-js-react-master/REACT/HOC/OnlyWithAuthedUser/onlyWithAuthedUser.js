// Stwórz HOC'a onlyWithAuthedUser, który korzysta z mockedStore.

const mockedStore = {
  user: {
    email: '',
    password: ''
  },
  isAuthed: false
}

const onlyWithAuthedUser = (Component, store) => (props) => {}

// Przetestuj poniższe test case'y:
// - Jeśli w mockedStore użytkownik ma pusty email i password i nie jest zalogowany (isAuthed === false) to HOC ma pokazać komponent Login gdzie jakoś wyświetli dane {email, password}.
// - Jeśli jest zalogowany (isAuthed === true) to HOC pokaże Component.
// - Jeśli store nie ma poprawnego formatu, pokaże komponent Error z odpowiednią informacją, że store na komponencie Component.name się zepsuł.
