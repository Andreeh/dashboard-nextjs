import {
    Flex,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Avatar,
    Tag,
    TagLabel
} from '@chakra-ui/core';
import Link from 'next/link';

export function Navbar() {
    return (
        <Flex
            as="header"
            height="16"
            padding="2"
            position="fixed"
            top="0"
            right="0"
            left="0"
            align="center"
            zIndex="docked"
            marginLeft="56"
            backgroundColor="ecp.700"
            // backgroundColor="white"
            borderBottomWidth="1px"
            justify="space-between">
            <EnvironmentTag currentEnvironment="UAT" />
            <Menu>
                {({ isOpen }) => (
                    <>
                        <MenuButton
                            as={Button}
                            variant="ghost"
                            fontSize="sm"
                            rightIcon={isOpen ? 'chevron-up' : 'chevron-down'}
                            _hover={{
                                backgroundColor: 'ecp.600'
                            }}
                            _active={{
                                backgroundColor: 'ecp.500'
                            }}
                            color="gray.50">
                            <Avatar
                                name="Vlad Min"
                                backgroundColor="ecp.900"
                                size="sm"
                                mr={2}
                                src="https://bit.ly/sage-adebayo"
                            />
                            Vlad Min
                        </MenuButton>
                        <MenuList>
                            <MenuItem fontSize="sm">
                                <Link href="/about">
                                    <a>About</a>
                                </Link>
                            </MenuItem>
                            <MenuDivider />
                            <MenuItem fontSize="sm">Logout</MenuItem>
                        </MenuList>
                    </>
                )}
            </Menu>
        </Flex>
    );
}

const EnvironmentTag = ({ currentEnvironment }) => (
    <Tag variant="solid" variantColor="ecp" rounded="full" ml="2">
        <TagLabel color="gray.50">
            Environment: <strong>{currentEnvironment}</strong>
        </TagLabel>
    </Tag>
);
