import { Box } from '@chakra-ui/core';
import Layout from '../../components/layout';

export default function Updates() {
    return (
        <Layout pageTitle="Updates">
            <Box borderWidth="1px" rounded="lg" overflow="hidden" bg="white">
                <Box padding={6} margin={4}>
                    Hello Updates
                </Box>
            </Box>
        </Layout>
    );
}
