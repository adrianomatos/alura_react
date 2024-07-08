import "./Rodape.css";

const Rodape = () => {
  return (
    <div className="rodape">
      <div className="redesSociais">
        <img src="/imagens/fb.png" alt="Logo Facebook" />
        <img src="/imagens/tw.png" alt="Logo Facebook" />
        <img src="/imagens/ig.png" alt="Logo Facebook" />
      </div>
      <div>
				<img src="./imagens/logo.png" alt="Logomarca" />
			</div>
      <div className="msg">
        <p>Desenvolvido por Alura</p>
      </div>
    </div>
  );
};

export default Rodape;
