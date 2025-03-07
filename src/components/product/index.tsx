import { ProductProps } from "../../types/app.types";

export const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <div
      key={product.id}
      className="border border-cyan-300 p-4 rounded-lg shadow-md"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold">${product.price}</span>
        <div className="flex space-x-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600">
            Add to Cart
          </button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-600">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};
