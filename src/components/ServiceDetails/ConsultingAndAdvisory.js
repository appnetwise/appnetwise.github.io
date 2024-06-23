import React from "react"

import service2 from "../../images/services/service2.png"

const ConsultingAndAdvisory = () => {
  return (
    <>
      <section className="services-details-area ptb-70">
        <div className="container">
          <div className="row justify-content">
            <div className=" col-md-12">
              {/* <div className="services-details-image">
                <img src={details1} alt="about" />
              </div> */}

              <div className="services-details-desc justify-content">
                {/* <span className="sub-title">Consulting & Advisory</span> */}
                <div>
                  <h2 className="main-banner-image">About this Service</h2>
                  <p>
                    Digital transformation puts entirely new demands and
                    expectations on your systems and architecture. Once an
                    organisation understands the different phases of their
                    digital modernisation journey, its leaders should assess
                    where they stand before embarking on their journey. A deep
                    dive into their processes, business goals and vision will
                    help them set the pace for their journey with a clear
                    roadmap.
                  </p>
                  <p>
                    We provide the assurance that future visions are built on
                    strong foundations, that they’re informed by relevant
                    insights, and guided by clear judgement. In all we do, we
                    define the what, how, and why of change to support smart,
                    sure decision-making.
                  </p>
                </div>
                <blockquote>
                  <p>
                    The more value a transformation captures as it progresses,
                    the more it becomes self-funding and the greater the support
                    it gains. Often a company’s approach is to let a thousand
                    flowers bloom. But this spreads scarce resources thinly. 
                  </p>
                </blockquote>
                <div className="ptb-70">
                  <h2 className="main-banner-image">What we do?</h2>
                  <div className="row">
                    <div
                      className="col-lg-4 col-sm-6"
                      style={{ display: "flex" }}
                    >
                      <div className="single-solutions-box single-solutions-box-hover">
                        <div className="icon">
                          <i className="flaticon-rocket"></i>
                        </div>
                        <h3>Business Case & Roadmap</h3>
                        <p>
                          We focus on your most critical IT challenges and
                          opportunities, defining timelines, strategies and
                          resources to achieve your objectives, growth, and new
                          business potential.
                        </p>
                      </div>
                    </div>

                    <div
                      className="col-lg-4 col-sm-6"
                      style={{ display: "flex" }}
                    >
                      <div className="single-solutions-box single-solutions-box-hover">
                        <div className="icon">
                          <i className="flaticon-laptop"></i>
                        </div>
                        <h3>Tech & Engineering Due Diligence</h3>
                        <p>
                          We help assess your organisation’s tech-stack and
                          capabilities, and propose comprehensive technology
                          pathways, architecture and tooling.
                        </p>
                      </div>
                    </div>

                    <div
                      className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3"
                      style={{ display: "flex" }}
                    >
                      <div className="single-solutions-box single-solutions-box-hover">
                        <div className="icon">
                          <i className="flaticon-money"></i>
                        </div>
                        <h3>Technology Transformation</h3>
                        <p>
                          We adopt tech trends and emerging technologies, in
                          combination with innovation, experience and
                          pragmatism, to deliver exceptional results.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="main-banner-image">
                  Consulting & Advisory... seeing beyond
                </h2>

                <div className="overview-box">
                  <div className="overview-content">
                    <div className="content right-content">
                      <p>
                        We help organisations assess their current state,
                        identify gaps in execution capabilities, determine
                        technology essentials, and define a tailored roadmap for
                        managing the client’s required digital innovation.
                      </p>
                      <p>
                        Working hand-in-hand with clients, we develop powerful
                        solutions, designed to build internal confidence and
                        speed up time to value, while reducing the complexity,
                        risk, and cost of your digital transformation.
                      </p>

                      <ol className="features-list">
                        <li>
                          <span>
                            <i className="bx bx-check"></i> Assess
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="bx bx-check"></i> Plan
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="bx bx-check"></i> Implement
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="bx bx-check"></i> Optimise
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="bx bx-check"></i> ROI
                          </span>
                        </li>
                      </ol>
                    </div>
                  </div>
                  <div className="overview-image">
                    <div className="image">
                      <img src={service2} alt="features" />
                    </div>
                  </div>
                </div>

                <div className="overview-box">
                  <div className="overview-image">
                    <div className="image">
                      <img src={service2} alt="features" />
                    </div>
                  </div>

                  <div className="overview-content">
                    <div className="content right-content">
                      <p>
                        With the digital landscape changing rapidly, new risks
                        and new opportunities emerge for companies.
                      </p>
                      <p>
                        We provide our clients with on-going, long term advice,
                        by keeping a close watch on emerging trends and
                        challenges, industry and technology developments. This
                        helps our clients anticipate and proactively align their
                        IT strategy, architecture and systems.
                      </p>

                      <ol className="features-list">
                        <li>
                          <span>
                            <i className="bx bx-check"></i> Industry Trends
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="bx bx-check"></i> IT Ecosystems
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="bx bx-check"></i> Vendor Capabilities
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="bx bx-check"></i> Best Practices
                          </span>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col-lg-4 col-md-12">
              <ServiceSidebar />
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default ConsultingAndAdvisory
