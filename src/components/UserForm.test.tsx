import React from "react";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { UserForm } from "./UserForm";

test("renderiza dois inputs e um botão", () => {
  render(<UserForm />);

  const nomeInput = screen.getByTestId("nome");
  const emailInput = screen.getByTestId("email");
  const button = screen.getByRole("button");

  expect(nomeInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});
