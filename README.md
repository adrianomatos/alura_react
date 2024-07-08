# Comando utilizados

npx create-react-app organo
cd organo  
npm start

## Notas

- NPM (LOCAL) NPX (REMOTO)

- PROPS:
  PASSAGEM DE PARÂMETROS
  <CampoTexto label="Nome" type="text"/>

	RECEBIMENTO DE PARÂMETROS
	<label htmlFor={props.name}>{props.label}</label>

	TAMBÉM É POSSÍVEL PASSAR CONTEÚDOS
	/<Botao>Criar Card</Botao>
	NO RECEBIMENTO
	{props.children}
