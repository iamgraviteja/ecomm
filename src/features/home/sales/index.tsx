import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Loader from "../../../components/loader";
import { ProductComponent } from "../../../components/product";
import { AppDispatch, RootState } from "../../../store";
import {
  clearStore,
  fetchProducts,
} from "../../../store/reducers/productsSlice";

const Sales = () => {
  const dispatch: AppDispatch = useDispatch();

  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );
  const { isDarkMode } = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    dispatch(fetchProducts());
    return () => {
      dispatch(clearStore());
    };
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={`container mx-auto p-4`}>
      <h1
        className={`text-2xl font-bold mb-4 ${
          isDarkMode ? "text-gray-100" : "text-gray-900"
        }`}
      >
        On Sale
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductComponent key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Sales;
