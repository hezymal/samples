import React from 'react';
import Layout from 'ui/components/Layout';

const SprintsLayout = ({ children }) => {
    return (
        <Layout noTop noLeft>
            <Layout.Middle>
                {children}
            </Layout.Middle>
            <Layout.Right>
            </Layout.Right>
        </Layout>
    );
};

export default SprintsLayout;
