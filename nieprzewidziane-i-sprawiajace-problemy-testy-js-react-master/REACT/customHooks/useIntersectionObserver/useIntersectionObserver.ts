// Rozwiązanie opracował Gladiator JS - gh: Ofadiman

import { useCallback, useEffect, useRef, useState } from 'react'

export const useIntersectionObserver = <T extends HTMLElement>(
  intersectionObserverOptions: IntersectionObserverInit = { rootMargin: '0px', threshold: 0 }
) => {
  const [intersectionObserverEntry, setIntersectionObserverEntry] = useState<
    IntersectionObserverEntry
  >()
  const observerRef = useRef<IntersectionObserver>(
    new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      setIntersectionObserverEntry(entries[0])
    }, intersectionObserverOptions)
  )
  const elementRef = useRef<T>()

  const setRef = useCallback((node: T) => {
    if (elementRef.current) {
      observerRef.current.unobserve(elementRef.current)
    }

    if (node) {
      observerRef.current.observe(node)
    }

    elementRef.current = node
  }, [])

  useEffect(() => {
    const observer = observerRef.current
    return () => {
      observer.disconnect()
    }
  }, [])

  return { setRef, intersectionObserverEntry }
}
