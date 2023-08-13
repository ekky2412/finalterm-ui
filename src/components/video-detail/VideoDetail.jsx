import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getProducts,
  getComments,
  postComment,
  getVideo,
} from "../../services/ApiServices";
import VideoEmbed from "./VideoEmbed";
import ProductsList from "./ProductsList";
import { SimpleGrid, Box, Button } from "@chakra-ui/react";
import CommentsBox from "./CommentsBox";

const VideoDetail = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [comments, setComments] = useState([]);
  const [video, setVideo] = useState([]);
  const [usernameState, setUsername] = useState({});
  const [commentState, setComment] = useState({});

  useEffect(() => {
    getVideo(id).then((video) => {
      setVideo({
        ...video,
        urlVideo: video.urlVideo.replace("/watch?v=", "/embed/"),
      });
    });

    getProducts(id).then((products) => {
      console.log(products);
      setProducts(products);
    });

    getComments(id).then((comments) => {
      console.log(comments);
      setComments(comments);
    });
  }, []);

  useEffect(() => {
    getComments(id).then((comments) => {
      // console.log(comments);
      setComments(comments);
    });
  }, [comments]);

  function handleSendComments() {
    const newComment = {
      username: usernameState,
      comment: commentState,
    };

    postComment(newComment, id).then((comments) => {
      console.log(comments);
    });
  }

  const ProductRow = (product, index) => {
    return <ProductsList key={index} product={product}></ProductsList>;
  };

  const productCard = products.map((product, index) =>
    ProductRow(product, index)
  );

  return (
    <SimpleGrid spacing={5} columns={3} px={5} mx="auto" height={"100%"}>
      <Box
        column={1}
        maxHeight="80%"
        overflowY="auto"
        css={{
          "&::-webkit-scrollbar": { width: "4px" },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "24px",
          },
        }}
      >
        {productCard}
      </Box>
      <VideoEmbed urlVideo={video.urlVideo}></VideoEmbed>
      <CommentsBox
        comments={comments}
        comment={commentState}
        setComment={setComment}
        setUsername={setUsername}
        handleSendComments={handleSendComments}
      ></CommentsBox>
    </SimpleGrid>
  );
};

export default VideoDetail;
