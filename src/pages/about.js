import React from 'react';
import { Link } from "gatsby";
import Layout from '../components/layout'


export default function about() {
    return (
        <div>
             <Layout pageTitle="About Me">
                <p>
                    Hi there! I'm the proud creator of this site, which I built with Gatsby.
                </p>
            </Layout>
        </div>
    )
}
