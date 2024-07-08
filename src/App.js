import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario/Formulario";
import Time from "./componentes/Time/Time";
import Rodape from "./componentes/Rodape/Rodape";

function App() {
  const times = [
    {
      nome: "Front-End",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9",
    },
    {
      nome: "Back-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Mobile",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "UX e Designer",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorCadastrado = (colaborador) => {
    // console.log(colaborador);
		// debugger
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) => {
          aoNovoColaboradorCadastrado(colaborador);
        }}
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador=>colaborador.time === time.nome)}
        />
      ))}
			<Rodape/>
    </div>
  );
}

export default App;
