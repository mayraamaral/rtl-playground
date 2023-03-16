import { User } from "../utils/interfaces";

export const UserList: React.FC<{ userList: User[] }> = ({ userList }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Nome</td>
          <td>E-mail</td>
        </tr>
      </thead>
      <tbody data-testid="users">
        {userList.map((user) => {
          return (
            <tr key={user.email}>
              <td>{user.nome}</td>
              <td>{user.email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
