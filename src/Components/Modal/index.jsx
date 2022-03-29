import React from "react";
import './style.css';

export const Modal = (props) => {
    
    return(
        <div className={"modal "+props.mostrar}>
            <button className="btn btn_gray btn_close" onClick={props.funcao}>X</button>
            <input type="text" placeholder="Nome" />
            <button className="btn btn_gray btn_save">{props.acao}</button>
        </div>
    )
}

export default Modal;