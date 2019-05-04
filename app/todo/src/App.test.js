import React from "react";
import { render, cleanup, getByTestId } from "react-testing-library";
import "jest-dom/extend-expect";

import App from "./App";

afterEach(cleanup);

describe("App", () => {
  it("初期状態でタスクは0個で、 Nothing Todo と表示", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("todos")).toHaveTextContent("Nothing Todo");
  })
  it.todo("フォームからタスクを追加できる")
  it.todo("タスクがある場合はリストで表示")
})