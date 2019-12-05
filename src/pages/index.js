import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import personCoding from "../images/person-coding.jpg"


const IndexPage = () => (
  <div>
    <Layout>
      <SEO title="Home" />
      <div className="main_jumbo" style={{
        background: `url(${personCoding})`,
        backgroundSize: `cover`,
        backgroundPosition: `0% 40%`,
        height: 480,
        width: `100%`
      }}><h1 style={{
        textAlign: `center`,
        paddingTop: `200px`,
        textShadow: `1px 1px 11px #0062cc`,
        fontFamily: `Tomorrow`,
        color: `white`
      }}>Level Up Your Skills.</h1></div>
      <div className="container">
        <section>
          <h2>Upcoming Meetups</h2>
          <p>Some Meetups go here</p>
        </section>
        <section>
          <h2>Sign Up For Newsletter</h2>
          <p>Newsletter drop in here</p>
        </section>
        <section>
          <h2>Latest Videos Here</h2>
        </section>
        <aside>
          <h3>Join Us On Discord & Slack</h3>
        </aside>
        <section>
          <h2>Our Sponsors</h2>
        </section>
      </div> {/* end container */}
      <div style={{
        backgroundColor: `#ccc`,
        height: 220,
        width: `100%`
      }}></div>

      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
  </div>
)

export default IndexPage
