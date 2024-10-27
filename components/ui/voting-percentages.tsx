import * as React from 'react';
import {
  Container,
  Box,
  chakra,
  Flex,
  Divider,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
  useColorModeValue, Avatar
} from '@chakra-ui/react';

const networks: any[] = [
  {
    userName: 'Instagram',
    avatar: 'https://bit.ly/sage-adebayo',
    name: 'Instagram',
    visotors: '3,550',
    visotorsRatio: '70%'
  },
  {
    userName: 'Twitter',
    avatar: 'https://bit.ly/sage-adebayo',
    name: 'Twitter',
    visotors: '1,229',
    visotorsRatio: '50%'
  },
  {
    userName: 'Facebook',
    avatar: 'https://bit.ly/sage-adebayo',
    name: 'Facebook',
    visotors: '1,115',
    visotorsRatio: '40%'
  }
];

const VotingPercentages = () => {
  return (
    <Container maxW="6xl" py={10} px={4}>
      <Box
        border="1px solid"
        borderColor="gray.100"
        padding={5}
        rounded="md"
        boxShadow="lg"
        overflow="hidden"
      >
        <Flex justifyContent="left" p={5}>
          <chakra.h3
            fontSize="xl"
            fontWeight="bold"
            textAlign="center"
            color="gray.600">
            Voting
          </chakra.h3>
        </Flex>
        <Divider />
        <TableContainer>
          <Table size="md">
            <Thead>
              <Tr fontWeight="900">
                <Th>Network</Th>
                <Th>Visitors</Th>
                <Th>New Users Rate</Th>
              </Tr>
            </Thead>
            <Tbody>
              {networks.map((network, index) => (
                <Tr key={index}>
                  <Td fontSize="sm">
                    <Avatar size="md" name={network.userName} src={network.userAvatar} />
                    {network.name}</Td>
                  <Td fontSize="sm">{network.visotors}</Td>
                  <Td>
                    <Box
                      w="100%"
                      bg={useColorModeValue('gray.300', 'gray.600')}
                      rounded="md"
                    >
                      <Box
                        w={network.visotorsRatio}
                        h={2}
                        bg="blue.400"
                        rounded="md"
                      ></Box>
                    </Box>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default VotingPercentages;
