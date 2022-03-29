import React, { useState} from "react";
import { apiVendas } from "../../Services/api";
import './style.css';


export const Modal = (props) => {


    const [valorInput, setValorInput] = useState('');    

    const RealizarAcao = () => {

        if(props.acao == 'Cadastrar Cliente'){
            apiVendas.post('/clientes', {nome : valorInput})
            .then(window.location.reload())
        }

    }

    return(
        <div className={"modal "+props.mostrar}>
            <button className="btn btn_gray btn_close" onClick={props.funcao}>X</button>
            
            <input 
                type="text" 
                placeholder="Nome" 
                value={valorInput} 
                onChange={(e) => setValorInput(e.target.value)} 
            />
            
            <button 
                className="btn btn_gray btn_save" 
                onClick={() => RealizarAcao()}>
                    {props.acao}
            </button>
        </div>
    )
}

export default Modal;