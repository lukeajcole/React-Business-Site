import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-pills justify-content-center">
    {[
     `About`,
     `Contact`, 
     `Projects`,
     `Resume` 
    ].map((tab) => (
    <li className="nav-item m-3">
        <a
          href={`/#${tab}`}
          onClick={() => handlePageChange(tab)}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === `${tab}` ? 'nav-link active' : 'nav-link'}
        >
          <h1>{`${tab}`}</h1>
        </a>
      </li>
    ))}
    </ul>
    )};

export default NavTabs;
