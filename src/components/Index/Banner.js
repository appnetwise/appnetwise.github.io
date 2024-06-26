import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import AOS from "aos"
import "aos/dist/aos.css"

import bannerImg1 from "../../images/banner1.png"
import bannerImg2 from "../../images/banner.png"
import bannerImg3 from "../../images/banner4.png"

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    })

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % banners.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const banners = [
    {
      image: bannerImg1,
      title: "Digital Transformation",
      subtitle1: "STRATEGY EXECUTION",
      subtitle2: "BREAK-THROUGH RESULTS",
      description:
        "Transforming strategy into actionable execution, Accelerate business enablement and achieve your goals with us, turning vision into reality through seamless implementation.",
      navigationLink: "#our-services",
      button: "Get Started",
    },
    {
      image: bannerImg3,
      title: "Offshore Development",
      subtitle1: "BUILD RUN TRANSFER",
      description:
        "Rely on our technical expertise to help you build your dream team. We're here to turn your vision into reality.",
      navigationLink: "/services",
      button: "Learn More",
    },
    {
      image: bannerImg2,
      title: "Software Development",
      subtitle1: "CREATIVE THINKING",
      subtitle2: "RESULTS-DRIVEN",
      description:
        "We specialize in creative problem-solving to deliver innovative solutions in software development, focusing on tangible results",
      navigationLink: "/services/software-development",
      button: "Learn More",
    },
  ]

  const currentBanner = banners[currentIndex]

  const handleDotClick = index => {
    setCurrentIndex(index)
  }

  return (
    <div className="it-services-banner overflow-hidden">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div
              className="main-banner-content fade-right"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <h1
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                {currentBanner.title}
              </h1>
              <h4
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                {currentBanner.subtitle1}
              </h4>
              <h4
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                {currentBanner.subtitle2}
              </h4>
              <p
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                {currentBanner.description}
              </p>
              <div className="btn-box">
                <Link to={currentBanner.navigationLink} className="default-btn">
                  <i className="flaticon-right"></i>
                  {currentBanner.button}
                  <span></span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div
              className="main-banner-image fade-up"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <img
                src={currentBanner.image}
                alt="banner"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
        <div className="slider-dots">
          {banners.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Banner
