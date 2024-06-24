import React from "react"
import starIcon from "../../images/star-icon.png"
import team1 from "../../images/team/team1.jpg"

import team4 from "../../images/team/team4.jpg"
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
                        href="https://www.linkedin.com/"
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
                  <h3>Merv Adrian</h3>
                  <span>CEO & Founder</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-scientist-item-box">
                <div className="image">
                  <img src={team4} alt="team" />

                  <ul className="social">
                    <li>
                      <a
                        href="https://www.linkedin.com/"
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
                  <h3>Marie Curie</h3>
                  <span>Support</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-scientist-item-box">
                <div className="image">
                  <img src={team4} alt="team" />

                  <ul className="social">
                    <li>
                      <a
                        href="https://www.linkedin.com/"
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
                  <h3>Marie Curie</h3>
                  <span>Support</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-scientist-item-box">
                <div className="image">
                  <img src={team4} alt="team" />

                  <ul className="social">
                    <li>
                      <a
                        href="https://www.linkedin.com/"
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
                  <h3>Marie Curie</h3>
                  <span>Support</span>
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
