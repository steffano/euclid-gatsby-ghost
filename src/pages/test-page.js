import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/common'
import Minter from '../components/common/Minter'

const TestPage = () => (
    <Layout>
        <div className="container">
            <article className="content" style={{ textAlign: `center` }}>
                <h1 className="content-title">Test Page</h1>
                <section className="content-body">
                    <p>experimental</p>
                    <Link to="/">return home</Link>
                </section>
                <section>
                    <Minter></Minter>
                </section>
            </article>
        </div>
    </Layout>
)

export default TestPage
