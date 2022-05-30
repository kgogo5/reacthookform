import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import DialogContainer from "./DialogContainer";
import Video from "./Video";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <DialogContainer />
      <Video />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
