import "./Colaborador.css";

// PROPS desestruturados + simples
const Colaborador = ({corDeFundo, nome, imagem, cargo}) => {
  return (
    <div className="colaborador">
      <div style={{backgroundColor:corDeFundo}} className="cabecalho">
        <img src={imagem} alt="" />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
