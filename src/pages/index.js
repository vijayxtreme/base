import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Ad from "../components/ad"
import News from "../components/news"
import Jumbo from "../components/jumbo"
import Section from "../components/section";


const IndexPage = () => {
  return (
    <div className="home">
      <Layout>
        <SEO title="Home" />
        <Jumbo title="A Community For All Things Software Engineering" cta="Join The Mailing List" />
        <Section title="Monthly Meetups" cta="Check Out This Meetup" />
        <Section title="Become A Better Coder" cta="Join Team Hack" />
        <Section title="Blogs & Tutorials"/>
      </Layout>
    </div>
  )
}

export default IndexPage
