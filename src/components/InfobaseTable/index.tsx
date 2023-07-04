import React from 'react';
import {
  Badge,
  Box,
  Center,
  Checkbox,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import {
  Pagination,
  usePagination,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
  PaginationContainer,
  PaginationPageGroup,
} from '@ajna/pagination';
import { ChevronLeftIcon, ChevronRightIcon, ChevronUpDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export type TInforBaseTable = {
  id: string;
  docType: string;
  docName: string;
  sentiment: string;
  author: string;
  dateUploaded: string;
  privacy: string;
  docSummary: string;
  status: string;
};

type InfobaseTable = {
  data: TInforBaseTable[];
};

// Pagination and search will be integrated with backend

const InfobaseTable: React.FC<InfobaseTable> = ({ data }) => {
  const { colorMode } = useColorMode();
  const primaryBgColor = useColorModeValue('primary.500', 'black');
  const primaryHoverBgColor = useColorModeValue('primary.300', 'dark.800');

  const { currentPage, setCurrentPage, pagesCount, pages } = usePagination({
    pagesCount: 3,
    initialState: { currentPage: 1, pageSize: 10 },
  });

  return (
    <Box bg="white" rounded="md" boxShadow="md">
      <Flex px={{ sm: '10px', md: '30px' }} py="20px" justifyContent="space-between" gap="20px">
        <Flex alignItems="center" gap="8px" color="gray.500" fontSize="13px">
          <Text display={{ sm: 'none', md: 'block' }}>Show</Text>
          <Select
            border="1px"
            borderColor="gray.200"
            bg="white"
            color="black"
            fontSize="14px"
            w="80px"
            _focus={{ ring: 'none', outline: 'none', borderColor: 'gray.200' }}
          >
            <option value="option1">10</option>
            <option value="option2">20</option>
            <option value="option3">30</option>
          </Select>
          <Text display={{ sm: 'none', md: 'block' }}>entries</Text>
        </Flex>
        <Box maxW="sm" w="100%">
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={MagnifyingGlassIcon} />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search..."
              border="1px"
              borderColor="gray.200"
              color="black"
              _placeholder={{ color: 'gray.200' }}
              _focus={{ ring: 'none', outline: 'none', borderColor: 'gray.200' }}
            />
          </InputGroup>
        </Box>
      </Flex>
      <TableContainer>
        <Table variant="simple" w="100%">
          <Thead>
            <Tr>
              <Th borderColor="gray.200">
                <Checkbox colorScheme={colorMode === 'light' ? 'primary' : 'gray'} borderColor="gray.100" />
              </Th>
              <Th borderColor="gray.200"></Th>
              <Th borderColor="gray.200">
                <Flex alignItems="center">
                  #<Icon as={ChevronUpDownIcon} h="16px" w="16px" />
                </Flex>
              </Th>
              <Th borderColor="gray.200">
                <Flex alignItems="center">
                  doc type <Icon as={ChevronUpDownIcon} h="16px" w="16px" />
                </Flex>
              </Th>
              <Th borderColor="gray.200">
                <Flex alignItems="center">
                  doc name <Icon as={ChevronUpDownIcon} h="16px" w="16px" />
                </Flex>
              </Th>
              <Th borderColor="gray.200">
                <Flex alignItems="center">
                  sentiment <Icon as={ChevronUpDownIcon} h="16px" w="16px" />
                </Flex>
              </Th>
              <Th borderColor="gray.200">
                <Flex alignItems="center">
                  author <Icon as={ChevronUpDownIcon} h="16px" w="16px" />
                </Flex>
              </Th>
              <Th borderColor="gray.200">
                <Flex alignItems="center">
                  date uploaded <Icon as={ChevronUpDownIcon} h="16px" w="16px" />
                </Flex>
              </Th>
              <Th borderColor="gray.200">privacy</Th>
              <Th borderColor="gray.200">doc summary</Th>
              <Th borderColor="gray.200">status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((item, index) => (
              <Tr key={item?.id}>
                <Td borderColor="gray.200">
                  <Checkbox
                    colorScheme={colorMode === 'light' ? 'primary' : 'gray'}
                    defaultChecked
                    borderColor="gray.100"
                  />
                </Td>
                <Td borderColor="gray.200">{index + 1}</Td>
                <Td borderColor="gray.200">{item.id}</Td>
                <Td borderColor="gray.200">{item.docType}</Td>
                <Td borderColor="gray.200">{item.docType}</Td>
                <Td borderColor="gray.200">{item?.sentiment}</Td>
                <Td borderColor="gray.200">{item?.author}</Td>
                <Td borderColor="gray.200">{item?.dateUploaded}</Td>
                <Td borderColor="gray.200">{item?.privacy}</Td>
                <Td borderColor="gray.200">
                  <Text isTruncated maxW="180px" w="100%">
                    {item?.docSummary}
                  </Text>
                </Td>
                <Td borderColor="gray.200">
                  <Badge variant={item?.status === 'Pending' ? 'outline' : 'subtle'} colorScheme="green">
                    {item?.status}
                  </Badge>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Center py="20px">
        <Pagination pagesCount={pagesCount} currentPage={currentPage} onPageChange={setCurrentPage}>
          <PaginationContainer>
            <PaginationPrevious
              w="40px"
              marginRight="5px"
              bg={primaryHoverBgColor}
              color="white"
              _hover={{ bg: primaryBgColor }}
            >
              <Icon as={ChevronLeftIcon} />
            </PaginationPrevious>
            <PaginationPageGroup>
              {pages.map((page: number) => (
                <PaginationPage
                  key={`pagination_page_${page}`}
                  page={page}
                  w="40px"
                  colorScheme="gray"
                  bg={page === currentPage ? primaryBgColor : primaryHoverBgColor}
                  color="white"
                  _hover={{ bg: primaryBgColor }}
                />
              ))}
            </PaginationPageGroup>
            <PaginationNext
              w="40px"
              marginLeft="5px"
              bg={primaryHoverBgColor}
              color="white"
              _hover={{ bg: primaryBgColor }}
            >
              <Icon as={ChevronRightIcon} />
            </PaginationNext>
          </PaginationContainer>
        </Pagination>
      </Center>
    </Box>
  );
};

export default InfobaseTable;
