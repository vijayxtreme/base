import React from 'react'

const Section = ({title, cta=""}) => {
    return (
        <section>
        <div className="container mt-5 mb-5 pt-5 pb-5">
          <div class="row">
            <div className="col-xs-12 col-lg-6">
            <h2 className="pb-3">{title}</h2>
            <p>
              I'm baby kinfolk roof party vice vape artisan. Artisan lomo
              shoreditch man bun, subway tile organic swag brooklyn. Vice
              keytar adaptogen tumeric. Fashion axe hammock adaptogen
              gastropub fingerstache jianbing single-origin coffee godard
              quinoa photo booth echo park fam.
            </p>
            <p>
              Marfa before they sold out disrupt cold-pressed vape. Edison
              bulb typewriter chicharrones cardigan readymade yuccie taiyaki
              +1 pok pok echo park wolf godard keffiyeh selvage jean shorts.
              Twee mlkshk plaid migas venmo wolf. Chia cred farm-to-table,
              artisan sriracha photo booth +1 la croix art party tumblr food
              truck activated charcoal.
            </p>
            <p className="pt-3">
             {cta ? <button className="btn btn-outline-primary btn-lg">{cta}</button> : ``} 
            </p>
            </div>
            <div className="col-xs-12 col-lg-6 pt-3">
                <div className="placeholder" style={{height:`240px`}}></div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Section