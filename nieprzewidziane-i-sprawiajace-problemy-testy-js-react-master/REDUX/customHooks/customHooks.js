import { useMemo } from 'react'
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'

// Ten hook łączy niektóre akcje z danego reducer'a, tak aby dało się je wywołać w danym komponencie.
// Poznaj jak to działa - https://github.com/Przemocny/zbior-zadan-html-css-js-react/tree/master/FREE%20CODE/REDUX.

export const useSomeActions = (actionsAsArray) => {
  const dispatch = useDispatch()
  return useMemo(() => actionsAsArray.map((action) => bindActionCreators(action, dispatch)), [
    dispatch
  ])
}

// Przetestuj:
// - Czy po użyciu hooka oraz dowolnej akcji w komponencie store zostanie zmieniony według użytej akcji.
