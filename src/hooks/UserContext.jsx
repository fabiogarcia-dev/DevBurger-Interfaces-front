import {createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({});

    const putUserData = (userInfo) => {
        setUserInfo(userInfo);
    
        localStorage.setItem("deburger:userData", JSON.stringify(userInfo));
    };

    const logout = () => {
        setUserInfo({});
        localStorage.removeItem("deburger:userData");
    };

    useEffect(() => {
        const userInfoLocalStorage = localStorage.getItem("deburger:userData");
        if(userInfoLocalStorage) {
            setUserInfo(JSON.parse(userInfoLocalStorage));
        }
    },[]);
    
    return (
        <UserContext.Provider value={{userInfo, putUserData, logout}}>
            {children}
        </UserContext.Provider>
    );

};
const useUser = () => {
   const context = useContext(UserContext);
    if(!context) {
        throw new Error("useUser must be a valid context");
    }
    return context;
};

export const userUser = useUser;
