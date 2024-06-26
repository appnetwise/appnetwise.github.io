import React from "react"
import { Link } from "gatsby"
import AOS from "aos"
import "aos/dist/aos.css"

import bannerImg3 from "../../images/banner4.png"

const Banner3 = () => {
  // Initialize AOS for this banner
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    })
    AOS.refresh() // Refresh AOS on component mount
  }, [])

  return (
    <div className="it-services-banner overflow-hidden">
      <div className="container">
        <div className="row align-items-center fadeInUp-animation">
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
                Offshore Development
              </h1>
              <h4
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                BUILD RUN TRANSFER
              </h4>
              <p
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                Rely on our technical expertise to help you build your dream
                team. We're here to turn your vision into reality.
              </p>
              <div className="btn-box">
                <Link to="/services" className="default-btn">
                  <i className="flaticon-right"></i>
                  Learn More
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
              <img src={bannerImg3} alt="banner" style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner3
