import React from "react"
import image1 from "../../images/qa1.png"
import icon1 from "../../images/funfacts/fun-icon1.png"
import FunIcon2 from "../../images/funfacts/fun-icon2.png"
import image from "../../images/qa-flow.png"

const QualityAssurance = () => {
  return (
    <>
      <section className="services-details-area ptb-70">
        <div className="container">
          <div className="row justify-content">
            <div className="col-md-12">
              <div className="services-details-desc justify-content">
                {/* <span className="sub-title">Consulting & Advisory</span> */}
                <div>
                  <div className="row align-items-center">
                    <div className="col-lg-8 col-md-12">
                      <p>
                        At <b className="bold-text-color">Appnetwise</b>,
                        excellence is our standard. Our dedicated Quality
                        Assurance team meticulously ensures top-notch software
                        quality through rigorous test planning, precise
                        execution, and an unwavering commitment to uncovering
                        defects. From functional and regression testing to
                        performance and security assessments, we leave no stone
                        unturned. Trust us to deliver software that meets the
                        highest standards of quality and reliability.
                      </p>
                      <p>
                        Our team leverages the latest tools and technologies to
                        provide comprehensive testing solutions that guarantee
                        your software is robust and ready for market. By
                        combining automated and manual testing methods, we
                        ensure thorough coverage and quick identification of
                        issues. With Appnetwise, you can be confident that your
                        software will perform flawlessly under all conditions.
                      </p>
                    </div>

                    <div className="col-lg-3 col-md-12">
                      <div className="our-mission-image">
                        <img src={image1} alt="service" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className=" services-area bg-f1f8fb"
                  style={{
                    padding: "40px",
                    marginTop: "40px",
                    borderRadius: "24px",
                  }}
                >
                  <h2 className="main-banner-image">
                    Quality Assurance Implementation Roadmap
                  </h2>

                  <p>
                    The Quality Assurance (QA) Implementation involves analyzing
                    requirements, creating a test plan, designing test cases,
                    setting up the test environment, executing tests, and
                    documenting and resolving defects. Regression testing
                    ensures existing functionalities remain intact after defect
                    resolution. A release readiness assessment precedes
                    deployment, followed by ongoing monitoring and user
                    feedback. Continuous improvement analyzes the QA process for
                    enhancements, contributing to the goal of delivering
                    high-quality software.
                  </p>

                  <img src={image} alt="api" />
                </div>
                <div className="ptb-70">
                  <h2 className="main-banner-image">Our Testing Services</h2>
                  <div className="row pt-40">
                    <div
                      className="col-lg-4 col-sm-6"
                      style={{ display: "flex" }}
                    >
                      <div className="single-solutions-box single-solutions-box-hover">
                        <div className="icon">
                          <i className="flaticon-rocket"></i>
                        </div>
                        <h3>Automated Testing</h3>
                        <p>
                          Involves the use of tools and scripts to execute test
                          cases and compare actual outcomes with expected
                          outcomes. It is efficient for repetitive and
                          regression testing.​​ Benefits include{" "}
                          <b className="bold-text-color">
                            {" "}
                            faster test execution, early bug detection
                          </b>
                          , and the ability to run tests in various
                          environments.
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
                        <h3>Manual Testing</h3>
                        <p>
                          A process where testers manually execute test cases
                          without using any automation tools, manual testing
                          involves simulating end-user scenarios to{" "}
                          <b className="bold-text-color">identify bugs</b> and
                          ensure the software meets{" "}
                          <b className="bold-text-color">user expectations</b>.
                          It is valuable for exploratory testing, usability
                          testing, and scenarios that are challenging to
                          automate.
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
                        <h3>Web Testing</h3>
                        <p>
                          Checks web applications for functionality, usability,
                          performance, and security across various browsers and
                          devices. It ensures that the application works as
                          intended, with types of testing including{" "}
                          <b className="bold-text-color">
                            functional, compatibility, performance, and security
                            testing
                          </b>
                          specific to web applications.
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
                        <h3>API Testing</h3>
                        <p>
                          Assesses the functionality, reliability, performance,
                          and security of application programming interfaces
                          (APIs). It ensures that APIs communicate effectively
                          and perform as expected, often using tools like{" "}
                          <b className="bold-text-color">
                            {" "}
                            Postman, SoapUI, and Insomnia
                          </b>
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
                        <h3>Security Testing</h3>
                        <p>
                          Evaluates a system to identify vulnerabilities and
                          ensure it is resistant to unauthorized access,
                          attacks, and data breaches. It includes penetration
                          testing, vulnerability assessment, and analyzing the
                          system's ability to handle security threats.
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
                        <h3>Test Data Generation</h3>
                        <p>
                          Involves creating data sets used for testing
                          applications. It ensures that the software functions
                          correctly under various conditions and scenarios.
                          Proper test data helps identify bugs related to{" "}
                          <b className="bold-text-color">
                            data handling, security, and performance.
                          </b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="main-banner-image">
                  Effective Tools And Technologies Employed By The Team
                </h2>
                <div className="row justify-content pt-40">
                  <div className="col-sm-6  ">
                    <div className="single-funfacts-box">
                      <div className="icon">
                        <img src={icon1} alt="banner" />
                      </div>
                      <div className="overview-box">
                        <div
                          className="overview-content"
                          style={{ flex: "0 0 100%", maxWidth: "none" }}
                        >
                          <div className="content right-content">
                            <p>
                              API testing tools are essential for verifying the
                              functionality, performance, and security of
                              Application Programming Interfaces (APIs).
                            </p>

                            <ol className="features-list">
                              <li>
                                <span>
                                  <i className="bx bx-check"></i> JMETER
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="bx bx-check"></i> POSTMAN
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="bx bx-check"></i> REST ASSURED
                                </span>
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 ">
                    <div className="single-funfacts-box">
                      <div className="icon">
                        <img src={icon1} alt="banner" />
                      </div>
                      <div className="overview-box">
                        <div
                          className="overview-content"
                          style={{ flex: "0 0 100%", maxWidth: "none" }}
                        >
                          <div className="content right-content">
                            <p>
                              Performance testing tools are crucial for
                              assessing the responsiveness, scalability, and
                              reliability of software applications under varying
                              workloads.
                            </p>

                            <ol className="features-list">
                              <li>
                                <span>
                                  <i className="bx bx-check"></i> JMETER
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="bx bx-check"></i>LOAD RUNNER
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="bx bx-check"></i> SILK PERFORMER
                                </span>
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 ">
                    <div className="single-funfacts-box">
                      <div className="icon">
                        <img src={icon1} alt="banner" />
                      </div>
                      <div className="overview-box">
                        <div
                          className="overview-content"
                          style={{ flex: "0 0 100%", maxWidth: "none" }}
                        >
                          <div className="content right-content">
                            <p>
                              Automated UI testing tools ensure software
                              applications meet design specifications and are
                              free of functional defects. They deliver a
                              consistent user experience across various browsers
                              and platforms.
                            </p>

                            <ol className="features-list">
                              <li>
                                <span>
                                  <i className="bx bx-check"></i> SELENIUM
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="bx bx-check"></i>PROTRACTOR
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="bx bx-check"></i> CYPRESS
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="bx bx-check"></i> PLAYWRIGHT
                                </span>
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 ">
                    <div className="single-funfacts-box">
                      <div className="icon">
                        <img src={icon1} alt="banner" />
                      </div>
                      <div className="overview-box">
                        <div
                          className="overview-content"
                          style={{ flex: "0 0 100%", maxWidth: "none" }}
                        >
                          <div className="content right-content">
                            <p>
                              Security testing tools are crucial for identifying
                              and addressing vulnerabilities in software
                              applications, ensuring robust protection against
                              security threats.
                            </p>

                            <ol className="features-list">
                              <li>
                                <span>
                                  <i className="bx bx-check"></i> HCL APPSCAN
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="bx bx-check"></i> BURP SUITE
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="bx bx-check"></i>ZED ATTACK
                                  PROXY (ZAP)
                                </span>
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 ">
                    <div className="single-funfacts-box">
                      <div className="icon">
                        <img src={icon1} alt="banner" />
                      </div>
                      <div className="overview-box">
                        <div
                          className="overview-content"
                          style={{ flex: "0 0 100%", maxWidth: "none" }}
                        >
                          <div className="content right-content">
                            <p>
                              Automated mobile testing tools are essential for
                              ensuring the functionality, usability, and
                              performance of mobile applications across
                              different devices and platforms.
                            </p>

                            <ol className="features-list">
                              <li>
                                <span>
                                  <i className="bx bx-check"></i>APPIUM
                                </span>
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 ">
                    <div className="single-funfacts-box">
                      <div className="icon">
                        <img src={icon1} alt="banner" />
                      </div>
                      <div className="overview-box">
                        <div
                          className="overview-content"
                          style={{ flex: "0 0 100%", maxWidth: "none" }}
                        >
                          <div className="content right-content">
                            <p>
                              Continuous Integration (CI) and Continuous
                              Delivery (CD) tools play a vital role in
                              automating the software development and release
                              processes.
                            </p>

                            <ol className="features-list">
                              <li>
                                <span>
                                  <i className="bx bx-check"></i> CI / CD
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="bx bx-check"></i> JENKINS
                                </span>
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 ">
                    <div className="single-funfacts-box">
                      <div className="icon">
                        <img src={icon1} alt="banner" />
                      </div>
                      <div className="overview-box">
                        <div
                          className="overview-content"
                          style={{ flex: "0 0 100%", maxWidth: "none" }}
                        >
                          <div className="content right-content">
                            <p>
                              Test management and defect tracking tools are
                              essential for organizing test activities, managing
                              test cases, and tracking and resolving defects
                              throughout the software development lifecycle.
                            </p>

                            <ol className="features-list">
                              <li>
                                <span>
                                  <i className="bx bx-check"></i> JIRA
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="bx bx-check"></i> AZURE DEVOPS
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="bx bx-check"></i> XRAY
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
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default QualityAssurance
