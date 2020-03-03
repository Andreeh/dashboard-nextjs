import dynamic from 'next/dynamic';
import { Box, Heading, Code } from '@chakra-ui/core';
import { customTheme } from './theme';

const DynamicLoadedClientOnlyPortal = dynamic(() =>
    import('./components/client-only-portal/ClientOnlyPortal')
);

function DevTools() {
    return (
        <>
            <Box>🛠</Box>
            <Box className="tools">
                <Heading size="sm">Theme</Heading>
                <pre style={{ fontSize: 12 }}>
                    {JSON.stringify(customTheme, null, 4)}
                </pre>
            </Box>
        </>
    );
}

export const installDevtools = () => {
    if (process.browser && process.env.NODE_ENV === 'development') {
        let root = document.getElementById('dev-tools');
        if (!root) {
            root = document.createElement('div');
            root.id = 'dev-tools';
            document.body.appendChild(root);
        }

        return (
            <DynamicLoadedClientOnlyPortal selector="dev-tools">
                <DevTools />
            </DynamicLoadedClientOnlyPortal>
        );
    }
};
