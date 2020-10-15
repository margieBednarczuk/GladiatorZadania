// Stwórz funkcję pomocniczą subscriber, aby móc testować story bez mock'owania.
const subscriber = (store, action) => {}

// Subscriber ma zwracać Promise, która:
// - Wywołuje resolve z nowym stanem stora po wywołaniu na nim poprawnej akcji.
// - Wywołuje reject ze stanem stora po wywołaniu na nim niepoprawnej akcji.

// Ma działać tak:
subscriber(store, store.doActionWithPayload('some-payload')).then((newState) => {
  // ...
})

subscriber(store, anotherStore.doWrongAction('some-payload')).catch((state) => {
  // ...
})
