import React from "react";

const Card = ({ image, title, description }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col mx-auto">
      <a href="#" className="flex items-center justify-center">
        <img className="rounded-t-lg w-80 h-80" src={image} alt="" />
      </a>
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 ">{description}</p>
        </div>
        <a
          href="#"
          className="w-fit inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;
