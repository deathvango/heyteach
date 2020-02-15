import { Paper, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import { UsersApi } from "../../../api/users.api";
import { User } from "../../../models/user";
import { makeUnit } from "../../../themes/globals.theme";

const UserInfoContent = () => {
  const classes = useStyles();
  const [usersList, setUsersList] = React.useState<User[]>([]);

  React.useEffect(() => {
    UsersApi.GetUsers().then(users => {
      setUsersList(users);
    });
  }, []);

  return (
    <Paper className={classes.root}>
      <Typography variant="h2">Users</Typography>
      {usersList.map(u => (
        <div>
          {u.id} - {u.username}
        </div>
      ))}
    </Paper>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    padding: makeUnit(theme.spacing()),
    marginTop: makeUnit(theme.spacing()),
  },
}));

export default UserInfoContent;
