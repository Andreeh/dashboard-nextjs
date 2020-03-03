import { Box } from '@chakra-ui/core';

export function Content({ children }) {
    return (
        <Box
            marginLeft="56"
            minHeight="calc(100vh - 4rem)"
            marginTop="16"
            bg="gray.100">
            <Box
                as="main"
                height="inherit"
                padding={4}
                maxW={{ lg: '5xl' }}
                mx={{ lg: 'auto' }}>
                {children}
            </Box>
        </Box>
    );
}
