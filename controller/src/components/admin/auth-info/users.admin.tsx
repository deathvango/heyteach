import React from "react";
import { Text, Box } from "@chakra-ui/core";
import { UsersApi } from "../../../api/users.api";
import { User } from "../../../models/user";
import { makeUnit } from "../../../themes/globals.theme";

const UserInfoContent = () => {
  const [usersList, setUsersList] = React.useState<User[]>([]);

  React.useEffect(() => {
    UsersApi.GetUsers().then(users => {
      setUsersList(users);
    });
  }, []);

  return (
    <Box>
      <Text>Users</Text>
      {usersList.map(u => (
        <div key={u.id}>
          {u.id} - {u.username}
        </div>
      ))}
    </Box>
  );
};

// const useStyles = makeStyles(theme => ({
//   root: {
//     padding: makeUnit(theme.spacing()),
//     marginTop: makeUnit(theme.spacing()),
//   },
// }));

export default UserInfoContent;
