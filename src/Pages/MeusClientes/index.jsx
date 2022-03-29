import React, { useState, useEffect } from "react";
import './index.css';
import Cliente from "../../Components/Cliente";
import Modal from "../../Components/Modal";
import { apiVendas } from "../../Services/api";

export const MeusClientes = () => {

    const [modal, setModal] = useState("hide");

    const AbrirFecharModal = (estadoAtual) => {

        if(estadoAtual === "hide"){
            setModal("show")
        }else{
            setModal("hide")
        }
    }

    const [clientes, setClientes] = useState([]);

    const ListarClientes = () => {

        apiVendas.get('clientes')
        .then(resultado => {
            console.log(resultado);
            setClientes(resultado.data)
        })

    }

    useEffect(() => {
        ListarClientes()
    },[]);

    return(
        <div className="main_meus_clientes">
            <div className="topo">
                <h1>Meus Clientes</h1>
                <button className="btn btn_gray" onClick={(e) => AbrirFecharModal(modal)}>+</button>
            </div>

            <Modal acao="Cadastrar Cliente" mostrar={modal} funcao={AbrirFecharModal} />

            <section>
                {clientes.map((item) => <Cliente obj={item} key={item.id} /> )}                
            </section>
        </div>
    );

}

export default MeusClientes;