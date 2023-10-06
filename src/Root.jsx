import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

const Root = () => {
  return (
    <div className='font-poppins'>
      <Outlet></Outlet>
      <Toaster
        position='top-right'
        richColors
        expand
        closeButton
        duration={4000}
      />
    </div>
  );
};

export default Root;
