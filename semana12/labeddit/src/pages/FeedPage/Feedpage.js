import React from "react";
import { Button } from "@material-ui/core";
import useProtectedPage from "../../hooks/useProtectedPage";

const Feedpage = () => {
  useProtectedPage()
  return (
    <div>
      <h3>Feed</h3>
      <Button variant="contained" color="primary">
        FEED
      </Button>
    </div>
  );
};

export default Feedpage;
