import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders the TodoList component with initial todos", () => {
  render(<TodoList />);
  const todoItems = screen.getAllByRole("listitem");
  expect(todoItems).toHaveLength(3); // Assuming 3 initial todos
});

test("can add a new todo item", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Add a new todo");
  fireEvent.change(input, { target: { value: "New Todo" } });
  fireEvent.click(screen.getByText("Add Todo"));
  expect(screen.getByText("New Todo")).toBeInTheDocument();
});

test("can toggle a todo item as completed", () => {
  render(<TodoList />);
  const todoItem = screen.getByText("Learn React");
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle("text-decoration: line-through");
});

test("can delete a todo item", () => {
  render(<TodoList />);
  const todoItem = screen.getByText("Learn React");
  const deleteButton = todoItem.nextSibling;
  fireEvent.click(deleteButton);
  expect(todoItem).not.toBeInTheDocument();
});
