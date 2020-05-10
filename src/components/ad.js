import React from "react";

export default function Ad(props){
    const {content, title, buttonMessage, linkTo, media } = props
    return (
        <div className="ad pt3 pb5">
            <div className="container tc">
                <h2>Stuck At Home? Why Not Spend Time Mastering The New JavaScript Standard?</h2>
                <h3>Learn All The Following In Six Hours of Guided Video On ES6:</h3>
                <div className="benefits-three-col flex-ns flex-wrap-ns cf">
                    <div className="fl-ns w-third-ns">
                        <ul>
                            <li>New ways to declare variables</li>
                            <li>let, const, var differences</li>
                            <li>How to use template strings</li>
                            <li>Hoisting in JavaScript</li>
                            <li>Arrow functions & scope</li>
                        </ul>
                    </div>
                    <div className="fl-ns w-third-ns">
                        <ul>
                            <li>Spread vs Rest Operator</li>
                            <li>Objects and Class Syntax</li>
                            <li>Inheritance</li>
                            <li>Getters & Setters</li>
                            <li>Synchronous vs Asynchronous</li>
                        </ul>
                    </div>
                    <div className="fl-ns w-third-ns">
                        <ul>
                            <li>Callback Functions</li>
                            <li>Promises, All, Race</li>
                            <li>Fetch API, Async/Await</li>
                            <li>Iterators & Generators</li>
                            <li>JavaScript Modules & MORE</li>
                        </ul>
                    </div>
                </div>
                <div className="tc mt4">
                    <button className="cta" onClick={()=>{
                        let url = `https://hackbuddy.teachable.com/p/roadmap-to-es6`
                        window.open(url, "_blank")
                    }}>Get The Full Video Course For Just $39</button>
                </div>
            </div>
            
        </div>
    )
}