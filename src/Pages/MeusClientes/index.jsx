import React, { useState } from "react";
import './index.css';
import Cliente from "../../Components/Cliente";
import Modal from "../../Components/Modal";

export const MeusClientes = () => {

    const [modal, setModal] = useState("hide");

    const AbrirFecharModal = (estadoAtual) => {

        if(estadoAtual === "hide"){
            setModal("show")
        }else{
            setModal("hide")
        }

    }

    var cliente1 = {
        inicial: "P",
        nome: "Paulo Brandão",
        totalCliente: "35,90"
    }

    var cliente2 = {
        inicial: "P",
        nome: "Priscila",
        totalCliente: "99,90"
    }

    var cliente3 = {
        inicial: "R",
        nome: "Rafael",
        totalCliente: "21,90"
    }

    return(
        <div className="main_meus_clientes">
            <div className="topo">
                <h1>Meus Clientes</h1>
                <button className="btn btn_gray" onClick={(e) => AbrirFecharModal(modal)}>+</button>
            </div>

            <Modal acao="Cadastrar" mostrar={modal} funcao={AbrirFecharModal} />

            <section>
                <Cliente obj={cliente1} />
                <Cliente obj={cliente2} />
                <Cliente obj={cliente3} />
            </section>
        </div>
    );

}

export default MeusClientes;