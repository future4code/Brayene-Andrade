import React from "react";
// import Pagination from "./pages/pagination";
import Router from "./routes/routers";

const LIMIT = 6;


const App = () => {
  return (
    <div>
      <Router />
      {/* <Pagination 
      limit={LIMIT} 
      total={60} 
      offset={12}
      /> */}
    </div>
  );
};

export default App;
