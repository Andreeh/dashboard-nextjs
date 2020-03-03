import { Box, Heading, Avatar, Stack, PseudoBox } from '@chakra-ui/core';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

export function Sidebar() {
    return (
        <Box
            position="fixed"
            left={0}
            top={0}
            right={0}
            width="3xs"
            height="full"
            backgroundColor="ecp.900"
            color="gray.50"
            boxShadow="2xl"
            zIndex="100">
            <Box position="relative" overflowY="auto">
                <SidebarHeader>Hello</SidebarHeader>
                <SidebarContent>
                    <Box px="4">
                        {routes.map(route => {
                            return (
                                <Box key={route.title} mb="4">
                                    <Heading
                                        size="xs"
                                        mb="2"
                                        color="whiteAlpha.600">
                                        {route.title}
                                    </Heading>
                                    <Stack spacing={1}>
                                        {route.childRoutes.map(route => (
                                            <SidebarMenuItem
                                                key={`${route.href}-${route.title}`}
                                                href={route.href}>
                                                {route.title}
                                            </SidebarMenuItem>
                                        ))}
                                    </Stack>
                                </Box>
                            );
                        })}
                    </Box>
                </SidebarContent>
            </Box>
        </Box>
    );
}

const SidebarHeader = ({ children }) => {
    return (
        <Stack
            isInline
            padding="4"
            align="center"
            borderBottomWidth="1px"
            height="16">
            <Avatar size="sm" name={children} mr={2} />
            <Heading size="md">{children}</Heading>
        </Stack>
    );
};

const SidebarContent = ({ children }) => {
    return (
        <Box as="nav" height="100vh" py="1.5rem" px="0">
            {children}
        </Box>
    );
};

const SidebarMenuItem = ({ children, href, ...rest }) => {
    const router = useRouter();

    const isActive = router.pathname === href;

    return (
        <NextLink href={href} passHref>
            <PseudoBox
                as="a"
                fontSize="sm"
                py={1}
                px={2}
                _hover={{ textDecor: 'none' }}
                bg={isActive ? 'ecp.700' : 'transparent'}
                rounded={2}
                {...rest}>
                {children}
            </PseudoBox>
        </NextLink>
    );
};

const routes = [
    {
        title: 'Monitor',
        childRoutes: [
            {
                href: '/monitor/overview',
                title: 'Overview'
            },
            {
                href: '/monitor/topology',
                title: 'Topology'
            },
            {
                href: '/monitor/connectivity',
                title: 'Connectivity'
            }
        ]
    },
    {
        title: 'Firmware',
        childRoutes: [
            {
                href: '/firmware/updates',
                title: 'Updates'
            },
            {
                href: '/firmware/automatic-updates',
                title: 'Automatic updates'
            },
            {
                href: '/firmware/uploads',
                title: 'Uploads'
            }
        ]
    }
];
