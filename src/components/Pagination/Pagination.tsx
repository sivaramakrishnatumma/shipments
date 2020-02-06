import * as React from "react";
import "./Pagination.scss";
import { IPaginationProps } from "../../types/types";

const Pagination = ({
  shipmentsPerPage,
  totalShipments,
  activePage,
  paginate
}: IPaginationProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalShipments / shipmentsPerPage); i++) {
    pageNumbers.push(i);
  }
  if (totalShipments === 0) return <></>;
  return (
    <nav>
      <span className="pagination-label">
        Showing Page {activePage} of {pageNumbers.length}
      </span>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a
              href="!#"
              className={`page-link ${number === activePage ? "active" : ""}`}
              onClick={e => {
                e.preventDefault();
                paginate(number);
              }}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
