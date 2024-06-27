import React from "react"
import starIcon from "../../images/star-icon.png"
import team1 from "../../images/team/dawood11.png"
import team2 from "../../images/team/nitesh11.png"
import team3 from "../../images/team/rashid11.png"
import team4 from "../../images/team/vamsi11.png"


import { Link } from "gatsby"

const TeamMember = () => {
  return (
    <>
      <section className="scientist-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="team" />
              Team Members
            </span>
            <h2>Our Awesome Team</h2>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-scientist-item-box">
                <div className="image">
                  <img src={team1} alt="team" />

                  <ul className="social">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/dawood-abdullah-mohammed-72687519/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="content">
                  <h3>Dawood </h3>
                  <span>Director of Engineering</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-scientist-item-box">
                <div className="image">
                  <img src={team2} alt="team" />

                  <ul className="social">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/niteshkhandelwal/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="content">
                  <h3>Nitesh</h3>
                  <span>Technical Architect</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-scientist-item-box">
                <div className="image">
                  <img src={team3} alt="team" />

                  <ul className="social">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/rashidtruba/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="content">
                  <h3>Rashid Ali</h3>
                  <span>Fullstack Software Engineer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-scientist-item-box">
                <div className="image">
                  <img src={team4} alt="team" border-radius ="20px"/>

                  <ul className="social">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/saivamsi9594/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="content">
                  <h3>Sai Vamsi</h3>
                  <span>DevOps Tech Lead</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="load-more-btn text-center">
              <Link to="/team" className="default-btn">
                <i className="flaticon-refresh"></i>
                Load More <span></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TeamMember
