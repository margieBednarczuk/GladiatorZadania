// Rozwiązanie opracował Gladiator JS - gh: Ofadiman

import React, { ComponentType, ReactElement } from 'react'

import { StyledForm } from 'styles'

type IOnlyWithAuthedUser = <T>(
  WrappedComponent: ComponentType<T>,
  store: any
) => (props: T) => ReactElement<T>

export const onlyWithAuthedUser: IOnlyWithAuthedUser = (WrappedComponent, store) => (props) => {
  WrappedComponent.displayName = `onlyWithAuthedUser(${WrappedComponent.displayName})`

  if (typeof store.user.email !== 'string')
    return <div>email format in store is not correct on {WrappedComponent.displayName}</div>
  if (typeof store.user.password !== 'string')
    return <div>password format in store is not correct on {WrappedComponent.displayName}</div>
  if (typeof store.isAuthed !== 'boolean')
    return <div>isAuthed format in store is not correct on {WrappedComponent.displayName}</div>

  if (!store.isAuthed)
    return (
      <StyledForm data-testid="login">
        <input type="text" placeholder="email" />
        <input type="text" placeholder="password" />
      </StyledForm>
    )

  return <WrappedComponent {...props} />
}
