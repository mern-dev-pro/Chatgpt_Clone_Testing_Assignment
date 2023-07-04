import React from 'react';
import * as HeroIcons from '@heroicons/react/24/solid';
import NextLink from 'next/link';
import { Box, Link, Icon } from '@chakra-ui/react';

type NaveItemProps = {
  label: string;
  isActive?: boolean;
  icon: string;
};

const NavItem: React.FC<NaveItemProps> = ({ label, isActive, icon }) => {
  return (
    <Link
      as={NextLink}
      href="/"
      bg={isActive ? 'rgba(255,255,255,0.2)' : 'transparent'}
      _hover={{ bg: 'rgba(255,255,255,0.2)' }}
      color="white"
      fontSize="12px"
      py="10px"
      rounded="none"
      textAlign="center"
      textDecoration="none"
      w="100%"
      position="relative"
    >
      {isActive && (
        <Box position="absolute" w="3px" h="100%" bg="white" top="0px" roundedTopLeft="6px" roundedBottomLeft="6px" />
      )}
      {/* @ts-ignore */}
      <Icon as={HeroIcons?.[icon]} w="20px" h="20px" />
      <Box marginTop="2px">{label}</Box>
    </Link>
  );
};

export default NavItem;
