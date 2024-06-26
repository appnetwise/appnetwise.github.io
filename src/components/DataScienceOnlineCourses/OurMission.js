import React from "react"
import { Link } from "gatsby"
import mission2 from "../../images/about/abou1.jpg"
import shape1 from "../../images/our-mission/our-mission-shape1.png"

const OurMission = () => {
  return (
    <>
      <div className="our-mission-area ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="our-mission-content">
                <div className="content">
                  <h2>Managed Dedicated Resources</h2>
                  <p>
                    We provide clients with excellent engineers working
                    dedicatedly full-time 8*5 remotely.
                  </p>
                  <p>
                    Continuous communication over teams, daily project updates
                    on notion, whatsapp groups for faster communication.
                  </p>
                  <p>Benefits of having managed dedicated resources :</p>
                  <ul className="features-list">
                    <li>
                      <i className="flaticon-tick"></i>Your own dedicated team
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Onboarding and relieving
                      engineers instantly (as low as 1 week to onboard new
                      member)
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Member of big team of
                      experienced engineers.
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Optimized and cost
                      reduction of upto 50 % as compared to on-shore team
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="our-mission-image">
                <div className="shape">
                  <img src={mission2} alt="shape" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurMission
