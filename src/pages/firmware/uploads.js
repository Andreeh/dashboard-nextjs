import { Box } from '@chakra-ui/core';
import Layout from '../../components/layout';

export default function Uploads() {
    return (
        <Layout pageTitle="Uploads">
            <Box borderWidth="1px" rounded="lg" overflow="hidden" bg="white">
                <Box padding={6} margin={4}>
                    Hello Uploads
                </Box>
            </Box>
        </Layout>
    );
}
