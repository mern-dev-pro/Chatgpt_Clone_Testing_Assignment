import React from 'react';
import { Flex, VStack, Center, Avatar, Button, Icon, useColorMode } from '@chakra-ui/react';

import NavItem from '../NavItem';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

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

const Sidebar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex direction="column" h="100%" justifyContent="space-between">
      <Flex direction="column">
        <Center paddingTop="10px" paddingBottom="10px" roundedTopEnd="8px" bg="rgba(255,255,255,0.2)">
          <Avatar w="40px" height="40px" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </Center>
        <VStack spacing="0px">
          {navItems.map((item) => (
            <NavItem key={item?.name} label={item.name} isActive={item.name === activeItem} icon={item?.icon} />
          ))}
        </VStack>
      </Flex>
      <VStack marginBottom="20px">
        <Button
          w="100%"
          rounded="none"
          bg="transparent"
          color="white"
          _hover={{ bg: 'transparent' }}
          onClick={toggleColorMode}
        >
          {colorMode === 'dark' ? <Icon as={SunIcon} w="25px" h="25px" /> : <Icon as={MoonIcon} w="20px" h="20px" />}
        </Button>
        {bottomItems.map((item) => (
          <NavItem key={item?.name} label={item.name} isActive={item.name === activeItem} icon={item?.icon} />
        ))}
      </VStack>
    </Flex>
  );
};

export default Sidebar;
