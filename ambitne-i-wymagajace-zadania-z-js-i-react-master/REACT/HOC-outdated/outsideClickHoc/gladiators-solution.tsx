// Rozwiązanie opracował Gladiator JS - gh: Ofadiman
// rozwiązanie nie testowane pod większe ilości danych
 

/**
 * @Info "T" is type of your InjectedProps
 * @Info "K" is type of props that you pass to wrapped component
 *
 * @Example
 * const withSomething: HOC<InjectedProps> = (WrappedComponent) => (props) => {}
 * const EnhancedComponent = withSomething<{value: string}>(() => {...})
 */
export type HOC<T = {}> = <K>(WrappedComponent: ComponentType<T & K>) => (props: K) => ReactElement<T & K>

interface IInjectedProps {
  onClickOutside: () => void
  onStartListeningClickOutside: () => void
  waitingOnClickOutside: boolean
}

export const outsideClickHOC: HOC<IInjectedProps> = (WrappedComponent) => (props) => {
  const [waitingOnClickOutside, setWaitingOnClickOutside] = useState<boolean>(false)

  const onStartListeningClickOutside = useCallback(() => setWaitingOnClickOutside(true),[])
  const onClickOutside = useCallback(() => setWaitingOnClickOutside(false),[])

  return (
    <StyledComponentWrapper>
      {waitingOnClickOutside && <StyledBackdrop onClick={onClickOutside} />}
      <WrappedComponent
        {...props}
        {...{
          onStartListeningClickOutside,
          waitingOnClickOutside,
          onClickOutside
        }}
      />
    </StyledComponentWrapper>
  )
}
