import FormContent from "./components/FormContent";
import Header from "./components/Header";
import ThanksGraph from "./components/ThanksGraph";
import GlobalStyles from "./globalStyles/GlobalStyles";
import { useState } from "react";
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

  return (
    <>
      <GlobalStyles />
      <Header userInformation={userInformation} />
      <FormContent
        userInformation={userInformation}
        setUserInformation={setUserInformation}
      />
      <ThanksGraph />
    </>
  );
}

export default App;
