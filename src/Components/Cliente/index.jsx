import React, {useState} from "react";
import './style.css';
import lixeira from '../../Assets/Img/lixeira_roxa.png'
import { apiVendas } from "../../Services/api";

export const Cliente = (props) => {
    

    const [modal, setModal] = useState("hide");

    const AbrirFecharModal = (estadoAtual) => {

        if(estadoAtual === "hide"){
            setModal("show")
        }else{
            setModal("hide")
        }
    }

    const [updateValor, setUpdateValor] = useState(props.obj.nome)

    const Alterar = () =>{
        apiVendas.put('clientes/'+props.obj.id, {nome : updateValor})
        .then(()=> {
            AbrirFecharModal('show')
            window.location.reload()
        })
    }

    const Excluir = () =>{
        if (window.confirm("Você realmente quer excluir este cliente?")) 
        {
            apiVendas.delete('clientes/'+props.obj.id)
            .then(res => {
                if(res.status === 200){
                    window.location.reload()
                }
            })
        }
    }

    return(

        <div className="cliente">            
            <span className="inicial" onClick={() => AbrirFecharModal('hide')}>{props.obj.nome[0]}</span>
            <span className="nome">
                {props.obj.nome}
                
                <span className="preco">
                    R$ {props.obj.saldos.reduce((total , item) => total += parseFloat(item.valor, 2), 0).toFixed(2)}
                </span>
            </span>
            <button className="btn">
                <img src={lixeira} alt="Excluir item" onClick={() => Excluir()} />
            </button>
            
            <div className={"update "+modal}>
                <input type="text" className="input" value={updateValor} onChange={(e)=> setUpdateValor(e.target.value)} />
                <button className="btn btn_gray" onClick={Alterar}>Salvar</button>
            </div>

        </div>
    )
}

export default Cliente;