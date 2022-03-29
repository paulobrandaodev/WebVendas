import React from "react";
import './style.css';
import lixeira from '../../Assets/Img/lixeira_roxa.png'

export const Cliente = (props) => {
    
    return(
        <div className="cliente">
            <span className="inicial">{props.obj.nome[0]}</span>
            <span className="nome">
                {props.obj.nome}
                <span className="preco">
                    R$ {props.obj.saldos.reduce((total , item) => total += parseFloat(item.valor, 2), 0).toFixed(2)}
                </span>
            </span>
            <button className="btn">
                <img src={lixeira} alt="Excluir item" />
            </button>
        </div>
    )
}

export default Cliente;