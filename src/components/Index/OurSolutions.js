import React from "react"
import { Link } from "gatsby"
import starIcon from "../../images/star-icon.png"
import icon1 from "../../images/services/service-icon1.png"
import icon2 from "../../images/services/service-icon2.png"
import icon3 from "../../images/services/service-icon3.png"

const OurSolutions = () => {
  return (
    <>
      <section className="solutions-area pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="star" />
              Our Services
            </span>
            <h2>We Different From Others Should Choose Us</h2>
          </div>

          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-boxes-item">
                <div className="icon">
                  <img src={icon1} alt="banner" />
                </div>
                <h3>
                  <Link to="/services/service-details">
                    Consulting & Advisory
                  </Link>
                </h3>
                <p>
                  We offer IT consulting for modernization, optimizing value
                  across organizational boundaries. Our approach maximizes the
                  collective impact of technology, transcending individual
                  components.
                </p>

                <Link to="/services/service-details" className="default-btn">
                  <i className="flaticon-right"></i>
                  Read More <span></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-boxes-item">
                <div className="icon">
                  <img src={icon2} alt="banner" />
                </div>
                <h3>
                  <Link to="/services/service-details">Cloud Adoption</Link>
                </h3>
                <p>
                  Leverage Public Cloud with our risk-mitigating expertise. We
                  offer cloud-native, vendor-neutral solutions for scalable,
                  secure, and cost-effective platforms, optimizing your business
                  enablement journey.
                </p>

                <Link to="/services/service-details" className="default-btn">
                  <i className="flaticon-right"></i>
                  Read More <span></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-sm-3 offset-md-3">
              <div className="single-boxes-item">
                <div className="icon">
                  <img src={icon3} alt="banner" />
                </div>
                <h3>
                  <Link to="/services/service-details">API Enablement</Link>
                </h3>
                <p>
                  We empower agility through API-led integration, connecting
                  applications with standardized, reusable services. Collaborate
                  with us for tailored API strategy, tool selection, and product
                  development.
                </p>

                <Link to="/services/service-details" className="default-btn">
                  <i className="flaticon-right"></i>
                  Read More <span></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-sm-3 offset-md-3">
              <div className="single-boxes-item">
                <div className="icon">
                  <img src={icon3} alt="banner" />
                </div>
                <h3>
                  <Link to="/services/service-details">
                    Software Development
                  </Link>
                </h3>
                <p>
                  Harnessing specialized engineering prowess, we empower
                  organizations to tackle challenges and foresee future needs
                  with innovative software solutions, fostering adaptability and
                  success in dynamic environments.
                </p>

                <Link to="/services/service-details" className="default-btn">
                  <i className="flaticon-right"></i>
                  Read More <span></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-sm-3 offset-md-3">
              <div className="single-boxes-item">
                <div className="icon">
                  <img src={icon3} alt="banner" />
                </div>
                <h3>
                  <Link to="/services/service-details">Blockchain</Link>
                </h3>
                <p>
                  Blockchain's decentralized ledger revolutionizes industries
                  with secure, transparent transactions, ensuring trust and
                  efficiency beyond finance and supply chain, by eliminating
                  intermediaries and reducing fraud risks.
                </p>

                <Link to="/services/service-details" className="default-btn">
                  <i className="flaticon-right"></i>
                  Read More <span></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-sm-3 offset-md-3">
              <div className="single-boxes-item">
                <div className="icon">
                  <img src={icon3} alt="banner" />
                </div>
                <h3>
                  <Link to="/services/service-details">AI & ML</Link>
                </h3>
                <p>
                  we specialize in bespoke AI and ML solutions, driving industry
                  innovation and efficiency. With tailored strategies and
                  cutting-edge tech, we empower clients to excel in the digital
                  landscape, fostering collaboration and success.
                </p>

                <Link to="/services/service-details" className="default-btn">
                  <i className="flaticon-right"></i>
                  Read More <span></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-sm-3 offset-md-3">
              <div className="single-boxes-item">
                <div className="icon">
                  <img src={icon3} alt="banner" />
                </div>
                <h3>
                  <Link to="/services/service-details">Quality Assurance</Link>
                </h3>
                <p>
                  Unlock quality-driven success with our proven methodologies
                  such as planning, control, and continuous improvement,
                  elevating processes, mitigating risks, ensuring unparalleled
                  customer satisfaction.
                </p>

                <Link to="/services/service-details" className="default-btn">
                  <i className="flaticon-right"></i>
                  Read More <span></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-sm-3 offset-md-3">
              <div className="single-boxes-item">
                <div className="icon">
                  <img src={icon3} alt="banner" />
                </div>
                <h3>
                  <Link to="/services/service-details">DevOps Practices</Link>
                </h3>
                <p>
                  DevOps goes beyond hype, fostering collaboration and
                  automation for continuous delivery. By integrating development
                  and operations, it accelerates innovation and enhances
                  responsiveness to customer needs.
                </p>

                <Link to="/services/service-details" className="default-btn">
                  <i className="flaticon-right"></i>
                  Read More <span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurSolutions
