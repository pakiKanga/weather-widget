import React, { Fragment, useReducer } from "react";
import * as styles from "./App.module.scss";
import Widget from "./components/widget/Widget.js";
import Editor from "./components/editor/Editor.js";

const initialState = {
  title: "Title of widget",
  metric: "C",
  showWind: true
};

function reducer(state, action) {
  return {
    ...state,
    ...action
  }
}



const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Fragment>
      <div className={styles.globalContainer}>
        <Editor propagateState={(payload) => dispatch(payload)} />
        <div className={styles.divider}></div>
        <Widget propagateState={(payload) => dispatch(payload)} globalState={state} />
      </div>
    </Fragment>
  );
};

export default App;
