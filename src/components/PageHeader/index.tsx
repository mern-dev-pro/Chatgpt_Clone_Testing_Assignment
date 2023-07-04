import React from 'react';
import { Box, Text } from '@chakra-ui/react';

type PageHeaderProps = {
  title: string;
  description?: string;
};

const PageHeader: React.FC<PageHeaderProps> = ({ title = '', description = '' }) => {
  return (
    <Box py="20px">
      <Text fontSize="2xl" fontWeight="bold">
        {title}
      </Text>
      <Text mt="10px" fontSize="md" color="gray.500">
        {description}
      </Text>
    </Box>
  );
};

export default PageHeader;
