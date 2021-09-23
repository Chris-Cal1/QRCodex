import QRCode from 'qrcode';
import { useEffect, useState } from "react";

const DisplayQRCodes = ({ text }) => {
  const [src, setSrc] = useState("");
  
  // To make it usable, uncomment line 10
  // and in the index.js uncomment the DisplayQRCode tag instead of the App tag
  useEffect(() => {
   // QRCode.toDataURL(text).then((setSrc));
  }, []);

  return <div>
    <img src={src}/>
  </div>;
}

export default DisplayQRCodes;