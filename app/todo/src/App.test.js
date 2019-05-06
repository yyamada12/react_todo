import React from "react";
import { render, cleanup, getByTestId } from "react-testing-library";
import "jest-dom/extend-expect";

import App from "./App";
import TaskList from "./TaskList/TaskList";

afterEach(cleanup);

describe("App", () => {
  it("初期状態でタスクは0個で、 Nothing Todo と表示", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("todos")).toHaveTextContent("Nothing Todo");
  })
  it("フォームがある", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("form")).toBeDefined();
  })
  it("新規Todo作成ボタンがある", () => {
    const { getByText } = render(<App />);
    expect(getByText("Add Task")).toBeDefined();
  })
  it("タスクがある場合はリストで表示", () => {
    const todos = [{
      id: 1,
      name: "Task 1"
    }]
    const { getByTestId } = render(<TaskList todos={todos}/>);
    expect(getByTestId("todos")).toHaveTextContent("Task 1");
  })
  it.todo("ボタンをクリックするとTodoが追加される")
})