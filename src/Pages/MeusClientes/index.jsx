import React from "react";
import './index.css';
import Cliente from "../../Components/Cliente";

export const MeusClientes = () => {

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
                <button className="btn btn_gray">+</button>
            </div>

            <section>
                <Cliente obj={cliente1} />
                <Cliente obj={cliente2} />
                <Cliente obj={cliente3} />
            </section>
        </div>
    );

}

export default MeusClientes;