import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import "./styles.css";

function App() {
  const [pageCount, setPageCount] = useState(10);

  const handlePageClick = () => {};

  return (
    <div className="App">
      <h1>React pagination Custom Classes</h1>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-end mt-3"}
        subContainerClassName={"pages pagination"}
        pageClassName={"page-item"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
