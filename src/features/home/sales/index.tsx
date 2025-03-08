import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { fetchProducts } from "../../../store/reducers/productsSlice";
import { Product } from "../../../components/product";
import { useSelector } from "react-redux";

const Sales = () => {
  const dispatch: AppDispatch = useDispatch();

  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );
  const { isDarkMode } = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    dispatch(fetchProducts());
    return () => {
      console.log("Sales component unmounted");
    };
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div
      className={`container mx-auto p-4 ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <h1
        className={`text-2xl font-bold mb-4 ${
          isDarkMode ? "text-gray-100" : "text-gray-900"
        }`}
      >
        Sales
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Sales;
