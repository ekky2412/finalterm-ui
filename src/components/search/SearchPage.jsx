import React from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchPage = () => {
  return (
    <div>
      <InputGroup size="lg">
        <InputLeftElement>
          <SearchIcon></SearchIcon>
        </InputLeftElement>
        <Input placeholder="Search Video ..."></Input>
      </InputGroup>
    </div>
  );
};

export default SearchPage;
