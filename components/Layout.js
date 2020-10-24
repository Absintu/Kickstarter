import React from 'react'
import {Container} from 'semantic-ui-react'
import Header from './Header'
import Head from 'next/head'

export default props => {
    return (
        <Container>
            <Header>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.css"/>
            </Header>
            {props.children}
        </Container>
    );
};