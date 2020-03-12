import React, { Component } from "react";
import es6Img from "../images/es6-promo-course.png";
import Tile from "./tile.js";
import Story from "./story.js";

export default class Midsection extends Component {
    constructor(props){
        super(props)
        this.state = {}


    }
    
    render(){
        const content = <div><p>Become a better programmer today! Learn the tricks
        you need to master ES6, the latest in JavaScript programming.</p><p>Are you a beginner? No problem, we can help you. Just study our course and you can be a pro too!</p><p>Get the course today now for FREE!</p></div>
        
        
        return (
            <section id="midsection">
                <div className="container">
                    <div className="row spacer-lg">
                        <Tile content="Upcoming Meetups" />
                        <Tile content="Videos" />
                        <Tile content="Tutorials" />
                    </div>
                    <div className="row">
                        <Tile content="Speakers" />
                        <Tile content="Sponsors" />
                        <Tile content="Contact" />
                    </div>
                </div>
                <Story 
                 media={<img src={es6Img} />}
                 title="Learn ES6" 
                 content={content} 
                 linkTo={`https://hackbuddy.teachable.com`} 
                 buttonMessage={`Yes, Give Me The Course`} />
            </section>

        )
    }
}