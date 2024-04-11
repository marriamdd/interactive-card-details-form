import FormContent from "./components/FormContent";
import Header from "./components/Header";
import GlobalStyles from "./globalStyles/GlobalStyles";
import { useState, useEffect } from "react";
function App() {
  interface IUserInfo {
    userName: string;
    cardNumber: string;
    mm: string;
    yy: string;
    cvc: string;
  }
  const [userInformation, setUserInformation] = useState<IUserInfo>({
    userName: "",
    cardNumber: "",
    mm: "",
    yy: "",
    cvc: "",
  });
  // useEffect(() => {
  //   setUserInformation({
  //     userName: "",
  //     cardNumber: "0000 0000 0000 0000",
  //     mm: "00",
  //     yy: "00",
  //     cvc: "000",
  //   });
  // }, []);
  return (
    <>
      <GlobalStyles />
      <Header userInformation={userInformation} />
      <FormContent
        userInformation={userInformation}
        setUserInformation={setUserInformation}
      />
    </>
  );
}

export default App;
