import React from 'react';
import { Box, Container, Divider, useColorModeValue } from '@chakra-ui/react';

import Sidebar from '@/components/Sidebar';
import PageHeader from '@/components/PageHeader';
import MobileMenu from '@/components/MobileMenu';

type MainLayoutProps = {
  children: React.ReactNode;
  isChatUI?: boolean;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children, isChatUI = false }) => {
  const primaryBgColor = useColorModeValue('primary.500', 'black');

  return (
    <Box w="100%" minHeight="100vh" position="relative" bg="white">
      <Box
        w="80px"
        h="full"
        bg={primaryBgColor}
        color="white"
        roundedTopEnd="8px"
        roundedBottomEnd="8px"
        position="absolute"
        display={{ base: 'none', sm: 'none', md: 'block' }}
      >
        <Sidebar />
      </Box>
      <Box
        px="10px"
        display={{ base: 'block', sm: 'block', md: 'none' }}
        w="100%"
        h="50px"
        position="fixed"
        top="0px"
        bg={primaryBgColor}
      >
        <MobileMenu />
      </Box>
      <Box
        color="black"
        w="100%"
        bg="gray.100"
        paddingLeft={{ sm: '0px', md: '80px' }}
        paddingTop={{ sm: '50px', md: '0px' }}
        minHeight="100vh"
      >
        {isChatUI ? (
          <>{children}</>
        ) : (
          <>
            <Container maxW="8xl" textAlign="left">
              <PageHeader title="Brian's inforbase" description="Upload documents to save and re-use information" />
            </Container>
            <Divider borderColor="gray.300" />
            <Container maxW="8xl" textAlign="left" py="25px">
              {children}
            </Container>
          </>
        )}
      </Box>
    </Box>
  );
};

export default MainLayout;
