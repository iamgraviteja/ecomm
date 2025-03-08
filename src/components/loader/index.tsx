import { LoaderPinwheel } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center animate-spin py-20">
      <LoaderPinwheel size={40} />
    </div>
  );
};

export default Loader;
