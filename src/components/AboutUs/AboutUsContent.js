import React from "react"
import aboutImage from "../../images/about/about111.png"
import starIcon from "../../images/star-icon.png"
import icon4 from "../../images/icons/ADVICEICON.png"
import icon5 from "../../images/icons/BUILDICON.png"
import icon6 from "../../images/icons/COLLOBORATEICON.png"
import shape1 from "../../images/shape/circle-shape1.png"

const AboutUsContent = () => {
  return (
    <>
      <section className="about-area ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image" >
                <img src={aboutImage} alt="banner"/>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="content">
                  <span className="sub-title">
                    <img src={starIcon} alt="banner" />
                    About Us
                  </span>
                  <h2>What we do</h2>
                  <p>
                    We help clients achieve the best business outcomes in their
                    ongoing digital transformation journey, with a pragmatic
                    approach, and the right technology.
                  </p>
                  <p>
                    We bring together the best business strategists and
                    technologists to deliver transformational impact.
                  </p>
                  <p>
                    Our goal is never change for the sake of it. We work on
                    technology changes that matters, making them more efficient,
                    more effective, and more resilient.
                  </p>

                  <ul
                    className="features-list"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <li>
                      <img src={icon4} alt="banner" width="20%" />
                      <h3>Advise</h3>
                      <p>
                        Assessing your readiness and creating a roadmap to
                        achieve your digital vision.
                      </p>
                    </li>
                    <li>
                      <img src={icon5} alt="banner" width="20%"/>
                      <h3>Build</h3>
                      <p>
                        Building solutions that balance today’s needs with
                        tomorrow's opportunities.
                      </p>
                    </li>
                    <li>
                      <img src={icon6} alt="banner" width="20%"/>
                      <h3>Collaborate</h3>
                      <p>
                        Co-creating and developing a transformative program
                        tailored to your needs.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-shape1">
          <img src={shape1} alt="banner" />
        </div>

        <div className="container">
          <div className="about-inner-area">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our History</h3>
                  <p>
                    Real innovations and a positive customer experience are the
                    heart of successful communication.
                  </p>

                  <ul className="features-list">
                    <li>
                      <i className="flaticon-tick"></i> Activate Listening
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Brilliant minds
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Better. Best. Wow!
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Branding it better!
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our Mission</h3>
                  <p>
                    Real innovations and a positive customer experience are the
                    heart of successful communication.
                  </p>

                  <ul className="features-list">
                    <li>
                      <i className="flaticon-tick"></i> Creating. Results.
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Expect more
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Good thinking
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> In real we trust
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                <div className="about-text">
                  <h3>Who we are</h3>
                  <p>
                    Real innovations and a positive customer experience are the
                    heart of successful communication.
                  </p>

                  <ul className="features-list">
                    <li>
                      <i className="flaticon-tick"></i> Stay real. Always.
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> We have you covered
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> We turn heads
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Your brand, promoted
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-shape1">
          <img src={shape1} alt="banner" />
        </div>
      </section>
    </>
  )
}

export default AboutUsContent
