import React from "react";
import lixeira from '../../Assets/Img/lixeira_laranja.png'

export const MeusClientes = () => {

    return(
        <>
            <div>
                <h1>Meus Clientes</h1>
                <button>+</button>
            </div>

            <section>

                <div>
                    <span>A</span>
                    <span>
                        Amanda - Vizinha
                        <span>R$ 45,90</span>
                    </span>
                    <button>
                        <img src={lixeira} alt="Excluir item" />
                    </button>
                </div>

                <div>
                    <span>A</span>
                    <span>
                        Amanda - Vizinha
                        <span>R$ 45,90</span>
                    </span>
                    <button>
                        <img src={lixeira} alt="Excluir item" />
                    </button>
                </div>

            </section>
        </>
    );

}

export default MeusClientes;