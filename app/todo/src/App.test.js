import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import App from "./App";
import TaskList from "./TaskList/TaskList";

afterEach(cleanup);

describe("App", () => {
  describe("Todoの表示", () => {
    it("初期状態でタスクは0個で、 Nothing Todo と表示", () => {
      const { getByTestId } = render(<App />);
      expect(getByTestId("todos")).toHaveTextContent("Nothing Todo");
    })
    it("タスクがある場合はリストで表示", () => {
      const todos = [{
        id: 1,
        name: "Task 1"
      }]
      const { getByTestId } = render(<TaskList todos={todos}/>);
      expect(getByTestId("todos")).toHaveTextContent("Task 1");
    })
  })
  
  describe("Todoの追加", () => {
    let getByTestId, getByText, input
    beforeEach(() => {
      ({getByText, getByTestId} = render(<App />));
      input = getByTestId('form');
    })
    it("Formに入力後、追加ボタンをクリックするとTodoが追加される", () => {
      fireEvent.change(input, {target: {value: 'Added Task'}});
      fireEvent.click(getByText('Add Task'));
      expect(getByTestId('todos')).toHaveTextContent('Added Task')
    })
    it("追加ボタンをクリックした時フォームをクリアする", () => {
      fireEvent.change(input, {target: {value: 'Added Task'}});
      fireEvent.click(getByText('Add Task'));
      expect(getByTestId('form').value).toBe('')
    })
    it.todo("入力が空の時はTodoを追加しない")
  })  

  describe("Todoの削除", () => {
    it.todo("削除ボタンを押すとTodoを削除できる")
  })

  describe("Todoのチェック", () => {
    it.todo("チェックボックスのオンオフができる")
    it.todo("チェックされているTodoの数を表示する")
  })
})