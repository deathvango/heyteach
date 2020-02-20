import { NextPage } from "next";
import { Category } from "../../models/category";
import React from "react";
import { useDispatch } from "react-redux";
import ActionHandler from "../../actions/action-handler.type";
import { ActionKeys } from "../../actions/action-keys.type";
import { CategoriesApi } from "../../api/categories.api";
import PageContent from "../../components/common/page-content.component";
import { NextJSContext } from "next-redux-wrapper";
import { StoreState } from "../../store/store.state";
import { List, ListItem, Text } from "@chakra-ui/core";

interface PeriodsPageProps {
  categories: Category[];
}

const PeriodsPage: NextPage<PeriodsPageProps> = props => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (props.categories && props.categories.length > 0) {
      return;
    }

    const exec = async () => {
      await ActionHandler.Execute(dispatch, ActionKeys.GetCategories, CategoriesApi.GetCategories);
      setLoading(false);
    };
    setLoading(true);
    exec();
  }, []);

  return (
    <PageContent title="Period List" loading={isLoading}>
      {props.categories && props.categories.length > 0 && (
        <List>
          {props.categories.map(c => (
            <ListItem>
              {/* <ListItemIcon>
                <EditTwoToneIcon />
              </ListItemIcon> */}
              <Text>
                {c.name} {c.description}
              </Text>
              {/* <ListItemText primary={c.name} secondary={c.description} /> */}
            </ListItem>
          ))}
        </List>
      )}
    </PageContent>
  );
};

PeriodsPage.getInitialProps = async ({ store }: NextJSContext) => {
  return mapStateToProps(store.getState());
};

const mapStateToProps = (state: StoreState): PeriodsPageProps => {
  return {
    categories: state.categories,
  };
};

export default PeriodsPage;
