// Rozwiązanie opracował Gladiator JS - gh: PiotrGrzy
// rozwiązanie nie testowane pod większe ilości danych

const isStoreObject = (store) =>
  typeof store === 'object' && store.hasOwnProperty('user') && store.hasOwnProperty('isAuthed')

const storeHasCorrectValues = (store) =>
  store.user.hasOwnProperty('email') && store.user.hasOwnProperty('password')

const onlyWithAuthedUser = (Component, store) => (props) => {
  if (!isStoreObject())
    return <div className="warning">Invalid store data format in component: {Component.name}</div>

  if (!storeHasCorrectValues())
    return <div className="warning">Invalid store values in component: {Component.name}</div>

  return store.isAuthed ? <Component {...props} /> : <Login />
}
