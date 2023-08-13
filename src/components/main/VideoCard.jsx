import React from "react";
import { Text, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video.videoID}`}>
      <Box
        display="flex"
        minHeight={400}
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.8)) , url(${video.urlThumbnail})`}
        alignItems="flex-end"
      >
        <Text color="white" padding={5} fontSize={20}>
          {video.title.length > 45
            ? `${video.title.substring(0, 45)}...`
            : video.title}
        </Text>
      </Box>
    </Link>
  );
};

export default VideoCard;
