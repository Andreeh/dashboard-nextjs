import { useSelect } from 'downshift';
import { Box, Button, List, ListItem } from '@chakra-ui/core';

export function SelectCustomer({ items, onChange }) {
    const {
        isOpen,
        selectedItem,
        getToggleButtonProps,
        getMenuProps,
        highlightedIndex,
        getItemProps
    } = useSelect({
        items,
        id: 'downshift-toggle',
        onSelectedItemChange: onChange
    });

    return (
        <Box alignSelf="center" height="10">
            <Button
                variant="outline"
                variantColor="ecp"
                rightIcon={isOpen ? 'chevron-up' : 'chevron-down'}
                {...getToggleButtonProps()}>
                {selectedItem || 'Select a customer'}
            </Button>
            <List
                {...getMenuProps()}
                maxHeight="48"
                overflowY="auto"
                maxWidth="48"
                margin="0"
                borderTop="0"
                rounded="md"
                top="1"
                position="relative"
                backgroundColor="white">
                {isOpen &&
                    items.map((item, index) => (
                        <ListItem
                            backgroundColor={
                                highlightedIndex === index ? 'ecp.200' : ''
                            }
                            _odd={{
                                borderBottomWidth: '1px'
                            }}
                            paddingX="1"
                            paddingY="2"
                            key={`${item}${index}`}
                            {...getItemProps({ item, index })}>
                            {item}
                        </ListItem>
                    ))
                // <div
                //     style={{
                //         position: 'absolute',
                //         overflow: 'auto',
                //         backgroundColor: 'white'
                //     }}>
                //     HEllo!
                // </div>
                }
            </List>
        </Box>
    );
}
