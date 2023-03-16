import React from "react";
import { render, screen, within } from "@testing-library/react";
import user from "@testing-library/user-event";
import { UserList } from "./UserList";

describe("testes do UserList", () => {
  test("renderiza um usuário por linha da tabela", () => {
    const users = [
      { nome: "João", email: "joao@email.com" },
      { nome: "Maria", email: "mayra@email.com" },
    ];

    render(<UserList userList={users} />);

    // act(() => screen.logTestingPlaygroundURL());

    const linhas = within(screen.getByTestId("users")).getAllByRole("row");

    expect(linhas).toHaveLength(2);
  });
});
