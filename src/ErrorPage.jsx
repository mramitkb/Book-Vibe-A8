import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="space-y-6">
        <h1 className="text-3xl font-extrabold text-center">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="text-center text-[#989494]">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
