import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";
import { useState } from "react";

const Formulario = (props) => {
  // const times = ["Front-End", "Back-End", "Mobile", "UX e Designer"];

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const salvar = (evento) => {
    evento.preventDefault();
    // console.log(nome, cargo, imagem, time);
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
		setNome("")
		setCargo("")
		setImagem("")
		setTime("")
  };

  return (
    <section className="formulario">
      <form onSubmit={salvar}>
        <h2>Preencha os dados para criar o card do colaborador:</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o seu nome"
          valor={nome}
          quandoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
          valor={cargo}
          quandoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Selecione a imagem"
          valor={imagem}
          quandoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={props.times}
          valor={time}
          quandoAlterado={(valor) => setTime(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
