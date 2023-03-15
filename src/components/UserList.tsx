import { User } from "../utils/interfaces";

export const UserList: React.FC<{ userList: User[] }> = ({ userList }) => {
  return (
    <div>
      {userList.map((user) => {
        return (
          <div key={user.email}>
            <p>{user.nome}</p>
            <p>{user.email}</p>
          </div>
        );
      })}
    </div>
  );
};
