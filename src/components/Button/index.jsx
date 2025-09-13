import propTypes from "prop-types";

import { ContainerButton } from "./styles";

/**cria um componente de botão personalizado e estilizado no React. */

export function Button({ children, ...props }){  //Valida que o conteúdo interno (children) seja um texto (string)
    return <ContainerButton {...props}>{ children }</ContainerButton> //Encapsula estilos dentro de ContainerButton
}

Button.propTypes = {
    children: propTypes.string,
};