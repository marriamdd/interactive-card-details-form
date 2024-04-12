import InputMask from "react-input-mask";
import styled from "styled-components";
import { ChangeEvent, FormEvent, useRef } from "react";
interface IUserInfo {
  userName: string;
  cardNumber: string;
  mm: string;
  yy: string;
  cvc: string;
}

export interface IValidationErrors {
  first?: string;
  userName?: string;
  cardNumber?: string;
  mm?: string;
  yy?: string;
  cvc?: string;
}
export default function FormContent({
  userInformation,
  setUserInformation,
  setError,
  error,
}: {
  setError: React.Dispatch<React.SetStateAction<IValidationErrors>>;
  error: IValidationErrors;
  userInformation: IUserInfo;
  setUserInformation: (information: IUserInfo) => void;
}) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors: IValidationErrors = {};

    if (userInformation.userName === "") {
      validationErrors.userName = "Can’t be blank";
    }

    if (userInformation.cardNumber === "") {
      validationErrors.cardNumber = "Can’t be blank";
    }

    if (isNaN(Number(userInformation.cvc))) {
      validationErrors.cvc = "Can’t be alphabet";
    } else if (userInformation.cvc === "") {
      validationErrors.cvc = "Can’t be blank";
    }

    if (userInformation.mm === "" || userInformation.yy === "") {
      validationErrors.mm = "Can’t be blank";
    } else if (
      isNaN(Number(userInformation.mm)) ||
      isNaN(Number(userInformation.yy))
    ) {
      validationErrors.mm = "Can’t be alphabet";
    }

    setError(validationErrors);
  };
  console.log(error);
  const cvcref = useRef<HTMLInputElement>(null);
  const yyref = useRef<HTMLInputElement>(null);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const ChangeErrorList: IValidationErrors = { ...error, [name]: "" };

    setError(ChangeErrorList);

    if (name == "mm") {
      let income = value.replace(/\s/g, "");

      if (income.length === 2) {
        yyref.current?.focus();
        setUserInformation({ ...userInformation, [name]: value });
        return;
      }
    }
    if (name == "yy") {
      let income = value.replace(/\s/g, "");

      if (income.length === 2) {
        cvcref.current?.focus();
        setUserInformation({ ...userInformation, [name]: value });
        return;
      }
    }
    if (name == "cvc") {
      let income = value.replace(/\s/g, "");
      if (income.length === 4) {
        return;
      }
    }
    setUserInformation({ ...userInformation, [name]: value });
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <PersonalInfoContainer error={error.userName}>
          <label htmlFor="UserName">Cardholder Name</label>
          <input
            name="userName"
            id="userName"
            type="text"
            placeholder="e.g. Jane Appleseed"
            value={userInformation.userName}
            onChange={handleChange}
          />
          {error.userName && <ErrorMessage>{error.userName}</ErrorMessage>}
        </PersonalInfoContainer>
        <PersonalInfoContainer error={error?.cardNumber}>
          <label htmlFor="CardNumber">Card Number</label>
          <InputMask
            mask="9999 9999 9999 9999"
            maskChar=""
            name="cardNumber"
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            value={userInformation.cardNumber}
            onChange={handleChange}
          />
          {error.cardNumber && <ErrorMessage>{error.cardNumber}</ErrorMessage>}
        </PersonalInfoContainer>
        <AdditionalPersonInfo error={error}>
          <div className="labelDiv">
            <label htmlFor="date">Exp. Date (MM/YY)</label>
            <label htmlFor="cvc">CVC</label>
          </div>
          <div className="additionalInputDiv">
            <input
              name="mm"
              className="mm_yy"
              id="date"
              type="text"
              placeholder="MM"
              value={userInformation.mm}
              onChange={handleChange}
            />

            <input
              name="yy"
              className="mm_yy"
              type="text"
              placeholder="YY"
              value={userInformation.yy}
              onChange={handleChange}
              ref={yyref}
            />

            <input
              name="cvc"
              id="cvc"
              type="text"
              placeholder="e.g. 123"
              value={userInformation.cvc}
              onChange={handleChange}
              ref={cvcref}
            />
          </div>
          <div className="mm_cvcErrorDiv">
            {" "}
            {error.mm && <ErrorMessage>{error.mm}</ErrorMessage>}
            {error.cvc && <ErrorMessage>{error.cvc}</ErrorMessage>}
          </div>

          <div style={{ display: "flex", gap: "10rem" }}></div>
        </AdditionalPersonInfo>
        <button type="submit">Confirm</button>
      </form>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  form {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10rem;
    gap: 1.5rem;
    width: 375px;
    @media screen and (min-width: 1440px) {
      box-sizing: border-box;

      margin-left: 35rem;
      margin-top: 23rem;
    }
  }
  .mm_cvcErrorDiv {
    display: flex;
    gap: 10rem;
  }
  label {
    color: var(--Deep-Violet, #21092f);
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    cursor: pointer;
  }
  input {
    height: 4rem;
    border-radius: 0.8rem;

    border: 1px solid var(--Light-Grey, #dfdee0);
    background: var(--White, #fff);
    padding-left: 2.5rem;
    cursor: pointer;
  }
  input:hover {
    border: 1px solid var(--Gradient, #6348fe);
  }
`;
const PersonalInfoContainer = styled.div<{ error: string | undefined }>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  & > input {
    border: ${(props) => (props.error ? "1px solid  red" : "")};
    width: 32.7rem;
    @media screen and (min-width: 1440px) {
      width: 381px;
      height: 45px;
    }
  }
`;

const AdditionalPersonInfo = styled.div<{ error?: Partial<IValidationErrors> }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .labelDiv {
    display: flex;
    gap: 2rem;
  }

  .additionalInputDiv {
    display: flex;
    width: 32.7rem;
    gap: 1rem;
    @media screen and (min-width: 1440px) {
      width: 38.1rem;
    }
    .mm_yy {
      border: ${(props) => (props.error?.mm ? "1px solid red" : "")};
      width: 7.2rem;
      @media screen and (min-width: 1440px) {
        width: 8rem;
      }
    }
    #cvc {
      border: ${(props) => (props.error?.cvc ? "1px solid red" : "")};
      padding-left: 3rem;
      width: 16.4rem;
      @media screen and (min-width: 1440px) {
        width: 19.1rem;
      }
    }
  }
`;
const ErrorMessage = styled.p`
  color: var(--Red, #ff5050);
  margin: 0;
  font-size: 1.2rem;
  height: 3px;
  font-weight: 500;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
`;
