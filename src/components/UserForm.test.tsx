import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { UserForm } from "./UserForm";

describe("testes do UserForm", () => {
  test("renderiza dois inputs e um botão", () => {
    render(<UserForm onAddUser={() => {}} />);
    const nomeInput = screen.getByTestId("nome");
    const emailInput = screen.getByTestId("email");
    const submitButton = screen.getByRole("button");

    expect(nomeInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test("ao preencher o formulario chama a função onAddUser", async () => {
    // const argList: User[] = [];

    // const callback = (args: User) => {
    //   argList.push(args);
    //   console.log(args);
    //   console.log(argList);
    // };

    const mock = jest.fn();

    render(<UserForm onAddUser={mock} />);

    const nomeInput = screen.getByTestId("nome");
    const emailInput = screen.getByTestId("email");
    const submitButton = screen.getByRole("button");

    await user.click(nomeInput);
    await user.keyboard("vem ser");

    await user.click(emailInput);
    await user.keyboard("vemser@vemser.com");

    await user.click(submitButton);

    // expect(argList).toHaveLength(1);
    // expect(argList[0]).toEqual({
    //   nome: "vem ser",
    //   email: "vemser@vemser.com",
    // });

    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({
      nome: "vem ser",
      email: "vemser@vemser.com",
    });
  });
});
