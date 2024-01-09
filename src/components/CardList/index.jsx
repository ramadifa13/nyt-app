import {
  SimpleGrid,
  Card,
  Flex,
  Spinner,
  Text,
  Box,
  Link,
} from "@chakra-ui/react";
import moment from "moment";

export const CardList = ({ data, isloading }) => {
  return isloading ? (
    <Flex justifyContent="center" alignItems="center" height="100%">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Flex>
  ) : data.length === 0 ? (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="100%"
      border={"2px solid grey"}
      borderRadius={30}
    >
      <Text fontSize="2xl">No data available.</Text>
    </Flex>
  ) : (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} padding={4}>
      {data.map((card) => (
        <Link key={card._id} href={card.web_url} isExternal color="teal.500">
          <Card p={4} minH={'100%'} variant={"elevated"}>
            <Box>
              <Text fontSize="xl" fontWeight="bold">
                {card.headline.main}
              </Text>
              <Text fontSize="sm" color="gray.500">
                {card.byline.original || "Unknown"}
              </Text>
              <Text fontSize="sm" color="gray.500">
                {moment(card.pub_date).format('MMM DD, YYYY')}
              </Text>
              <Text mt={2}>{card.snippet || card.abstract || " - "}</Text>
            </Box>
          </Card>
        </Link>
      ))}
    </SimpleGrid>
  );
};
