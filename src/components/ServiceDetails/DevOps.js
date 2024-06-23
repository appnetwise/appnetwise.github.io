import React from "react"

import icon1 from "../../images/funfacts/fun-icon1.png"

import image from "../../images/devops-flow.png"

const DevOps = () => {
  return (
    <>
      <section className="services-details-area ptb-70">
        <div className="container">
          <div className="row justify-content">
            <div className="col-md-12">
              <div className="services-details-desc justify-content">
                {/* <span className="sub-title">Consulting & Advisory</span> */}
                <div>
                  <div>
                    <h2 className="main-banner-image">About this Service</h2>
                    <p>
                      At<b className="bold-text-color"> Appnetwise</b>, we
                      understand DevOps vital role in modern software
                      development and deployment. Our DevOps solutions empower
                      businesses to streamline processes, accelerate delivery,
                      and enhance collaboration between teams. By embracing
                      DevOps principles, organizations achieve greater agility,
                      efficiency, and innovation in their software delivery
                      lifecycle.
                    </p>
                    <p>
                      With our expertise and customer-centric approach, we
                      deliver tailored DevOps solutions. Trust Appnetwise to
                      optimize processes, accelerate delivery, and foster
                      collaboration, ensuring your success in today's digital
                      landscape.
                    </p>
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
                  <h2 className="main-banner-image">Our DevOps Approach</h2>

                  <div className="row align-items-center">
                    <div className="col-lg-8 col-md-12">
                      <p>
                        In the realm of DevOps, Continuous Integration (CI) and
                        Continuous Testing serve as foundational pillars,
                        ensuring code stability and fostering collaboration. CI
                        facilitates rapid feedback on code modifications, while
                        Continuous Testing rigorously evaluates software updates
                        for functionality and performance. These practices
                        enable development teams to iterate swiftly and maintain
                        high standards of quality.
                      </p>
                      <p>
                        Continuing the DevOps journey, practices like Continuous
                        Delivery (CD), Continuous Deployment, and Continuous
                        Monitoring play crucial roles in optimizing the release
                        process and enhancing software performance. CD
                        streamlines adjustments to software, while Continuous
                        Deployment automates production deployment, minimizing
                        manual intervention. Simultaneously, Continuous
                        Monitoring provides valuable insights into application
                        performance, facilitating proactive issue resolution and
                        optimization efforts.
                      </p>
                      <p>
                        Through the seamless integration of these DevOps
                        practices, organizations can drive continuous
                        improvement, empowering teams to deliver innovative
                        features quickly and reliably. By embracing these
                        principles, businesses can maintain a competitive edge
                        in today's fast-paced technological landscape.
                      </p>
                    </div>

                    <div className="col-lg-3 col-md-12">
                      <div className="our-mission-image">
                        <img src={image} alt="service" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ptb-70">
                  <h2 className="main-banner-image">
                    Why Choose Appnetwise for DevOps Consulting?
                  </h2>
                  <div className="row pt-40">
                    <div
                      className="col-lg-4 col-sm-6"
                      style={{ display: "flex" }}
                    >
                      <div className="single-solutions-box single-solutions-box-hover">
                        <div className="icon">
                          <i className="flaticon-rocket"></i>
                        </div>
                        <h3>Expertise and Experience</h3>
                        <p>
                          Our DevOps engineers are industry veterans, boasting
                          extensive experience in implementing and managing
                          DevOps practices. With a rich background in the field
                          and numerous certifications, they bring a deep
                          understanding of{" "}
                          <b className="bold-text-color">best practices</b> and
                          emerging trends to every project.
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
                        <h3>Proactive Problem-Solving</h3>
                        <p>
                          Our DevOps strategy prioritizes proactive approaches
                          to identify and resolve issues before they impact
                          operations. With{" "}
                          <b className="bold-text-color">robust monitoring </b>
                          and{" "}
                          <b className="bold-text-color">automated alerts</b>,
                          we ensure smoother operations and foster a culture of
                          continuous improvement, enhancing efficiency and
                          reliability.
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
                        <h3>Cost-Effective Solutions</h3>
                        <p>
                          By automating manual processes, optimizing resource
                          utilization, and reducing downtime, our DevOps
                          solutions help you minimize operational costs and
                          maximize ROI. We focus on efficiency at every step of
                          the development and deployment lifecycle, saving you
                          both time and money in the long run.
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
                        <h3>Proven Track Record</h3>
                        <p>
                          Our track record in DevOps speaks volumes. Serving
                          startups to enterprises, we consistently meet business
                          goals. Whether speeding time-to-market, enhancing
                          collaboration, or boosting efficiency, our success
                          showcases dedication to client success.
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
                        <h3>Continuous Support</h3>
                        <p>
                          Post-implementation, we provide ongoing maintenance to
                          uphold the efficiency of your DevOps setup. Our
                          dedicated team handles troubleshooting, optimizes
                          workflows, and scales infrastructure as needed,
                          guaranteeing seamless operations.
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
                        <h3>Enhanced Collaboration</h3>
                        <p>
                          DevOps thrives on collaboration. Our solutions
                          prioritize seamless communication among teams,
                          breaking down silos to foster efficiency. By nurturing
                          a collaborative culture, we accelerate innovation for
                          superior
                          <b className="bold-text-color">software delivery.</b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="main-banner-image">Our Services</h2>
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
                              <b className="bold-text-color">
                                Continuous Integration and Deployment (CI/CD):
                              </b>
                              Automates the software development process,
                              integrating code changes, testing them, and
                              deploying them to production efficiently.
                            </p>

                            <ol className="features-list">
                              <li>
                                <span>
                                  <i className="bx bx-check"></i> JENKINS
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="bx bx-check"></i> GITLAB
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="bx bx-check"></i> AWS
                                  CODEPIPELINE
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="bx bx-check"></i> AZURE PIPELINE
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
                              <b className="bold-text-color">
                                Security Automation:
                              </b>
                              Automates security tasks like vulnerability
                              scanning, threat detection, and incident response,
                              freeing up security personnel to focus on
                              strategic initiatives.
                            </p>

                            <ol className="features-list">
                              <li>
                                <span>
                                  <i className="bx bx-check"></i> SECURITY
                                  ORCHESTRATION
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="bx bx-check"></i> NESSUS
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="bx bx-check"></i> OPENVAS
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="bx bx-check"></i> CHEF
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
                              <b className="bold-text-color">
                                Cloud Migration and Management:
                              </b>
                              The process of moving IT resources and
                              applications from on-premises infrastructure to
                              the cloud, along with ongoing management of those
                              resources.
                            </p>

                            <ol className="features-list">
                              <li>
                                <span>
                                  <i className="bx bx-check"></i>AWS MIGRATION
                                  HUB
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="bx bx-check"></i>AZURE MIGRATE
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="bx bx-check"></i>GCP MIGRATE
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="bx bx-check"></i>AWS MANAGEMENT
                                  CONSOLE
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="bx bx-check"></i>GCP CONSOLE
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="bx bx-check"></i>AZURE PORTAL
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
                              <b className="bold-text-color">
                                Container Registries :
                              </b>
                              Serve as centralized repositories for storing,
                              managing, and distributing container images. They
                              play a crucial role in facilitating collaboration
                              and deployment of containerized applications by
                              providing a secure and scalable platform for
                              sharing images across teams and environments.
                            </p>
                            <ol className="features-list">
                              <li>
                                <span>
                                  <i className="bx bx-check"></i> DOCKER HUB
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="bx bx-check"></i> AMAZON ECR
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="bx bx-check"></i>AZURE CONTAINER
                                  REGISTRY
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
                              <b className="bold-text-color">
                                Monitoring and Logging:
                              </b>
                              Continuously monitors IT infrastructure and
                              applications for performance, errors, and security
                              issues. Logging collects and stores data generated
                              by systems for analysis and troubleshooting.
                            </p>

                            <ol className="features-list">
                              <li>
                                <span>
                                  <i className="bx bx-check"></i> PROMETHEUS
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="bx bx-check"></i> DATADOG
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="bx bx-check"></i> NEW RELIC
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="bx bx-check"></i>ELK STACK
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="bx bx-check"></i>AWS CLOUDWATCH
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="bx bx-check"></i>AZURE MONITOR
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="bx bx-check"></i>GCP CLOUD
                                  MONITORING
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
                              <b className="bold-text-color">
                                Infrastructure as Code (IaC):
                              </b>
                              Defines and manages infrastructure resources
                              (servers, networks, storage) through code. Enables
                              automated provisioning and configuration of
                              infrastructure environments.
                            </p>

                            <ol className="features-list">
                              <li>
                                <span>
                                  <i className="bx bx-check"></i> TERRAFORM
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="bx bx-check"></i> ANSIBLE
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="bx bx-check"></i> AWS
                                  CLOUDFORMATION
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="bx bx-check"></i> AZURE RESOURCE
                                  MANAGER
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="bx bx-check"></i> GCP CLOUD
                                  DEPLOYMENT MANAGER
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
                              <b className="bold-text-color">
                                Containerization and Orchestration:
                              </b>
                              Packages applications with their dependencies into
                              standardized units called containers.
                              Orchestration tools manage the deployment,
                              scaling, and networking of these containers.
                            </p>

                            <ol className="features-list">
                              <li>
                                <span>
                                  <i className="bx bx-check"></i> DOCKER
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="bx bx-check"></i>KUBERNETES
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="bx bx-check"></i> DOCKER SWARM
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="bx bx-check"></i> APACHE MESOS
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="bx bx-check"></i> AMAZON ECE
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

export default DevOps
