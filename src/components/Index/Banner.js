import React, { useState, useEffect } from "react"
import Banner1 from "./Banner1"

import Banner3 from "./Banner3"

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % 2)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const handleDotClick = index => {
    setCurrentIndex(index)
  }

  const handleKeyPress = (event, index) => {
    if (event.key === "Enter" || event.key === " ") {
      setCurrentIndex(index)
    }
  }

  return (
    <div className="banner-container">
      <div className="banner-content">
        {currentIndex === 0 && <Banner1 />}
        {currentIndex === 1 && <Banner3 />}
      </div>

      <div className="slider-dots">
        {[0, 1].map(index => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
            onKeyPress={event => handleKeyPress(event, index)}
            tabIndex="0"
            role="button"
            aria-label={`Slide ${index + 1}`}
          ></span>
        ))}
      </div>
    </div>
  )
}

export default Banner
