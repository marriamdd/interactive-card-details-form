import styled from "styled-components";
import { ChangeEvent, FormEvent, useState, useRef, useEffect } from "react";
interface IUserInfo {
  userName: string;
  cardNumber: string;
  mm: string;
  yy: string;
  cvc: string;
}

interface IValidationErrors {
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
  setError: (error: IValidationErrors) => void;
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

    if (
      userInformation.cardNumber === "" ||
      isNaN(Number(userInformation.cardNumber))
    ) {
      validationErrors.cardNumber = "Can’t be blank";
    }

    if (userInformation.cvc === "" || isNaN(Number(userInformation.cvc))) {
      validationErrors.cvc = "Can’t be blank";
    }

    if (
      userInformation.mm === "" ||
      userInformation.yy === "" ||
      isNaN(Number(userInformation.mm)) ||
      isNaN(Number(userInformation.mm))
    ) {
      validationErrors.mm = "Can’t be blank";
    }

    console.log(validationErrors);
    setError(validationErrors);
  };

  const cvcref = useRef<HTMLInputElement>(null);
  const yyref = useRef<HTMLInputElement>(null);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const ChangeErrorList: IValidationErrors = { ...error, [name]: "" };
    console.log(ChangeErrorList);
    setError(ChangeErrorList);
    if (name === "cardNumber") {
      let income = value.replace(/\s/g, "");

      if (income.length === 17) {
        return;
      }

      if (income.length % 4 === 0) {
        setUserInformation({ ...userInformation, cardNumber: `${value} ` });

        return;
      }
    }

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
        <PersonalInfoContainer>
          <label htmlFor="UserName">Cardholder Name</label>
          <input
            name="userName"
            id="userName"
            type="text"
            placeholder="e.g. Jane Appleseed"
            value={userInformation.userName}
            onChange={handleChange}
            style={{ border: error.userName && "solid 1px red" }}
          />
          {error.userName && <ErrorMessage>{error.userName}</ErrorMessage>}
        </PersonalInfoContainer>
        <PersonalInfoContainer>
          <label htmlFor="CardNumber">Card Number</label>
          <input
            id="CardNumber"
            name="cardNumber"
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            value={userInformation.cardNumber}
            onChange={handleChange}
            style={{ border: error.cardNumber && "solid 1px red" }}
          />
          {error.cardNumber && <ErrorMessage>{error.cardNumber}</ErrorMessage>}
        </PersonalInfoContainer>
        <AdditionalPersonInfo>
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
              style={{ border: error.mm && "solid 1px red" }}
            />

            <input
              name="yy"
              className="mm_yy"
              type="text"
              placeholder="YY"
              value={userInformation.yy}
              onChange={handleChange}
              ref={yyref}
              style={{ border: error.mm && "solid 1px red" }}
            />

            <input
              name="cvc"
              id="cvc"
              type="text"
              placeholder="e.g. 123"
              value={userInformation.cvc}
              onChange={handleChange}
              ref={cvcref}
              style={{ border: error.cvc && "solid 1px red" }}
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
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10rem;
    gap: 1.5rem;
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
  button {
    width: 32.7rem;
    height: 5.3rem;
    border-radius: 0.8rem;
    background: var(--Deep-Violet, #21092f);
    color: var(--White, #fff);
    font-size: 1.8rem;
    font-weight: 500;
    margin-top: 1rem;
    margin-bottom: 4rem;
    cursor: pointer;
  }
`;
const PersonalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  & > input {
    width: 32.7rem;
  }
`;

const AdditionalPersonInfo = styled.div`
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
    .mm_yy {
      width: 7.2rem;
    }
    #cvc {
      padding-left: 3rem;
      width: 16.4rem;
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
