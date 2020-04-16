import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Midsection from "../components/midsection";
import Typewriter from 'typewriter-effect/dist/core';
import Slider from "react-slick";
import SocialPlug from "../components/SocialPlug";
import {SocialContent} from '../components/SocialContent';


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
  }
  darkMode(){
    this.setState({'darkModeOn': !this.state.darkModeOn});
  }
  render(){
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const socialPlugs = SocialContent.map((content) => {
      return (
        <SocialPlug
          key={content.id}
          {...content}
        />
      )
    });
    return (
      <div className={`hb ${this.state.darkModeOn ? 'dark':''}`}>
        <Layout>
          <SEO title="Home" />
              <Slider {...settings}>
                {socialPlugs}
              </Slider>        
          <Midsection />
          <div className="container">
          </div> 
        </Layout>
      </div>
    )
  }
}

export default IndexPage
