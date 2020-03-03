import { Flex, Heading } from '@chakra-ui/core';

export function PageHeader({ title, actions }) {
    return (
        <Flex justify="space-between">
            <Heading>{title}</Heading>
            {actions}
        </Flex>
    );
}
