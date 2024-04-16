import React from 'react';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const Pagination = ({ totalPosts, postsPerPage, currentPage, setCurrentPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  const nextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="pagination flex flex-wrap justify-center mt-4">
      <button
        onClick={prevPage}
        className="w-10 h-10 mx-2 border border-gray-300 rounded-lg cursor-pointer transition duration-300 flex justify-center items-center"><GrPrevious /></button>
      {pages.map((page, index) => (
        <button
          onClick={() => setCurrentPage(page)}
          key={index}
          className={`w-10 h-10 font-semibold text-lg mx-2 border border-gray-300 rounded-lg cursor-pointer transition duration-300 ${currentPage === page ? 'font-bold border-black bg-black text-white' : 'text-gray-300 hover:bg-gray-200'}`}
          >{page}</button>
      ))}
      <button
        onClick={nextPage}
        className="w-10 h-10 mx-2 border border-gray-300 rounded-lg cursor-pointer transition duration-300 flex justify-center items-center"><GrNext /></button>
    </div>
  );
};

export default Pagination;
