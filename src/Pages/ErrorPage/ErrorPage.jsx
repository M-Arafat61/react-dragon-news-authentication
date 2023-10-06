import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  //   console.log(error);
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-2xl'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className=''>{error.status}</p>
      <span>
        <i>{error.statusText || error.message}</i>
      </span>
    </div>
  );
};

export default ErrorPage;
