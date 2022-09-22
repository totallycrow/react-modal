import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const initialButton = screen.getByText(/Open Modal/i);
  expect(initialButton).toBeInTheDocument();
});
