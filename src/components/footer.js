import React from "react"
import { Link } from "gatsby"

function Footer(props){
    
    return (
        <footer>
        <div className="container tc">
            <h3 className="logo pb1 mb1">hackbuddy</h3>
            <p className="pt0 mt0 pb3">Copyright
            © {new Date().getFullYear()}, <Link to="/">HackBuddy</Link> & &nbsp;
            <a href="https://www.javascriptla.net" target="_blank" rel="noopener noreferrer" >JavaScriptLA</a>, LLC | Privacy Policy | Terms of Service | Legal </p> 
        </div>
      </footer>
    )
}

export default Footer;