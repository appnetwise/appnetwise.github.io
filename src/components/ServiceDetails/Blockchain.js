import React from "react"
import service2 from "../../images/services/service2.png"
import service from "../../images/services/blockchain.png"
import image from "../../images/blockchain-flow.png"
import ServiceSidebar from "./ServiceSidebar"
import SliderComponent from "./SliderComponent"

const Blockchain = () => {
  const slidesData = [
    {
      content:
        "Specializing in diverse industries, we utilize Ethereum, Polygon POS Chain, and Hyperledger Besu to develop innovative solutions tailored to our clients' needs. Leveraging the strengths of these platforms, we deliver efficient and scalable blockchain solutions.",
      features: ["ETHEREUM", "POLYGON POS CHAIN", "HYPERLEDGER BESU"],
      image: service2,
    },

    {
      content:
        "We use Fireblocks for secure asset storage and transfer, along with Hardhat and Truffle Suite for efficient smart contract development, testing, and deployment, ensuring robust and reliable solutions.",
      features: ["FIREBLOCKS", " HARDHAT ", "TRUFFLE"],
      image: service2,
    },
    {
      content:
        "We employ Web3.js, Metamask, Ether.js, and Solidity with ERC standards to streamline Ethereum integration and smart contract development, ensuring efficient and robust solutions.",
      features: [
        "WEB3.JS",
        " METAMASK ",
        "ERC STANDARD",
        "ETHER.JS",
        "SOLIDITY",
      ],
      image: service2,
    },
  ]
  return (
    <>
      <section className="services-details-area ptb-70">
        <div className="container">
          <div className="row justify-content">
            <div className="col-lg-12 col-md-12">
              <div className="row justify-content">
                <div className="col-lg-8 col-md-12">
                  <div className="services-details-image">
                    <img src={service} alt="about" />
                  </div>
                  <div className="services-details-desc justify-content">
                    <div>
                      <h2 className="main-banner-image">About this Service</h2>

                      <p>
                        At <b className="bold-text-color">Appnetwise</b>, we're
                        dedicated to driving innovation and maximizing the
                        potential of blockchain technology. With a diverse skill
                        set and in-depth knowledge of various blockchain
                        platforms and tools, we deliver tailored solutions to
                        address our clients business needs. Our commitment to
                        excellence ensures that we stay at the forefront of
                        industry trends and advancements. From conceptualization
                        to execution, we work closely with our clients to unlock
                        the full capabilities of distributed ledger technology.
                        Our team of experts is passionate about pushing
                        boundaries and creating tangible value for our clients.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <ServiceSidebar />
                </div>
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
                <h2 className="main-banner-image">
                  Streamlined Blockchain Process
                </h2>

                <p>
                  Blockchain operates through a series of steps, starting with
                  transaction initiation and propagation. Transactions are then
                  validated and verified by network nodes to ensure compliance
                  with protocol rules. Upon validation, transactions are grouped
                  into blocks, each containing metadata and a list of
                  transactions. Nodes collaborate to achieve consensus on the
                  validity of blocks before they are added to the blockchain.
                </p>
                <p>
                  Mining, present in some networks like Bitcoin, involves miners
                  competing to validate transactions and add blocks to the
                  chain. After a certain number of confirmations, blocks achieve
                  finality, becoming irreversible parts of the ledger. This
                  continuous process ensures the integrity and security of the
                  distributed ledger, facilitating trustless transactions.
                </p>
                <img src={image} alt="blockchain" />
              </div>
              <div className="ptb-70">
                <h2 className="main-banner-image">
                  Blockchain Solutions We Specialize In
                </h2>
                <div className="row pt-40">
                  <div
                    className="col-lg-6 col-sm-6"
                    style={{ display: "flex" }}
                  >
                    <div className="single-solutions-box single-solutions-box-hover">
                      <div className="icon">
                        <i className="flaticon-rocket"></i>
                      </div>
                      <h3>Decentralized Applications (DApps)</h3>
                      <p>
                        Our expertise extends to developing decentralized
                        applications (DApps) that leverage the power of
                        blockchain technology. Whether it's creating DApps for
                        <b className="bold-text-color">
                          finance, supply chain, healthcare, or gaming,
                        </b>{" "}
                        we can help our client to build innovative solutions
                        that drive efficiency and transparency.
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-lg-6 col-sm-6"
                    style={{ display: "flex" }}
                  >
                    <div className="single-solutions-box single-solutions-box-hover">
                      <div className="icon">
                        <i className="flaticon-laptop"></i>
                      </div>
                      <h3>Smart Contracts</h3>
                      <p>
                        Smart contracts are self-executing contracts with the
                        terms of the agreement directly written into code. We
                        specialize in designing and deploying smart contracts on
                        various blockchain platforms, including{" "}
                        <b className="bold-text-color">
                          Ethereum and Hyperledger Besu
                        </b>
                        , to automate processes, facilitate trustless
                        transactions, and ensure compliance.
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-lg-6 col-sm-6 offset-lg-0 offset-sm-3"
                    style={{ display: "flex" }}
                  >
                    <div className="single-solutions-box single-solutions-box-hover">
                      <div className="icon">
                        <i className="flaticon-money"></i>
                      </div>
                      <h3>Carbon Market Solutions</h3>
                      <p>
                        Addressing environmental concerns, we offer
                        blockchain-based solutions for carbon markets. By
                        leveraging blockchain technology, we enable transparent
                        and traceable transactions within carbon markets,
                        facilitating the trading of carbon credits and promoting
                        sustainable practices
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-6 col-sm-6 offset-lg-0 offset-sm-3"
                    style={{ display: "flex" }}
                  >
                    <div className="single-solutions-box single-solutions-box-hover">
                      <div className="icon">
                        <i className="flaticon-money"></i>
                      </div>
                      <h3>Non-Fungible Tokens (NFTs)</h3>
                      <p>
                        NFTs have gained significant traction in the digital
                        art, gaming, and collectibles space. We can assist our
                        client in{" "}
                        <b className="bold-text-color">
                          creating, minting, and trading NFTs
                        </b>{" "}
                        on various blockchain platforms, opening up new avenues
                        for monetization and engagement in the digital economy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="main-banner-image">
                Blockchain Development Tools
              </h2>
              <SliderComponent slidesData={slidesData} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blockchain
