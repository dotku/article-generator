import React from "react";
import { Box, Container } from "@material-ui/core";
import { withRouter } from "react-router-dom";

class LoremIpsum extends React.Component {
  constractor() {}
  render() {
    const { replacement } = this.props.match.params;
    return (
      <Container>
        <Box m={1}>
          Lorem ipsum dolor sit amet, {replacement} consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Box>
      </Container>
    );
  }
}

export default withRouter(LoremIpsum);
