import React, { Fragment } from 'react';
import { Link } from 'gatsby';

export default function page2() {
    return (
        <Fragment>
           <h1>Welcome to Page 2</h1>
           <span><Link to="/">HOME PAGE</Link></span>
        </Fragment>
    )
}
