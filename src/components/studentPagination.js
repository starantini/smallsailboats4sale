import React from "react";

const StudentPagination = (props) => {
  const { studentPerPage, totalStudents, setCurrentPage, currentPage } = props;
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalStudents / studentPerPage); i++) {
    pages.push(i);
  }
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

export default StudentPagination;
