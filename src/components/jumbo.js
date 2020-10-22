import React from 'react';
import Header from "../components/header"
const Jumbo = ({title,cta}) => {
    return (
        <div className="jumbo homewrap pb-5">
        <Header />
        <div className="container-fluid mb-5 pb-5 flex-center">
          <section className="mainheading">
            <div className="row">
              <div className="col-lg-9">
                <h1 className="mt-5 pt-5">
                  {title}
                </h1>
                <h5 className="pt-5">
                  <em>Brought to you by JavaScriptLA.</em>
                </h5>
              </div>
              <div class="col-lg-3"></div>
            </div>
            <div class="row">
              <div className="col-lg-12 mt-5">
                <button className="btn btn-warning btn-lg text-uppercase">
                  {cta}
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
}

export default Jumbo