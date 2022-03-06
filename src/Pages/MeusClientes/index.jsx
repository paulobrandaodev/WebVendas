import React from "react";

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
        <>
            <div>
                <h1>Meus Clientes</h1>
                <button>+</button>
            </div>

            <section>
                <Cliente obj={cliente1} />
                <Cliente obj={cliente2} />
                <Cliente obj={cliente3} />
            </section>
        </>
    );

}

export default MeusClientes;