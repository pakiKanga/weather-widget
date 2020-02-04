import React from "react";
import * as styles from "./Editor.module.scss";

const Editor = props => {
  const updateWidgetTitle = event => {
    props.propagateState({ title: event.target.value });
  };

  const toggleWind = event => {
    props.propagateState({ showWind: event.target.value === "wind-on" });
  };

  const toggleMetric = event => {
    props.propagateState({ metric: event.target.value });
  };

  return (
    <div className={styles.editorContainer}>
      <div className={styles.inputElement}>
        <label>Title</label>
        <input
          placeholder="Title of widget"
          onChange={updateWidgetTitle}
        ></input>
      </div>

      <div className={styles.inputElement}>
        <label>Temperature</label>
        <input
          type="radio"
          id="celsius"
          defaultChecked
          name="metric-group"
          value="C"
          onClick={toggleMetric}
        />
        <label htmlFor="celsius">°C</label>

        <input
          type="radio"
          id="fahrenheit"
          name="metric-group"
          value="F"
          onClick={toggleMetric}
        />
        <label className={styles.offsetRight} htmlFor="fahrenheit">
          °F
        </label>
      </div>

      <div className={styles.inputElement}>
        <label>Wind</label>
        <input
          type="radio"
          id="wind-on"
          name="wind-group"
          value="wind-on"
          defaultChecked
          onClick={toggleWind}
        />
        <label htmlFor="wind-on">On</label>

        <input
          type="radio"
          id="wind-off"
          name="wind-group"
          value="wind-off"
          onClick={toggleWind}
        />
        <label className={styles.offsetRight} htmlFor="wind-off">
          Off
        </label>
      </div>
    </div>
  );
};

export default Editor;
