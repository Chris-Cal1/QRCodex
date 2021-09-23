import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import QRCode from "qrcode.react";


const download = function() {
  const link = document.createElement("a");
  link.download = "filename.png";
  link.href = document.getElementById("canvas").toDataURL();
  link.click();
};

const NewDQRCode = function() {
  return (
    <Fragment>
      <QRCode value="http://facebook.github.io/react/" id="canvas" />
      <br />
      <button type="button" onClick={download}>
        Download QR
      </button>
    </Fragment>
  );
};

export default NewDQRCode;