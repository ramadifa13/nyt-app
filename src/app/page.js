"use client"
import { useEffect, useState } from 'react';
import { CardList } from '@/components/CardList';
import { SearchField } from '@/components/SearchField';
import { Box,useToast } from "@chakra-ui/react";
import { fetchArticles } from './services/nytimeService';

export default function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const toast = useToast();

  useEffect(() => {
    let timeoutId;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const articles = await fetchArticles(searchQuery);
        setData(articles);
      } catch (error) {
        toast({
          title: error.response?.status || 'Error',
          description: error.response?.statusText || 'An error occurred',
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      } finally {
        setIsLoading(false);
      }
    };

    const delayedFetchData = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(fetchData, 1000); 
    };

    delayedFetchData();

    return () => clearTimeout(timeoutId); 
  }, [searchQuery]);


  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Box
      minH="100vh"
      maxH="100vh"
      display="grid"
      gridTemplateRows="10% 90%"
      gap={2}
      padding={4}
      bg={"#f3f6fb"}
    >
      <Box padding={4}>
        <SearchField onChange={handleSearchChange} value={searchQuery} />
      </Box>
      <Box overflow="auto">
        <CardList data={data} isloading={isLoading} />
      </Box>
    </Box>
  );
}