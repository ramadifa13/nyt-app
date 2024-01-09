import React from "react";
import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export const SearchField = ({ onChange, value }) => {
  return (
    <InputGroup maxW={{ base: "full", md: "max-content" }}>
      <Input placeholder="Search ..." onChange={onChange} value={value} />
      <InputRightElement>
        <SearchIcon color="grey" />
      </InputRightElement>
    </InputGroup>
  );
};
