import React, { useState } from "react";
import ReactDOM from "react-dom";
import QRCode from "qrcode.react";


function DownloadQRCode() {
  const [qrValue, setQrValue] = useState("Chris");
  const handleOnChange = event => {
    const { value } = event.target;
    setQrValue(value);
  };
  const downloadQRCode = () => {
    // Generate download with use canvas and stream
    const canvas = document.getElementById("qr-gen");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${qrValue}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <div className="App">
      <h1>QR Code and Download - Cal Chris</h1>
      <input onChange={handleOnChange} placeholder="Write your value" />
      <br />
      <QRCode
        id="qr-gen"
        value={qrValue}
        size={290}
        level={"H"}
        includeMargin={true}
      />
      <p>
        Click for{" "}
        <button type="button" onClick={downloadQRCode}>
          Download QR Code
        </button>
      </p>
    </div>
  );
}

export default DownloadQRCode;