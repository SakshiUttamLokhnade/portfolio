import { useState, useEffect, useRef } from 'react'
import './SectionTitle.css'

const SectionTitle = ({ children, id }) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div className={`section-heading ${isVisible ? 'visible' : ''}`} id={id} ref={ref}>
      <h2>{children}</h2>
    </div>
  )
}

export default SectionTitle
