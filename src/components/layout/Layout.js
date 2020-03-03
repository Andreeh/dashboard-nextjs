import Head from 'next/head';
import { Box } from '@chakra-ui/core';
import { Sidebar } from './Sidebar';
import { Content } from './Content';
import { Navbar } from './Navbar';

export function Layout({ children, pageTitle = '' }) {
    return (
        <Box h="full">
            <Head>
                <title>{pageTitle}</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sidebar />
            <Navbar />
            <Content>{children}</Content>
        </Box>
    );
}
