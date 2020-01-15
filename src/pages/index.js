import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Typewriter from 'typewriter-effect/dist/core';
import "../components/index.css"



class IndexPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      strings : ['Level Up Your Skills'],
      darkModeOn: false
    }
    this.darkMode = this.darkMode.bind(this);
  }
  componentDidMount(){
    new Typewriter('#typewriter', {
      strings: this.state.strings,
      autoStart: true,
      loop: true
    });
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
          <div className="container">
            Stuff here later
            <button onClick={this.darkMode}>Dark Mode</button>
          </div> 
        </Layout>
      </div>
    )
  }
}

export default IndexPage
