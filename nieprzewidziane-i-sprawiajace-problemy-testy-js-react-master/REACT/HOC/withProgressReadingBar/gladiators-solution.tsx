// Rozwiązanie opracował Gladiator JS - gh: Ofadiman

import React, { ComponentType, ReactElement } from 'react'

import { useIntersectionRatio } from 'przemocny/useIntersectionRatio/useIntersectionRatio'
import { StyledComponentWrapper, StyledProgressBar } from 'styles'

type HOC<T = {}> = <K>(WrappedComponent: ComponentType<T & K>) => (props: K) => ReactElement<T & K>

export const withProgressReadingBar: HOC = (WrappedComponent) => (props) => {
  const { intersectionRatio, elementRef } = useIntersectionRatio<HTMLDivElement>()
  return (
    <StyledComponentWrapper ref={elementRef}>
      <StyledProgressBar value={intersectionRatio} max={100} />
      <WrappedComponent {...props} />
    </StyledComponentWrapper>
  )
}

/* ===== Użycie ===== */

export const WithProgressBarComponent = withProgressReadingBar(() => {
  return (
    <article className="article">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industrys standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book. It has survived not only five
      centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
      was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
      passages, and more recently with desktop publishing software like Aldus PageMaker including
      versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an
      unknown printer took a galley of type and scrambled it to make a type specimen book. It has
      survived not only five centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
      containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
      PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing
      and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since
      the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuries, but also the leap into electronic
      typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
      of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
      software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy
      text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard
      dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
      it to make a type specimen book. It has survived not only five centuries, but also the leap
      into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
      with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
      desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </article>
  )
})
