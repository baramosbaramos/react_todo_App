import React from "react";

export const CompleteTodoes = (props) => {
  const { todoes, onClickBack } = props;

  return (
    <div className="complete-area">
      <p className="title">完了のtodo</p>
      <ul>
        {todoes.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
