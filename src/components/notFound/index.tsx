import { Ghost } from "lucide-react";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-white dark:bg-gray-900 text-black dark:text-white">
      <Ghost size={64} />
      <h1 className="text-2xl font-bold">Page Not Found</h1>
      <p className="text-lg">The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
