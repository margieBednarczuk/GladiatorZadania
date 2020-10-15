// Rozwiązanie opracował Gladiator JS - gh: Ofadiman
// Rozwiązanie nie testowane pod większe ilości danych

import React, { FC, ReactElement } from 'react'
import { Provider, useSelector } from 'react-redux'
import { createStore, Action, ActionCreator } from 'redux'
import { render, fireEvent } from '@testing-library/react'
import { useSomeActions } from './customHooks'

// Tworzy store redux'a po staremu, bez redux/toolkit.
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET_COUNTER = 'RESET_COUNTER'

interface IAddOneAction {
  type: typeof INCREMENT
  payload: number
}
interface ISubtractOneAction {
  type: typeof DECREMENT
  payload: number
}
interface IResetCounterAction {
  type: typeof RESET_COUNTER
}

type ICounterAction = IAddOneAction | ISubtractOneAction | IResetCounterAction

const addOne: ActionCreator<Action> = (): IAddOneAction => ({ type: INCREMENT, payload: 1 })
const subtractOne: ActionCreator<Action> = (): ISubtractOneAction => ({
  type: DECREMENT,
  payload: -1
})
const resetCounter: ActionCreator<Action> = (): IResetCounterAction => ({ type: RESET_COUNTER })

const CounterActionCreatorsMap = { addOne, subtractOne, resetCounter }

const counterReducer = (state = 0, action: ICounterAction) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload
    case DECREMENT:
      return state + action.payload
    case RESET_COUNTER:
      return 0
    default:
      return state
  }
}

// Tworzy komponent, w którym działa hook.
const Component = () => {
  const counter = useSelector((state) => state)
  const [counterActions] = useSomeActions([CounterActionCreatorsMap])
  return (
    <div>
      <span data-testid="counter">{counter}</span>
      <button onClick={() => counterActions.addOne()}>increment</button>
      <button onClick={() => counterActions.subtractOne()}>decrement</button>
      <button onClick={() => counterActions.resetCounter()}>reset</button>
    </div>
  )
}

// Tworzy funkcję, która renderuje component w store Providerze.
const renderWithStore = (
  ui: ReactElement,
  {
    initialState = 0,
    store = createStore(counterReducer, initialState)
  }: { initialState: number; store?: any }
) => {
  const Wrapper: FC = ({ children }) => {
    return <Provider store={store}>{children}</Provider>
  }
  return render(ui, { wrapper: Wrapper })
}

describe('useSomeActions', () => {
  const testCases = [
    {
      name: 'should increment counter by 1 after increment button click',
      buttonName: 'increment',
      store: { initialState: 0 },
      expectedValue: '1'
    },
    {
      name: 'should decrement counter by 1 after decrement button click',
      buttonName: 'decrement',
      store: { initialState: 0 },
      expectedValue: '-1'
    },
    {
      name: 'should reset counter to 0 after reset button click',
      buttonName: 'reset',
      store: { initialState: 3 },
      expectedValue: '0'
    }
  ]

  testCases.forEach(({ store, name, buttonName, expectedValue }) => {
    it(name, () => {
      const { getByTestId, getByText } = renderWithStore(<Component />, store)
      fireEvent.click(getByText(buttonName))
      expect(getByTestId('counter').textContent).toBe(expectedValue)
    })
  })
})
