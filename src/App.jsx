import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Box, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import VideoDetail from "./components/video-detail/VideoDetail";
import Main from "./components/main/Main";
import SearchPage from "./components/search/SearchPage";
const App = () => {
  return (
    <div>
      <Router>
        <Tabs
          isFitted
          variant="solid-rounded"
          colorScheme="facebook"
          style={{ padding: "10px" }}
        >
          <TabList as={Link} to="/">
            <Tab>Home</Tab>
          </TabList>
          <TabList as={Link} to="/search">
            <Tab>Search</Tab>
          </TabList>

          <Switch>
            <TabPanels>
              <TabPanel>
                <Route exact path="/">
                  <Main></Main>
                </Route>
              </TabPanel>
              <TabPanel>
                <SearchPage></SearchPage>
              </TabPanel>
            </TabPanels>
          </Switch>
        </Tabs>
        <Route path="/video/:id">
          <VideoDetail></VideoDetail>
        </Route>
      </Router>
    </div>
  );
};

export default App;
