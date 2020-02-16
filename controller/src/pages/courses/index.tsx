import { NextPage, NextPageContext } from "next";
import { Typography, Button } from "@material-ui/core";
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

interface CoursePageProps {
  courses: Course[];
}

const CoursesPage: NextPage<CoursePageProps> = props => {
  const dispatch = useDispatch();
  const fetchCourses = async () => {
    await ActionHandler.Execute(dispatch, ActionKeys.GetCourses, CoursesApi.GetUsers);
  };

  return (
    <AdminLayout navItems={AdminNavItems} href="/index">
      <div>
        <Typography>Courses Page</Typography>
        {props.courses && props.courses.length > 0 && (
          <ul>
            {props.courses.map(c => {
              return <li>{c.name}</li>;
            })}
          </ul>
        )}
        <Button onClick={fetchCourses}>Update Redux State</Button>
      </div>
    </AdminLayout>
  );
};

CoursesPage.getInitialProps = async ({ store, isServer, pathname, query }: NextJSContext) => {
  return mapStateToProps(store.getState());
};

const mapStateToProps = (state: StoreState): CoursePageProps => {
  return {
    courses: state.courses,
  };
};

export default connect(mapStateToProps)(CoursesPage);
