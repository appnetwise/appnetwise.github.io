import React from "react"
import service2 from "../../images/services/service2.png"
import image from "../../images/api-flow.png"

const ApiEnablement = () => {
  return (
    <>
      <section className="services-details-area ptb-70">
        <div className="container">
          <div className="row justify-content">
            <div className="col-md-12">
              <div className="services-details-desc justify-content">
                <div>
                  <h2 className="main-banner-image">About this Service</h2>

                  <p>
                    At <b className="bold-text-color">Appnetwise</b>, we
                    understand the critical role that API enablement plays in
                    driving digital transformation and empowering businesses to
                    unlock the full potential of their systems and data. Our API
                    enablement solutions are designed to streamline
                    communication between disparate systems, facilitate seamless
                    data exchange, and foster innovation across client
                    organization.
                  </p>
                  <p>
                    With APIs, clients enhance agility and gain a competitive
                    edge. Whether integrating systems or enabling data access,
                    our experts ensure robust, reliable, and future-proof
                    solutions.
                  </p>
                </div>
                {/* <blockquote>
                  <p>
                    Being vendor neutral allows us to deliver unparalleled value
                    by utilizing best-in-class products and services tailored to
                    our clients' needs.
                  </p>
                </blockquote> */}
                <div
                  className=" services-area bg-f1f8fb"
                  style={{
                    padding: "40px",
                    marginTop: "40px",
                    borderRadius: "24px",
                  }}
                >
                  <h2 className="main-banner-image">API Strategy Overview</h2>

                  <p>
                    Our API strategy begins by thoroughly assessing business
                    needs and market opportunities, identifying where APIs can
                    add significant value. Through comprehensive evaluations, we
                    leverage industry-standard specifications such as OAS and
                    RAML, alongside technologies like GraphQL, to design
                    user-friendly APIs that cater to evolving demands. This
                    process involves engaging key stakeholders and fostering
                    collaborations with external partners to ensure alignment
                    and maximize innovation potential.
                  </p>
                  <p>
                    Once the assessment is complete, we establish a robust API
                    governance framework to guide development, management, and
                    consumption. Leveraging platforms like APIGEE or MULESOFT,
                    we enforce policies and standards, ensuring security,
                    compliance, and consistency across the API lifecycle. By
                    prioritizing measures such as authentication, authorization,
                    and encryption, we safeguard APIs against threats, while
                    continuous monitoring and optimization enable us to adapt
                    and evolve in alignment with our organization's strategic
                    objectives and market dynamics.
                  </p>
                  <img src={image} alt="api" />
                </div>
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
                        <h3>Strategy</h3>
                        <p>
                          Our approach to API strategy is forward-thinking,
                          considering the future needs of your organization
                          rather than solely focusing on initial API
                          implementations. We specialize in defining{" "}
                          <b className="bold-text-color">API strategies</b> that
                          align with long-term goals and growth.
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
                        <h3>Tooling</h3>
                        <p>
                          Utilizing APIM, we streamline end-to-end API lifecycle
                          management. Our expertise lies in mapping requirements
                          to APIM product features, evaluating and selecting the
                          most suitable tools, and fostering the development of
                          these capabilities within your organization.
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
                        <h3>Execution</h3>
                        <p>
                          We excel in executing API capabilities across your
                          organization, empowering teams to leverage APIs
                          effectively. Additionally, we aid in transforming APIs
                          into products, unlocking new revenue streams and
                          enhancing business opportunities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="main-banner-image">
                  API Enablement Integrated Services
                </h2>

                <div className="overview-box">
                  <div className="overview-content">
                    <div className="content right-content">
                      <p>
                        Drawing from extensive experience spanning various
                        industries and standards, including PSD2, open banking,
                        pensions dashboard, payment, and taxation, we
                        collaborate closely with clients throughout the entire
                        API enablement journey, from API strategy formulation to
                        API product development.
                      </p>

                      <ol className="features-list">
                        <li>
                          <span>
                            <i className="bx bx-check"></i> PSD2
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="bx bx-check"></i> Open Banking
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="bx bx-check"></i> Pensions
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="bx bx-check"></i> Application Payment
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="bx bx-check"></i> Taxation
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
                        Our expertise encompasses the development of APIs across
                        various domains, including Public, Private, Partner
                        Interconnects, Experience, Process, and System APIs.
                        Leveraging API-first principles and an array of
                        industry-standard technologies, we ensure that APIs are
                        designed and implemented to meet the diverse needs of
                        our clients.
                      </p>

                      <ol className="features-list">
                        <li>
                          <span>
                            <i className="bx bx-check"></i> API First
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="bx bx-check"></i> API LED
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="bx bx-check"></i> OAS
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="bx bx-check"></i> RAML
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="bx bx-check"></i> GRAPHQL
                          </span>
                        </li>{" "}
                        <li>
                          <span>
                            <i className="bx bx-check"></i> DevOps
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="bx bx-check"></i> Async API
                          </span>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="overview-box">
                  <div className="overview-content">
                    <div className="content right-content">
                      <p>
                        As a vendor-neutral partner, our approach is driven by
                        both client requirements and organizational
                        capabilities. We carefully assess and recommend the most
                        suitable technologies, to accelerate API enablement
                        initiatives and facilitate application modernization
                        efforts.
                      </p>

                      <ol className="features-list">
                        <li>
                          <span>
                            <i className="bx bx-check"></i> APIGEE
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="bx bx-check"></i> MULESOFT
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="bx bx-check"></i> KONG
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="bx bx-check"></i> AZURE APIM
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ApiEnablement
