import React from "react"
import { Link } from "gatsby"

function Footer(props){
    
    return (
        <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
            <h3 className="logo">hackbuddy</h3>
            <p>Your place to learn and grow as a programmer!</p>
            © {new Date().getFullYear()}, <Link to="/">HackBuddy</Link> & &nbsp;
            <a href="https://www.javascriptla.net" target="_blank">JavaScriptLA</a>, LLC
            <p>Privacy Policy | Terms of Service | Legal </p> 
            </div>
            <div className="col-sm-2">
              <h6>ABOUT</h6>
              <ul className="footer_list">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/sponsors">Sponsors</Link></li>
                <li><Link to="/blog">Blog</Link></li>
              </ul>
            </div>
            <div className="col-sm-2">
              <h6>SPONSOR</h6>
              <ul className="footer_list">
                <li>Speak For Us</li>
                <li>Advertising Kit</li>
                <li>Sales</li>
                <li>Affiliates</li>
              </ul>
            </div>
            <div className="col-sm-2">
              <h6>EVENTS</h6>
              <ul className="footer_list">
                <li><a href="https://meetup.com/javascriptla" target="_blank">Meetup.com | JavaScriptLA LA Chapter</a></li>
                <li><a href="https://meetup.com/javascript-southbay" target="_blank">Meetup.com | JavaScriptLA OC Chapter</a></li>
                <li>Eventbrite</li>
                <li><Link to="/workshops">Workshops</Link></li>
              </ul>
            </div>
            <div className="col-sm-2">
              <h6>SOCIAL</h6>
              <ul className="footer_list">
                <li><a href="https://facebook.com/javascriptla" target="_blank">Facebook</a></li>
                <li><a href="https://twitter.com/javascriptla" target="_blank">Twitter</a></li>
                <li><a href="https://instagram.com/javascriptninja" target="_blank">Instagram</a></li>
                <li><a href="https://youtube.com/javascriptla" target="_blank">YouTube</a></li>
                <li><a href="https://discord.gg/h2568CQ" target="_blank">Discord</a></li>
                <li><a href="https://javascriptla.slack.com/" target="_blank">Slack</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;