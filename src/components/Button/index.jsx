import propTypes from "prop-types";

import { ContainerButton } from "./styles";

/* Componente criado para inserir os botões em todas as paginas de forma padrão*/
export function Button({ children, ...props }){
    return <ContainerButton {...props}>{ children }</ContainerButton>
}

Button.propTypes = {
    children: propTypes.string,
};