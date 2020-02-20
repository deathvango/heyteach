import { makeUnit } from "../../themes/globals.theme";
import { Box, Text } from "@chakra-ui/core";

interface PageContentProps {
  title?: string;
  loading?: boolean;
}

const PageContent: React.FC<PageContentProps> = props => {
  return (
    <Box>
      {props.title && props.title.length > 0 && (
        <div>
          <Text>{props.title}</Text>
        </div>
      )}
      {props.loading && <div>{/* <Fade in={true}>
            <CircularProgress />
          </Fade> */}</div>}
      <div>{props.children}</div>
    </Box>
  );
};

// const useStyles = makeStyles(theme => ({
//   root: {
//     marginTop: makeUnit(theme.spacing()),
//     width: "100%",
//   },
//   title: {
//     marginLeft: makeUnit(theme.spacing()),
//   },
//   progressBar: {
//     display: "flex",
//     justifyContent: "center",
//     marginTop: makeUnit(theme.spacing()),
//     marginBottom: makeUnit(theme.spacing()),
//   },
// }));

export default PageContent;
