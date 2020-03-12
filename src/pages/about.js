import React from "react"
import Layout from "../components/layout"
import PageHeader from "../components/pageheader"

export default () => (
    <Layout>
        <PageHeader title="About Page" />
        <section class="page-inside">
            <div className="row">
                <div className="container text-center">
                    
                    <h2>Welcome to HackBuddy's Website</h2>
                    <p>This is the about page</p>
                    <p>This is the about page</p>
                    <p>This is the about page</p>
                </div>
            </div>
        </section>
    </Layout>
)