import React from "react";
import './style.css';
import lixeira from '../../Assets/Img/lixeira_laranja.png'

export const Cliente = (props) => {
    
    return(
        <div className="cliente">
            <span className="inicial">{props.obj.inicial}</span>
            <span className="nome">
                {props.obj.nome}
                <span className="preco">R$ {props.obj.totalCliente}</span>
            </span>
            <button className="btn">
                <img src={lixeira} alt="Excluir item" />
            </button>
        </div>
    )
}

export default Cliente;