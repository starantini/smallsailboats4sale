//we need a component that will be placed at the bottom of the all campuses and all students
//it will be able to know what page it is on, how many items per page,
//it will simply chop up the data received from axios in a way that seems like
//different pages
// however the requirements are actually changing the axios request so that there are 10 different
//url pages each with 10 campuses and we use get requests to grab each set of ten campuses from
//database

import React from "react";

const Pagination = (props) => {
  const { campusPerPage, totalCampuses, setCurrentPage, currentPage } = props;
  console.log(totalCampuses);

  let pages = [];

  for (let i = 1; i <= Math.ceil(totalCampuses / campusPerPage); i++) {
    pages.push(i);
  }
  console.log(pages);
  return (
    <div>
      <div className="pagination">
        {pages.map((page, idx) => {
          return (
            <button
              key={idx}
              onClick={() => setCurrentPage(page)}
              className={page === currentPage ? "active" : ""}
            >
              {page}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;
