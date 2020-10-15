import { createSlice } from '@reduxjs/toolkit'

const initial_state = {
  imBusy: true,
  error: false,
  phrase: '',
  all: [],
  filtered: []
}

const { actions, reducer } = createSlice({
  name: 'Search',
  initialState: initial_state,
  reducers: {
    setPhrase(state, { payload }) {
      state.phrase = payload

      if (payload.length > 2) {
        state.filtered = [...state.all]
          .filter((el) => {
            return [
              el.title.toLowerCase().includes(payload.toLowerCase()),
              el.slug.toLowerCase().includes(payload.toLowerCase()),
              el.content.toLowerCase().includes(payload.toLowerCase())
            ].includes(true)
          })
          .filter((_, k) => k < 5)
      } else {
        state.filtered = []
      }
    },
    setSearchData(state, { payload }) {
      const { products, posts, pages } = payload
      state.all = [...products, ...posts, ...pages]
      state.imBusy = false
    },
    onSearchError(state, { payload }) {
      state.imBusy = false
      state.error = payload
    }
  }
})

// Przetestuj czy akcje dobrze wpływają na store,
// według poniższych case'ów testowych.
// Jeśli nie, napraw je.

it('data is loaded', () => {})

it('dont search when less then 3 letters', () => {})

it('nothing found', () => {})

it('search when more then 3 letters', () => {})
