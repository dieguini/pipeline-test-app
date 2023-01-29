import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import { useLocalStorage } from "./useLocalStorage";
import { toastError, toastInfo } from "../../utils/Toasters";

const AuthContext = createContext();


export const AuthProvider = ({ userData, children }) => {

  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();


  const login = async ({username, password}) => {

    try {
      await Auth.signIn(username, password);
      navigate("/dashboard/chat", { replace: true });
      setUser(await Auth.currentAuthenticatedUser());
      console.log('user logged')
    } catch (err) { 

      if(err.code === "UserNotConfirmedException"){
        handleUnconfirmedUser(username);
        toastInfo(err.message); 
        return;
      }

      console.log(err.code);
      toastError(err.message);
      // handleUnconfirmedUser(username);
    }

  };

  
  const handleUnconfirmedUser = async (username) => {
    try {
      await Auth.resendSignUp(username);
      navigate('/signup', {
        state: { username, action: 'confirm'}
      }) 
    }catch(err) {
        toastError(err.message) ;
    }
  }


  const isCurrentUserAdmin = () => {
    return !!user?.signInUserSession?.accessToken?.payload['cognito:groups']?.includes('admin');
  }

  
  const logout = async () => {

    setUser(null);
    await Auth.signOut();
    navigate("/", { replace: true });

  }


  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      isCurrentUserAdmin
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps 
    [user]
  );


  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

};

export const useAuth = () => {

  return useContext(AuthContext);

};