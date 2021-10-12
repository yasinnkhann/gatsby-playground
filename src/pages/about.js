import React, { Fragment } from 'react';
import Layout from '../components/layout'

export default function about() {
    return (
        <Fragment>
             <Layout pageTitle="About Me">
                <p>
                    Hi there! I'm the proud creator of this site, which I built with Gatsby.
                </p>
            </Layout>
        </Fragment>
    );
};
