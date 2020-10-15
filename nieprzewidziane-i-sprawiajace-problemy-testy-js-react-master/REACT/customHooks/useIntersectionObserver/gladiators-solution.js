// Rozwiązanie opracował Gladiator JS - gh: michalniem
// rozwiązanie nie testowane pod większe ilości danych

import { useEffect, useState } from 'react'

// useIntersectionObserver - lepsza nazwa na tą funkcjonalnośc
function useVisibilitySensor(
  ref,
  options = {
    threshold: [1],
    rootMargin: '-100px 0px -100px 0px'
  }
) {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const { current } = ref
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting)
    }, options)
    if (current) observer.observe(current)

    return () => {
      if (current) observer.unobserve(current)
    }
  }, [ref])

  return isIntersecting
}

export default useVisibilitySensor

// użycie
// const isIntersecting = useIntersectionObserver(refToComponent, intersectionObserverOptions)
