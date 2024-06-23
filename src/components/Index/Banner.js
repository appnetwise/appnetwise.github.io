import React from "react"
import AOS from "aos"
import { Link } from "gatsby"
import bannerImg from "../../images/banner1.png"

const Banner = () => {
  React.useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <div className="it-services-banner overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="main-banner-content">
                <h1
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  Digital Transformation
                </h1>
                <h4
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  STRATEGY EXECUTION
                </h4>
                <h4
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                  // style={{ textAlign: "right" }}
                >
                  BREAK-THROUGH RESULTS
                </h4>

                <p
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  From strategy to execution, accelerate business enablement and
                  make your goals a reality.
                </p>

                <div
                  className="btn-box"
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <Link to="/contact" className="default-btn">
                    <i className="flaticon-right"></i>
                    Get Started <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="main-banner-image"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <img src={bannerImg} alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
