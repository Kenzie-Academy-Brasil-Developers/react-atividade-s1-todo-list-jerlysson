import "./todoCss.css";
const TodoList = ({ todo, handleTodo }) => {
  if (todo.length === 0) {
    return <h3>Lista de Atividades Vazia!</h3>;
  } else {
    return (
      <div className="box">
        <ul className="ulList">
          {todo.map((item, i) => {
            return (
              <li key={i} id={i}>
                {item}
                <button className="btnTodo" onClick={(e) => handleTodo(e)}>
                  Concluir e Remover
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};
export default TodoList;
