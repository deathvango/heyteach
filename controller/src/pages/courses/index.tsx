import { NextPage } from "next";
import { Text, List, ListItem } from "@chakra-ui/core";
import AdminLayout from "../../components/layout/admin.layout";
import { AdminNavItems } from "../../models/nav-items.admin";
import { useDispatch, connect } from "react-redux";
import { NextJSContext } from "next-redux-wrapper";
import React from "react";
import { StoreState } from "../../store/store.state";
import { Course } from "../../models/course";
import ActionHandler from "../../actions/action-handler.type";
import { ActionKeys } from "../../actions/action-keys.type";
import { CoursesApi } from "../../api/courses.api";
import PageContent from "../../components/common/page-content.component";

interface CoursePageProps {
  courses: Course[];
}

const CoursesPage: NextPage<CoursePageProps> = props => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (props.courses && props.courses.length > 0) {
      return;
    }

    const exec = async () => {
      await ActionHandler.Execute(dispatch, ActionKeys.GetCourses, CoursesApi.GetUsers);
      setLoading(false);
    };
    setLoading(true);
    exec();
  }, []);

  return (
    <PageContent title="Course List" loading={isLoading}>
      {props.courses && props.courses.length > 0 && (
        <List>
          {props.courses.map(c => (
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

CoursesPage.getInitialProps = async ({ store }: NextJSContext) => {
  return mapStateToProps(store.getState());
};

const mapStateToProps = (state: StoreState): CoursePageProps => {
  return {
    courses: state.courses,
  };
};

export default connect(mapStateToProps)(CoursesPage);
