import { CartProvider } from "./CartContext";
import { UserProvider } from "./UserContext";

/**gerenciar os contextos globais da aplicação. */

const AppProvider = ({ children }) => {
  return (
  <UserProvider>
    <CartProvider>
      {children}
    </CartProvider>
  </UserProvider>
  );
};

export default AppProvider;