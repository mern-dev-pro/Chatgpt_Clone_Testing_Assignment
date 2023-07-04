import React from 'react';
import {
  Button,
  Flex,
  Icon,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useColorModeValue,
  useColorMode,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { Bars3Icon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import NavItem from '../NavItem';

const navItems = [
  { name: 'Chat', icon: 'ChatBubbleLeftEllipsisIcon' },
  { name: 'Threads', icon: 'ClipboardDocumentListIcon' },
  { name: 'Infobase', icon: 'FolderIcon' },
  { name: 'Spaces', icon: 'UsersIcon' },
];
const bottomItems = [
  { name: 'Setting', icon: 'Cog6ToothIcon' },
  { name: 'Profile', icon: 'UserCircleIcon' },
];

const activeItem = 'Infobase';

const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const primaryBgColor = useColorModeValue('primary.500', 'black');
  return (
    <>
      <Flex alignItems="center" justifyContent="end" h="100%">
        <Button onClick={onOpen} bg="transparent" _hover={{ bg: 'transparent' }} p="0px">
          <Icon as={Bars3Icon} w={30} h={30} color="white" />
        </Button>
      </Flex>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={primaryBgColor}>
          <DrawerCloseButton color="white" />
          <DrawerBody py="40px">
            <Flex direction="column" h="100%" justifyContent="space-between">
              <VStack spacing="0px">
                {navItems.map((item) => (
                  <NavItem key={item?.name} label={item.name} isActive={item.name === activeItem} icon={item?.icon} />
                ))}
              </VStack>
              <VStack marginBottom="20px">
                <Button
                  w="100%"
                  rounded="none"
                  bg="transparent"
                  color="white"
                  _hover={{ bg: 'transparent' }}
                  onClick={toggleColorMode}
                >
                  {colorMode === 'dark' ? (
                    <Icon as={SunIcon} w="25px" h="25px" />
                  ) : (
                    <Icon as={MoonIcon} w="20px" h="20px" />
                  )}
                </Button>
                {bottomItems.map((item) => (
                  <NavItem key={item?.name} label={item.name} isActive={item.name === activeItem} icon={item?.icon} />
                ))}
              </VStack>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileMenu;
