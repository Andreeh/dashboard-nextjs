import { Box } from '@chakra-ui/core';
import Layout from '../components/layout';

export default function About() {
    return (
        <Layout pageTitle="About">
            <Box borderWidth="1px" rounded="lg" overflow="hidden" bg="white">
                <Box padding={6} margin={4}>
                    Hello About
                </Box>
            </Box>
        </Layout>
    );
}
