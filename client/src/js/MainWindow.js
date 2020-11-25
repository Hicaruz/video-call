import React, { useState } from "react";
import PropTypes from "prop-types";

function MainWindow({ startCall }) {
  const params = new URLSearchParams(window.location.search)
  const _params = {}
  for (const param of params) {
    const [key, value ]= param
    _params[key] = value
  }
  console.log(_params)
  const callWithVideo = (video) => {
    const config = { audio: true, video };
    return () => startCall(true, _params.user, config);
  };

  return (
    <div className="container main-window">
      <div className="row">
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div className="row">
            <h4>Call with video or call without video to:</h4>
            <h2>{_params.name || ""}</h2>
            {/* <input
              type="text"
              className="txt-clientId"
              spellCheck={false}
              placeholder="Your friend ID"
              defaultValue={_params.name}
            /> */}
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button
                type="button"
                className="btn-action fa fa-video-camera"
                onClick={callWithVideo(true)}
              />
              <button
                type="button"
                className="btn-action fa fa-phone"
                onClick={callWithVideo(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

MainWindow.propTypes = {
  clientId: PropTypes.string.isRequired,
  startCall: PropTypes.func.isRequired,
};

export default MainWindow;
