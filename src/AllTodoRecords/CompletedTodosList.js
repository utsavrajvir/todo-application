import React from "react";
import { useSelector } from "react-redux";
import { Task } from "../Task";
import { EuiSpacer } from "@elastic/eui";

export const CompletedTodosList = () => {
  const todoListReducer = useSelector((state) => state.TodoList.todoList);

  return (
    <>
      {todoListReducer.map((todo, index) => (
        <>
          {todo.status === "completed" && (
            <>
              <Task todo={todo} index={index} />
              <EuiSpacer />
            </>
          )}
        </>
      ))}
    </>
  );
};
