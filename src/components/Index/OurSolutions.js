import React from "react"
import { Link } from "gatsby"
import starIcon from "../../images/star-icon.png"
import icon1 from "../../images/services/icon11c.png"
import icon2 from "../../images/services/icon2c.png"
import icon3 from "../../images/services/icon3c.png"
import icon4 from "../../images/services/icon4c.png"
import icon5 from "../../images/services/icon5c.png"
import icon6 from "../../images/services/icon6.png"
import icon7 from "../../images/services/icon7c.png"
import icon8 from "../../images/services/icon8c.png"

const OurSolutions = () => {
  return (
    <>
      <section id="our-services" className="solutions-area pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="star" />
              Our Services
            </span>
            <h2>
              Enhance digital presence and drive growth with our services.
            </h2>
          </div>

          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-boxes-item">
                <div className="icon">
                  <img src={icon1} alt="banner" width="20%" />
                </div>
                <h3>
                  <Link to="/services/consulting-advisory">
                    Consulting & Advisory
                  </Link>
                </h3>
                <p>
                  We offer IT consulting for modernization, optimizing value
                  across organizational boundaries. Our approach maximizes the
                  collective impact of technology, transcending individual
                  components.
                </p>

                <Link
                  to="/services/consulting-advisory"
                  className="default-btn"
                >
                  <i className="flaticon-right"></i>
                  Read More <span></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-boxes-item">
                <div className="icon">
                  <img src={icon2} alt="banner" width="20%" />
                </div>
                <h3>
                  <Link to="/services/cloud-adoption">Cloud Adoption</Link>
                </h3>
                <p>
                  Leverage Public Cloud with our risk-mitigating expertise. We
                  offer cloud-native, vendor-neutral solutions for scalable,
                  secure, and cost-effective platforms, optimizing your business
                  enablement journey.
                </p>

                <Link to="/services/cloud-adoption" className="default-btn">
                  <i className="flaticon-right"></i>
                  Read More <span></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-sm-3 offset-md-3">
              <div className="single-boxes-item">
                <div className="icon">
                  <img src={icon3} alt="banner" width="20%" />
                </div>
                <h3>
                  <Link to="/services/api-enablement">API Enablement</Link>
                </h3>
                <p>
                  We empower agility through API-led integration, connecting
                  applications with standardized, reusable services. Collaborate
                  with us for tailored API strategy, tool selection, and product
                  development.
                </p>

                <Link to="/services/api-enablement" className="default-btn">
                  <i className="flaticon-right"></i>
                  Read More <span></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-sm-3 offset-md-3">
              <div className="single-boxes-item">
                <div className="icon">
                  <img src={icon4} alt="banner" width="20%" />
                </div>
                <h3>
                  <Link to="/services/software-development">
                    Software Development
                  </Link>
                </h3>
                <p>
                  Harnessing specialized engineering prowess, we empower
                  organizations to tackle challenges and foresee future needs
                  with innovative software solutions, fostering adaptability and
                  success in dynamic environments.
                </p>

                <Link
                  to="/services/software-development"
                  className="default-btn"
                >
                  <i className="flaticon-right"></i>
                  Read More <span></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-sm-3 offset-md-3">
              <div className="single-boxes-item">
                <div className="icon">
                  <img src={icon5} alt="banner" width="20%" />
                </div>
                <h3>
                  <Link to="/services/block-chain">Blockchain</Link>
                </h3>
                <p>
                  Blockchain's decentralized ledger revolutionizes industries
                  with secure, transparent transactions, ensuring trust and
                  efficiency beyond finance and supply chain, by eliminating
                  intermediaries and reducing fraud risks.
                </p>

                <Link to="/services/block-chain" className="default-btn">
                  <i className="flaticon-right"></i>
                  Read More <span></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-sm-3 offset-md-3">
              <div className="single-boxes-item">
                <div className="icon">
                  <img src={icon6} alt="banner" width="20%" />
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

                <Link to="/services/ai-ml" className="default-btn">
                  <i className="flaticon-right"></i>
                  Read More <span></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-sm-3 offset-md-3">
              <div className="single-boxes-item">
                <div className="icon">
                  <img src={icon7} alt="banner" width="20%" />
                </div>
                <h3>
                  <Link to="/services/quality-assurance">
                    Quality Assurance
                  </Link>
                </h3>
                <p>
                  Unlock quality-driven success with our proven methodologies
                  such as planning, control, and continuous improvement,
                  elevating processes, mitigating risks, ensuring unparalleled
                  customer satisfaction.
                </p>

                <Link to="/services/quality-assurance" className="default-btn">
                  <i className="flaticon-right"></i>
                  Read More <span></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-sm-3 offset-md-3">
              <div className="single-boxes-item">
                <div className="icon">
                  <img src={icon8} alt="banner" width="20%" />
                </div>
                <h3>
                  <Link to="/services/devops">DevOps Practices</Link>
                </h3>
                <p>
                  DevOps goes beyond hype, fostering collaboration and
                  automation for continuous delivery. By integrating development
                  and operations, it accelerates innovation and enhances
                  responsiveness to customer needs.
                </p>

                <Link to="/services/devops" className="default-btn">
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
