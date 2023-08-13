import React from "react";
import { AspectRatio } from "@chakra-ui/react";

const VideoEmbed = ({ urlVideo }) => {
  return (
    <AspectRatio w="100%" maxHeight="80%">
      <iframe
        src={urlVideo}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </AspectRatio>
  );
};

export default VideoEmbed;
