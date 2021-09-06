import "./IndexFormCss.css";
import { useState } from "react";

const Form = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");
  return (
    <div className="box">
      <input
        type="text"
        placeholder="Insira a Atividade"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        className="btnForm"
        onClick={() => {
          addTodo(newTodo);
          setNewTodo("");
        }}
      >
        Adcionar
      </button>
    </div>
  );
};
export default Form;
