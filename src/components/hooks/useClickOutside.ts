import { useEffect, useRef } from 'react'

export const useClickOutside = (handler: () => void) => {
  const domNode = useRef<HTMLElement>(null)

  useEffect(() => {
    const modalHandler = (event: MouseEvent) => {
      if (!domNode.current?.contains(event.target as Node)) {
        handler()
      }
    }
  
    document.addEventListener('mousedown', modalHandler)
  
    return () => {
      document.removeEventListener('mousedown', modalHandler)
    }
  })

  return domNode
}
