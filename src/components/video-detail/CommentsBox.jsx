import { Divider, Flex, Input, Button } from "@chakra-ui/react";
import { React, useState, useEffect } from "react";
import Header from "./comment/Header";
import Comments from "./comment/Comments";

const CommentsBox = ({
  comments,
  setComment,
  setUsername,
  handleSendComments,
}) => {
  return (
    <Flex
      border="1px solid"
      borderRadius="lg"
      w="100%"
      flexDirection="column"
      mx="auto"
      maxHeight="60%"
    >
      <Header></Header>
      <Divider></Divider>
      <Comments comments={comments}></Comments>
      <Divider></Divider>
      <Flex p={5} flexDirection="column">
        <Input
          onChange={(e) => setUsername(e.target.value)}
          my={2}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSendComments;
            }
          }}
          name="username"
          placeholder="Username"
        ></Input>
        <Input
          onChange={(e) => {
            setComment(e.target.value);
          }}
          my={2}
          name="comment"
          placeholder="Comment"
        ></Input>
        <Button onClick={handleSendComments}>Kirim</Button>
      </Flex>
    </Flex>
  );
};

export default CommentsBox;
