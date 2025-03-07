import { Product } from "../../../components/product";
import { IProduct } from "../../../types/app.types";

const Sales = () => {
  const products: IProduct[] = [
    {
      id: 1,
      name: "Product 1",
      description: "Product 1 description",
      price: 100,
      image: "https://placehold.co/300",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Product 2 description",
      price: 150,
      image: "https://placehold.co/300",
    },
    {
      id: 3,
      name: "Product 3",
      description: "Product 3 description",
      price: 200,
      image: "https://placehold.co/300",
    },
    {
      id: 4,
      name: "Product 4",
      description: "Product 4 description",
      price: 250,
      image: "https://placehold.co/300",
    },
    {
      id: 5,
      name: "Product 5",
      description: "Product 5 description",
      price: 300,
      image: "https://placehold.co/300",
    },
    {
      id: 6,
      name: "Product 6",
      description: "Product 6 description",
      price: 350,
      image: "https://placehold.co/300",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sales</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Sales;
