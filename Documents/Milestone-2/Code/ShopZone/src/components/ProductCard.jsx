import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  const { id, name, image, rating, price } = product;

  return (
    <Link to={`/Product/${id}`} className="group block rounded-lg overflow-hidden shadow-md hover:shadow-xl">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-auto bg-gray-300" />
      </div>
      <div className="p-4 bg-blue-100">
        <h3 className="text-xl font-semibold group-hover:text-blue-600 underline ">{name}</h3>
        <div className="flex items-center mb-2">
          <span className=" flex items-center text-yellow-500 text-sm mr-1">
            {Array.from({ length: rating }, (_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-yellow-500 fill-current"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2.293l1.146 1.147a1 1 0 001.414-1.414l-2-2a1 1 0 00-1.414 0l-2 2a1 1 0 001.414 1.414L10 2.293zm.708 6.647a1 1 0 00-1.416 0L7 9.293 5.854 8.146a1 1 0 00-1.415 1.415l1.646 1.647-1.549 1.549a1 1 0 101.414 1.414l1.549-1.55 1.646 1.646a1 1 0 001.415-1.415L10.415 10l1.55-1.549a1 1 0 000-1.415z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
          </span>
          <span className="text-gray-500 text-sm">{`${rating} stars`}</span>
        </div>
        <div className="text-lg font-semibold text-blue-600">${price.toFixed(2)}</div>
      </div>
    </Link>
  );
}

export default ProductCard;