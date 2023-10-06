import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};
export default useAuthContext;
