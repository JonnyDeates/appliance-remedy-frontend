import React from 'react';
import { Helmet } from 'react-helmet';

const CanonicalTag = ({ pathname }) => {
    const { protocol, host } = window.location;
    const canonicalUrl = `${protocol}//${host}${pathname}`;

    return (
        <Helmet>
            <link rel="canonical" href={canonicalUrl} />
        </Helmet>
    );
};

export default CanonicalTag;