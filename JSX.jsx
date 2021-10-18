/*
JSX é uma extensão de sintaxe para JS.
*/

const element = <h1>Hello, word</h1>;

/*
JSX produz "elementos" do React.

O lance do JSX é manter toda a logica do componente no componente;

*/

const name 'Eduardo Silva';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById("root")
)

/*
Voce pode inserir qualquer expressão valida JS
dentro das chave em JSX...
*/
