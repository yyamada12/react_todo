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
    it("入力が空の時はTodoを追加しない", () => {
      fireEvent.change(input, {target: {value: '   '}});
      fireEvent.click(getByText('Add Task'));
      expect(getByTestId('todos')).toHaveTextContent('Nothing Todo')
    })
  })  

  describe("Todoの削除", () => {
    it("削除ボタンを押すとTodoを削除できる", () => {
      const {getByText, getByTestId} = render(<App />);
      const input = getByTestId('form');
      fireEvent.change(input, {target: {value: 'Added Task'}});
      fireEvent.click(getByText('Add Task'));
      fireEvent.click(getByText('x'))
      expect(getByTestId('todos')).toHaveTextContent('Nothing Todo')

    })
  })

  describe("Todoのチェック", () => {
    let getByTestId, getByText, input, addButton
    beforeEach(() => {
      ({getByText, getByTestId} = render(<App />));
      input = getByTestId('form');
      addButton = getByText('Add Task');
    })
    it("新しく追加したTodoのチェックはfalseで、クリックでON/OFFができる", () => {
      fireEvent.change(input, {target: {value: 'Added Task'}});
      fireEvent.click(addButton);
      const checkbox = getByTestId('checkbox');
      expect(checkbox.checked).toEqual(false);
      fireEvent.click(checkbox);
      expect(checkbox.checked).toEqual(true);
    })
    it("未チェックのTodoの数を表示する", () => {
      fireEvent.change(input, {target: {value: 'Added Task1'}});
      fireEvent.click(addButton);
      const checkbox = getByTestId('checkbox');
      fireEvent.click(checkbox);
      fireEvent.change(input, {target: {value: 'Added Task2'}});
      fireEvent.click(addButton);
      fireEvent.change(input, {target: {value: 'Added Task3'}});
      fireEvent.click(addButton);

      expect(getByTestId('counts')).toHaveTextContent('(2/3)')
    })
  })
})