import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Ad from "../components/ad" 
import News from "../components/news"

import signature from "../images/sig.svg"

const IndexPage = () => {

    return (
      <div className="home">
        <Layout>
          <SEO title="Home" />
          <div className="homewrap">
            <Header />
            <div className="container mt4-ns">
              <section className="mainheading tc cf">
                <div className="pb4 pb0-ns fl-ns w-100-m w-60-ns">
                  <h1 className="ttu mb3 mt3 mt5-ns">A Community for all things<br />
                      <span className="underline">Full Stack</span> Development.
                  </h1>
                  <p className="pt0 mt0"><em>Brought to you by the team at JavaScriptLA.</em></p>
                </div>
                <div className="w-100-m fl-ns w-40-ns">
                  <form id="signupform" action="https://javascriptla.us12.list-manage.com/subscribe/post" method="POST" className="newsletter pa4 mb5">
                  <input type="hidden" name="u" value="001ccd80f4fb23c7a6938d857" />
                  <input type="hidden" name="id" value="f091853160" />
                    <p>
                      <input type="text" name="MERGE0" id="MERGE0" placeholder="Your Email"  />
                    </p>
                    <p>
                      <button className="ttu" onClick={e=>{
                        e.preventDefault();
                        let form = document.getElementById('signupform');
                        let consent = document.getElementById('consented');
                        let c = document.getElementById('consent');
                        if(consent.checked){
                          c.classList.remove('error');
                          form.submit();
                        }else {
                          c.classList.add('error');
                        }
                      }} >Join The Mailing List</button>
                    </p>
                    <p id="consent" className="consent" ><input id="consented" type="checkbox" onChange={() =>{
                      let c = document.getElementById('consent');
                      let consent = document.getElementById('consented');
                      if(consent.checked){
                        c.classList.remove('error');
                      }
                    }} />&nbsp;By signing up, I agree to receive emails from HackBuddy in accordance with the HackBuddy Terms & Conditions & Privacy Policy.  I can opt-out anytime.</p>                  
                  </form>
                </div>
              </section>
            </div>
          </div>
          <section className="mid pt4 pb4" style={{background: `white`}}>
            <div className="container">
              <h2 className="ttu tc">What Is HackBuddy?</h2>
              <p>There’s already JavaScriptLA, which does a great job of uniting the community around one of our favorite topics, aka JavaScript.</p>

              <p>However, we didn’t have anything for some of the other great languages out there.  Hence we got to thinking, why not another group dedicated to something more far-reaching?</p>
              
              <p>That’s what HackBuddy is.  We still want to be your buddy, just like we are for you in JavaScriptLA.  We want to be there for you to help you advance your career.  We want to help you level up, and provide you with awesome meetups, events, workshops and tutorials that can further boost your own programming level.</p>
              
              <p>As the leader of JavaScriptLA writing this intro, I want to personally invite you to this new exciting community.</p>
             
              <p>As much as I love working in JavaScript, I want to also explore other coding languages and development environments.  I also want to become an all around better engineer, someone who is a true full-stack engineer that can interface with all kinds of software, understand all kinds of data, algorithms and even beyond with AI. I hope that’s exciting to you too.</p>
              
              <p>I hope you will partake with me on this new journey! Stay tuned!</p>
              <p><img src={signature} alt="Vijay Menon" /></p>
              <p style={{fontWeight: 600}}>Lead Organizer, JavaScriptLA & HackBuddy</p>
            </div>
          </section> 
          <Ad />
          <News />
        </Layout>
      </div>
    )
}

export default IndexPage
