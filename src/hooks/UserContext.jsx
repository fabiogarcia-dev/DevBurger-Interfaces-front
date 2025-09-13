import {createContext, useContext, useState, useEffect } from "react";

/**Estado do usuário logado
Persistência em localStorage
Login e logout
Disponibilização de dados do usuário globalmente */

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

/**Ao montar o componente, verifica se já existem dados de usuário salvos no localStorage e os carrega para o estado. */

    useEffect(() => {
        const userInfoLocalStorage = localStorage.getItem("deburger:userData");
        if(userInfoLocalStorage) {
            setUserInfo(JSON.parse(userInfoLocalStorage));
        }
    },[]);
    
    /**Disponibiliza userInfo, putUserData e logout para todos os componentes filhos que consumirem o contexto. */

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
