import React from "react"

function Footer(props){
    
    return (
        <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
            <h2>hackbuddy</h2>
            <p>Your place to learn and grow as a programmer!</p>
            © {new Date().getFullYear()}, HackBuddy & &nbsp;
            <a href="https://www.javascriptla.net">JavaScriptLA</a>, LLC
            <p>Privacy Policy | Terms of Service | Legal </p> 
            </div>
            <div className="col-sm-2">
              <h6>ABOUT</h6>
              <ul className="footer_list">
                <li>About Us</li>
                <li>Our Mission</li>
                <li>FAQs</li>
                <li>Code of Conduct</li>
                <li>JavaScriptLA</li>
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
                <li>Meetup.com</li>
                <li>Eventbrite</li>
                <li>Workshops</li>
                <li>Trainings</li>
              </ul>
            </div>
            <div className="col-sm-2">
              <h6>SOCIAL</h6>
              <ul className="footer_list">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>YouTube</li>
                <li>Discord</li>
                <li>Slack</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;