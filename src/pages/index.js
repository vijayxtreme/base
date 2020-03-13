import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Midsection from "../components/midsection";
import Typewriter from 'typewriter-effect/dist/core';

class IndexPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      strings : ['Level Up Your Skills'],
      darkModeOn: false,
      time: new Date()
    }
    this.darkMode = this.darkMode.bind(this);
  }
  componentDidMount(){
    new Typewriter('#typewriter', {
      strings: this.state.strings,
      autoStart: true,
      loop: true
    });
    
    // if(this.state.time.getHours() > 17){
    //   this.darkMode()
    // }

  }
  darkMode(){
    this.setState({'darkModeOn': !this.state.darkModeOn});
  }
  render(){
    return (
      <div className={`hb ${this.state.darkModeOn ? 'dark':''}`}>
        <Layout>
          <SEO title="Home" />
          <div className="main_jumbo">
            <h1 id="typewriter"></h1>
          </div>

          <Midsection />
          <div className="container">
          </div> 
        </Layout>
      </div>
    )
  }
}

export default IndexPage
