import { NextPage, NextPageContext } from "next";
import { Typography, Button } from "@material-ui/core";
import AdminLayout from "../../components/layout/admin.layout";
import { AdminNavItems } from "../../models/nav-items.admin";
import { useDispatch, connect } from "react-redux";
import { NextJSContext } from "next-redux-wrapper";
import React from "react";
import { currentTabReducer } from "../../reducers/curent-tab.reducer";
import { initialState } from "../../store/initial-state.state";
import { StoreState } from "../../store/store.state";
import { Course } from "../../models/course";

interface CoursePageProps {
  currentTab: string;
  courses: Course[];
}

const CoursesPage: NextPage<CoursePageProps> = props => {
  const dispatch = useDispatch();
  const triggerChange = () => {
    dispatch({
      type: "TEST",
      payload: "Hello World!",
    });
  };

  return (
    <AdminLayout navItems={AdminNavItems} href="/index">
      <div>
        <Typography>Courses Page</Typography>
        <Typography>Redux Text: {props.currentTab}</Typography>
        <Button onClick={triggerChange}>Update Redux State</Button>
      </div>
    </AdminLayout>
  );
};

CoursesPage.getInitialProps = async ({ store, isServer, pathname, query }: NextJSContext) => {
  return mapStateToProps(store.getState());
};

const mapStateToProps = (state: StoreState): CoursePageProps => {
  console.log(JSON.stringify(state));
  return {
    currentTab: state.currentTab,
    courses: [],
  };
};

export default connect(mapStateToProps)(CoursesPage);
