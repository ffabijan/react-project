import { useEffect, useRef } from "react";
import QRCode from "qrcodejs";

const LoyaltyQR = () => {
  const qrRef = useRef(null);

  useEffect(() => {
    new QRCode(qrRef.current, {
      text: "USER_ID_12345",
      width: 200,
      height: 200,
    });
  }, []);

  return <div ref={qrRef}></div>;
};

export default LoyaltyQR;

