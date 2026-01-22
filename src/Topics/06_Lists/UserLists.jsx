import users from "../../../json/MOCK_DATA.json";
import User from "./User";

const UserLists = () => {
  console.log(users);

  return (
    <div>
      <h1>UserLists</h1>

    {users.map((user) => {
    return <User key={user.id} user={user} />;
    })}
    </div>
  );
};

export default UserLists;
