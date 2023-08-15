import { React, useEffect, useState } from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { getVideoByTitle } from "../../services/ApiServices";
import VideoCard from "../main/VideoCard";

const SearchPage = () => {
  const [search, setSearch] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideoByTitle(search).then((videos) => {
      setVideos(videos);
    });
  }, [search]);

  const VideoRow = (video, index) => {
    return <VideoCard key={index} video={video}></VideoCard>;
  };

  const videosCard = videos.hasOwnProperty("message") ? (
    <div>Data not found</div>
  ) : (
    videos.map((video, index) => VideoRow(video, index))
  );

  return (
    <div>
      <InputGroup size="lg" mb={3}>
        <InputLeftElement>
          <SearchIcon></SearchIcon>
        </InputLeftElement>
        <Input
          borderColor="blackAlpha.800"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Video ..."
        ></Input>
      </InputGroup>
      <div>
        <SimpleGrid
          spacing={5}
          columns={3}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        >
          {videosCard}
        </SimpleGrid>
      </div>
    </div>
  );
};

export default SearchPage;
