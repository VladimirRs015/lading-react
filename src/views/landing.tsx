import React from 'react'
import InfoItem from "../components/info-item/infoItem"
//@ts-ignore
import shape from "../assets/illustrations/shape.svg"
import marketingIMG from "../assets/illustrations/marketing.svg";
import businessIMG from "../assets/illustrations/business.svg";
import invesmentIMG from "../assets/illustrations/investment.svg"
import Section from "../components/Section/section"

export default function landing() {
  return (
    <>
      <section className="hero is-light is-medium sticky-top" >
        {/* */}
        <div className="shape" style={{backgroundImage:`url(${shape})`, backgroundRepeat:"no-repeat",backgroundSize:"1000px" , backgroundPosition: '0px -500px'}} >
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-6 bg-shape" >
                  <h1 className="title">
                    Fullheight title
            </h1>
                  <h2 className="subtitle">
                    Fullheight subtitle
            </h2>
                </div>
                <div className="columns column is-6 is-justify-content-flex-end is-align-content-flex-start">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main className="column is-12">
        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column is-12">
                <h2 className="title is-3 has-text-centered">Services</h2>
                <InfoItem image={marketingIMG} title="Marketing" textFirst={true}>
                  pLorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur asperiores placeat, neque voluptatem quisquam aliquid maxime fuga ullam accusamus assumenda in inventore provident itaque tempora ipsum nemo? Perspiciatis, exercitationem nam?
                </InfoItem>

                <InfoItem image={businessIMG} title="Business Inteligence" textFirst={false}>
                  pLorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur asperiores placeat, neque voluptatem quisquam aliquid maxime fuga ullam accusamus assumenda in inventore provident itaque tempora ipsum nemo? Perspiciatis, exercitationem nam?
            </InfoItem>
                <InfoItem image={invesmentIMG} title="Invertion Strategies" textFirst={true}>
                  pLorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur asperiores placeat, neque voluptatem quisquam aliquid maxime fuga ullam accusamus assumenda in inventore provident itaque tempora ipsum nemo? Perspiciatis, exercitationem nam?
            </InfoItem>
                <div className="section columns is-justify-content-center">
                  <div className="column is-4">
                    <a href="##" style={{ border: "4px solid" }} className="button is-link is-outlined is-fullwidth p-4">
                      Hire us
                     </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="container">

          <Section title="Who are we">
            <p className=""> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, dolore inventore ex ut </p>
            <div className="image-banner-container">
              <div className="curtain is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                <h2 className="title is-3 has-text-white">
                  Grow up your company with us
                </h2>
              </div>
              <div className="image-banner" ></div>
            </div>
          </Section>
        </div>

        <Section title="Our Clients">

        </Section>

        <Section title="Portfolio" >

        </Section>
      </main>
    </>
  )
}
