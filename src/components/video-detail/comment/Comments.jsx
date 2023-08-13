import React, { useEffect } from "react";
import { Flex, Text, Avatar } from "@chakra-ui/react";

const Comments = ({ comments }) => {
  return (
    <Flex maxH="50%" flexDirection="column" p={3} overflowY="scroll">
      {comments.map((item, index) => {
        return (
          <Flex key={index} w="100%" my={2} p={1}>
            <Avatar></Avatar>
            <Flex px={3} flexDirection="column">
              <Flex>
                <Text mr="2" fontWeight={"medium"}>
                  {item.username}
                </Text>
                <Text fontWeight={"light"}>
                  {new Date(item.timestamp).toLocaleDateString("id-ID")}
                </Text>
              </Flex>
              <Text>{item.comment}</Text>
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default Comments;
