import { useState } from "react";
import "./CampoTexto.css";

const CampoTexto = (props) => {
  const [valor, setValor] = useState("");

  const quandoAlterado = (evento) => {
    props.quandoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input 
				value={props.valor} 
				onChange={quandoAlterado} 
				required={props.obrigatorio} 
				placeholder={props.placeholder}
      />
    </div>
  );
};

export default CampoTexto;