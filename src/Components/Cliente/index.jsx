import React from "react";

import lixeira from '../../Assets/Img/lixeira_laranja.png'

export const Cliente = (props) => {
    
    return(
        <div>
            <span>{props.obj.inicial}</span>
            <span>
                {props.obj.nome}
                <span>R$ {props.obj.totalCliente}</span>
            </span>
            <button>
                <img src={lixeira} alt="Excluir item" />
            </button>
        </div>
    )
}

export default Cliente;