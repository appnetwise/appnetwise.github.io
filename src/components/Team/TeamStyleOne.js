import React from "react"
import { Link } from "gatsby"
import starIcon from "../../images/star-icon.png"
import team1 from "../../images/team/dawood11.png"
import team2 from "../../images/team/nitesh11.png"
import team3 from "../../images/team/rashid11.png"
import team4 from "../../images/team/vamsi11.png"
import team5 from "../../images/team/arun1.png"
import team6 from "../../images/team/hemanth55.png"
import team7 from "../../images/team/fathima.png"
import team8 from "../../images/team/farhath1.png"
import team9 from "../../images/team/sameer55.png"
import team10 from "../../images/team/sai11.png"
import team11 from "../../images/team/vijay11.png"
import team12 from "../../images/team/ranga11.png"

const TeamStyleOne = () => {
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
                  <h3>Dawood</h3>
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
                  <h3>Rashid Ali</h3>
                  <span>Fullstack Software Engineer</span>
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
                  <h3>Sai Vamsi</h3>
                  <span>DevOps Tech Lead</span>
                </div>
              </div>
            </div>


            <div className="col-lg-3 col-sm-6">
              <div className="single-scientist-item-box">
                <div className="image">
                  <img src={team5} alt="team" />

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
                  <h3>Arun Kumar</h3>
                  <span>QA Practice Lead</span>
                </div>
              </div>
            </div>

            
            <div className="col-lg-3 col-sm-6">
              <div className="single-scientist-item-box">
                <div className="image" >
                  <img src={team6} alt="team"  />

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
                  <h3>Hemanth</h3>
                  <span> Sr Developer</span>
                </div>
              </div>
            </div>

            
            <div className="col-lg-3 col-sm-6">
              <div className="single-scientist-item-box">
                <div className="image">
                  <img src={team7} alt="team" />

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
                  <h3>Fathima Zahara</h3>
                  <span>QA Engineer</span>
                </div>
              </div>
            </div>


            
            <div className="col-lg-3 col-sm-6">
              <div className="single-scientist-item-box">
                <div className="image">
                  <img src={team8} alt="team" />

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
                  <h3>Farhath Ayesha</h3>
                  <span>UI/UX FrontEnd Developer</span>
                </div>
              </div>
            </div>

            
            <div className="col-lg-3 col-sm-6">
              <div className="single-scientist-item-box">
                <div className="image">
                  <img src={team9} alt="team" />

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
                  <h3>Sameer Shaik</h3>
                  <span>UI/UX FrontEnd Developer</span>
                </div>
              </div>
            </div>


            
            <div className="col-lg-3 col-sm-6">
              <div className="single-scientist-item-box">
                <div className="image">
                  <img src={team10} alt="team" />

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
                  <h3>Sai Teja</h3>
                  <span>Scrum Master / PM</span>
                </div>
              </div>
            </div>



            
            
            <div className="col-lg-3 col-sm-6">
              <div className="single-scientist-item-box">
                <div className="image">
                  <img src={team11} alt="team" />

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
                  <h3>Vijay Kumari </h3>
                  <span>QA Engineer</span>
                </div>
              </div>
            </div>



            <div className="col-lg-3 col-sm-6">
              <div className="single-scientist-item-box">
                <div className="image">
                  <img src={team12} alt="team" />

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
                  <h3>Ranga Reddy </h3>
                  <span>Devops Engineer</span>
                </div>
              </div>
            </div>






          </div>
          
        </div>
      </section>
    </>
  )
}

export default TeamStyleOne
