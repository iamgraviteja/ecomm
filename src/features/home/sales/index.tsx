import { Product } from "../../../components/product";
import { IProduct } from "../../../types/app.types";

const Sales = () => {
  const products: IProduct[] = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "High-quality wireless headphones with noise cancellation.",
      price: 100,
      image: "https://placehold.co/300?text=Wireless+Headphones",
    },
    {
      id: 2,
      name: "Smart Watch",
      description:
        "Feature-rich smart watch with health tracking and notifications.",
      price: 150,
      image: "https://placehold.co/300?text=Smart+Watch",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      description: "Portable Bluetooth speaker with excellent sound quality.",
      price: 200,
      image: "https://placehold.co/300?text=Bluetooth+Speaker",
    },
    {
      id: 4,
      name: "4K TV",
      description: "Ultra HD 4K TV with vibrant colors and smart features.",
      price: 250,
      image: "https://placehold.co/300?text=4K+TV",
    },
    {
      id: 5,
      name: "Gaming Console",
      description:
        "Next-gen gaming console with immersive graphics and gameplay.",
      price: 300,
      image: "https://placehold.co/300?text=Gaming+Console",
    },
    {
      id: 6,
      name: "Laptop",
      description: "High-performance laptop for work and play.",
      price: 350,
      image: "https://placehold.co/300?text=Laptop",
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
