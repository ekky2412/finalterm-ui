import React from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Divider,
  Text,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

const ProductsList = ({ product }) => {
  return (
    <Card
      p={5}
      mx={5}
      mb="10"
      border="1px"
      maxW="lg"
      maxHeight="80%"
      overflowY="hidden"
    >
      <CardBody>
        <Image
          m="auto"
          maxWidth={150}
          src={product.imageUrl}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{product.title}</Heading>
          <Text color="blue.600" fontSize="2xl">
            Rp. {product.price.toLocaleString("id-ID")}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProductsList;
