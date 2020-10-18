import React from "react"
import { Link } from "gatsby"

function Footer(props){
    
    return (
        <footer className="mt-5 pt-5">
        <div className="container-fluid">
            <h3 className="logo">hackbuddy</h3>
            <p className="">Copyright
            © {new Date().getFullYear()}, <Link to="/">HackBuddy</Link> & &nbsp;
            <a href="https://www.javascriptla.net" target="_blank" rel="noopener noreferrer" >JavaScriptLA</a>, LLC | Privacy Policy | Terms of Service | Legal </p> 
        </div>
      </footer>
    )
}

export default Footer;