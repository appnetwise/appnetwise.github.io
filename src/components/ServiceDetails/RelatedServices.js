import React from "react"
import { Link } from "gatsby"
import Slider from "react-slick"
import icon1 from "../../images/services/service-icon1.png"
import icon2 from "../../images/services/service-icon2.png"
import icon3 from "../../images/services/service-icon3.png"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const RelatedServices = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section className="services-area pt-100 pb-70 bg-f1f8fb">
      <div className="container">
        <div className="section-title">
          <h2>More Services You Might Like</h2>
        </div>

        <Slider {...settings}>
          <div className="single-services-box">
            <div className="icon">
              <img src={icon1} alt="about" />
            </div>
            <h3>
              <Link to="/services/consulting-advisory">
                Consulting & Advisory
              </Link>
            </h3>
            <p>
              We offer IT consulting for modernization, optimizing value across
              organizational boundaries. Our approach maximizes the collective
              impact of technology, transcending individual components.
            </p>

            <Link to="/services/consulting-advisory" className="read-more-btn">
              Read More <i className="flaticon-right"></i>
            </Link>
          </div>
          <div className="single-services-box">
            <div className="icon">
              <img src={icon2} alt="about" />
            </div>
            <h3>
              <Link to="/services/cloud-adoption">Cloud Adoption</Link>
            </h3>
            <p>
              Leverage Public Cloud with our risk-mitigating expertise. We offer
              cloud-native, vendor-neutral solutions for scalable, secure, and
              cost-effective platforms, optimizing your business enablement
              journey.
            </p>

            <Link to="/services/cloud-adoption" className="read-more-btn">
              Read More <i className="flaticon-right"></i>
            </Link>
          </div>

          <div className="single-services-box">
            <div className="icon">
              <img src={icon3} alt="about" />
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

            <Link to="/services/api-enablement" className="read-more-btn">
              Read More <i className="flaticon-right"></i>
            </Link>
          </div>

          <div className="single-services-box">
            <div className="icon">
              <img src={icon3} alt="about" />
            </div>
            <h3>
              <Link to="/services/software-development">
                Software Development
              </Link>
            </h3>
            <p>
              Harnessing specialized engineering prowess, we empower
              organizations to tackle challenges and foresee future needs with
              innovative software solutions, fostering adaptability and success
              in dynamic environments.
            </p>

            <Link to="/services/software-development" className="read-more-btn">
              Read More <i className="flaticon-right"></i>
            </Link>
          </div>

          <div className="single-services-box">
            <div className="icon">
              <img src={icon3} alt="about" />
            </div>
            <h3>
              <Link to="/services/quality-assurance">Quality Assurance</Link>
            </h3>
            <p>
              Unlock quality-driven success with our proven methodologies such
              as planning, control, and continuous improvement, elevating
              processes, mitigating risks, ensuring unparalleled customer
              satisfaction.
            </p>

            <Link to="/services/quality-assurance" className="read-more-btn">
              Read More <i className="flaticon-right"></i>
            </Link>
          </div>

          <div className="single-services-box">
            <div className="icon">
              <img src={icon3} alt="about" />
            </div>
            <h3>
              <Link to="/services/block-chain">Blockchain</Link>
            </h3>
            <p>
              Blockchain's decentralized ledger revolutionizes industries with
              secure, transparent transactions, ensuring trust and efficiency
              beyond finance and supply chain, by eliminating intermediaries and
              reducing fraud risks.
            </p>

            <Link to="/services/block-chain" className="read-more-btn">
              Read More <i className="flaticon-right"></i>
            </Link>
          </div>
          <div className="single-services-box">
            <div className="icon">
              <img src={icon3} alt="about" />
            </div>
            <h3>
              <Link to="/services/ai-ml">AI & ML</Link>
            </h3>
            <p>
              we specialize in bespoke AI and ML solutions, driving industry
              innovation and efficiency. With tailored strategies and
              cutting-edge tech, we empower clients to excel in the digital
              landscape, fostering collaboration and success.
            </p>

            <Link to="/services/ai-ml" className="read-more-btn">
              Read More <i className="flaticon-right"></i>
            </Link>
          </div>

          <div className="single-services-box">
            <div className="icon">
              <img src={icon3} alt="about" />
            </div>
            <h3>
              <Link to="/services/quality-assurance">Quality Assurance</Link>
            </h3>
            <p>
              Unlock quality-driven success with our proven methodologies such
              as planning, control, and continuous improvement, elevating
              processes, mitigating risks, ensuring unparalleled customer
              satisfaction.
            </p>

            <Link to="/services/quality-assurance" className="read-more-btn">
              Read More <i className="flaticon-right"></i>
            </Link>
          </div>
          <div className="single-services-box">
            <div className="icon">
              <img src={icon3} alt="about" />
            </div>
            <h3>
              <Link to="/services/devops">DevOps Practices</Link>
            </h3>
            <p>
              DevOps goes beyond hype, fostering collaboration and automation
              for continuous delivery. By integrating development and
              operations, it accelerates innovation and enhances responsiveness
              to customer needs
            </p>

            <Link to="/services/devops" className="read-more-btn">
              Read More <i className="flaticon-right"></i>
            </Link>
          </div>
        </Slider>
      </div>
    </section>
  )
}

export default RelatedServices
