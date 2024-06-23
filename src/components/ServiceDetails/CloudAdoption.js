import React from "react"
import service2 from "../../images/services/service2.png"

const CloudAdoption = () => {
  return (
    <>
      <section className="services-details-area ptb-70">
        <div className="container">
          <div className="row justify-content">
            <div className="col-md-12">
              <div className="services-details-desc justify-content">
                {/* <span className="sub-title">Consulting & Advisory</span> */}
                <div>
                  <h2 className="main-banner-image">About this Service</h2>
                  <p>
                    Cloud adoption is the biggest business enabler for Digital
                    Transformation. Discussion of deploying technology in an
                    agile enterprise would not be complete without mentioning
                    cloud infrastructure —{" "}
                    <b className="bold-text-color">public</b>,{" "}
                    <b className="bold-text-color">private</b>, or{" "}
                    <b className="bold-text-color">hybrid</b>.
                  </p>
                  <p>
                    Cloud infrastructure allows companies to obtain computing
                    and storage capacity on demand, skip bureaucratic procedures
                    and spend seconds provisioning an environment instead of
                    waiting for weeks.
                  </p>
                  <p>
                    Our work is always driven by client needs, for which reason
                    we are vendor neutral. This means we can deliver value for
                    clients by leveraging best-in-class vendor products and
                    services to always make a positive impact.
                  </p>
                </div>
                <blockquote>
                  <p>
                    The cost of legacy systems is astonishing; enterprises spend
                    millions just to keep their systems working. Only a move to
                    the cloud and new technology can solve these problems.
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
                        <h3>Cloud Strategy</h3>
                        <p>
                          We design a strategy to navigate the landscape of
                          cloud solutions, platforms and tooling, assessing how
                          and where to adopt them to drive value. Depending on
                          the needs we help with the right cloud services -
                          <b className="bold-text-color">
                            IaaS, FaaS, CaaS, PaaS, SaaS,{" "}
                          </b>
                          and Cloud approach -{" "}
                          <b className="bold-text-color">
                            Single, Multi, Hybrid
                          </b>
                          .
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
                        <h3>Cloud Readiness Assesment</h3>
                        <p>
                          We determine the current readiness across the
                          organisation's IT landscape, provide guidance on the
                          right migration path, and define subsequent steps to
                          cloud adoption -{" "}
                          <b className="bold-text-color">Re-host to Re-build</b>
                          .
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
                        <h3>Cloud Build & Migration</h3>
                        <p>
                          Accelerating and de-risking Landing Zone deployments
                          lay a solid foundation for a successful cloud program.
                          Large-scale mass migration including lift and shift
                          and re-architecture approaches using a value-driven
                          approach. We{" "}
                          <b className="bold-text-color">
                            Re-host, Re-build, Re-write
                          </b>{" "}
                          to cloud with minimal business disruption
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="main-banner-image">
                  Cloud... Private | Public | Hybrid
                </h2>

                <div className="overview-box">
                  <div className="overview-content">
                    <div className="content right-content">
                      <p>
                        With our experience of implementing cloud Native
                        solutions, we help in modernising current or creating
                        new cloud-native applications.
                      </p>
                      <p>
                        We empower clients in cloud-first thinking and help in
                        the design and build of solutions using cloud-agnostic
                        tools.
                      </p>

                      <ol className="features-list">
                        <li>
                          <span>
                            <i className="bx bx-check"></i> Cloud-First
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="bx bx-check"></i> Cloud-Native
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="bx bx-check"></i> Cloud-Agnostic
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="bx bx-check"></i> Application
                            Modernisation
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
                        Our multi Cloud capabilities and expertise guide your
                        cloud adoption journey, from planning to migration and
                        build, with minimal business disruption, and help
                        leverage the best cloud services specific to
                        requirements.
                      </p>

                      <ol className="features-list">
                        <li>
                          <span>
                            <i className="bx bx-check"></i> Landing Zone
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="bx bx-check"></i> IAAS
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="bx bx-check"></i> PAAS
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="bx bx-check"></i> SAAS
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="bx bx-check"></i> K8S
                          </span>
                        </li>{" "}
                        <li>
                          <span>
                            <i className="bx bx-check"></i> DevOps
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="bx bx-check"></i> SAAS
                          </span>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CloudAdoption
