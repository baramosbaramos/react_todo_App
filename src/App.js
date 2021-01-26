import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";
import { IncompleteTodoes } from "./components/incompleteTodoes";
import { CompleteTodoes } from "./components/completeTodoes";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodoes, setIncompleteTodoes] = useState([]);
  const [completeTodoes, setCompleteTodoes] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodoes = [...incompleteTodoes, todoText];
    setIncompleteTodoes(newTodoes);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodoes = [...incompleteTodoes];
    newTodoes.splice(index, 1);
    setIncompleteTodoes(newTodoes);
  };

  const onClickComplete = (index) => {
    const newCompleteTodoes = [...completeTodoes, incompleteTodoes[index]];
    setCompleteTodoes(newCompleteTodoes);

    const newIncompleteTodoes = [...incompleteTodoes];
    newIncompleteTodoes.splice(index, 1);
    setIncompleteTodoes(newIncompleteTodoes);
  };

  const onClickBack = (index) => {
    const newCompleteTodoes = [...completeTodoes];
    newCompleteTodoes.splice(index, 1);
    setCompleteTodoes(newCompleteTodoes);

    const newIncompleteTodoes = [...incompleteTodoes, completeTodoes[index]];
    setIncompleteTodoes(newIncompleteTodoes);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodoes.length >= 5}
      />
      {incompleteTodoes.length >= 5 && (
        <p style={{ color: "red" }}>登録できるtodoは５個までだ！</p>
      )}

      <IncompleteTodoes
        todoes={incompleteTodoes}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodoes todoes={completeTodoes} onClickBack={onClickBack} />
    </>
  );
};
