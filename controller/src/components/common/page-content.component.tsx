import { makeStyles, Paper, Typography, Fade, CircularProgress, FormHelperText } from "@material-ui/core";
import { makeUnit } from "../../themes/globals.theme";

interface PageContentProps {
  title?: string;
  loading?: boolean;
}

const PageContent: React.FC<PageContentProps> = props => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      {props.title && props.title.length > 0 && (
        <div className={classes.title}>
          <Typography variant="caption">{props.title}</Typography>
        </div>
      )}
      {props.loading && (
        <div className={classes.progressBar}>
          <Fade in={true}>
            <CircularProgress />
          </Fade>
        </div>
      )}
      <Fade in={!props.loading}>
        <div>{props.children}</div>
      </Fade>
    </Paper>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: makeUnit(theme.spacing()),
    width: "100%",
  },
  title: {
    marginLeft: makeUnit(theme.spacing()),
  },
  progressBar: {
    display: "flex",
    justifyContent: "center",
    marginTop: makeUnit(theme.spacing()),
    marginBottom: makeUnit(theme.spacing()),
  },
}));

export default PageContent;
