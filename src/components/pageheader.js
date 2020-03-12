import React from "react"

export default (props) => {
    const title = props.title
    
    return (
        <section className="page-header">
            <div className="row">
                <div className="container">
                    <h1 className="text-center">{title}</h1>
                </div>
            </div>
        </section>
    )
}