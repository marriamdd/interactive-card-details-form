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

  const [error, setError] = useState({ first: "first" });
  console.log(error);
  return (
    <>
      <GlobalStyles />
      <Header userInformation={userInformation} />
      {Object.keys(error).length === 0 ? (
        <ThanksGraph />
      ) : (
        <FormContent
          userInformation={userInformation}
          setUserInformation={setUserInformation}
          error={error}
          setError={setError}
        />
      )}
      {/* <FormContent
        userInformation={userInformation}
        setUserInformation={setUserInformation}
        error={error}
        setError={setError}
      /> */}
      {/* <ThanksGraph /> */}
    </>
  );
}

export default App;
