import styled from "styled-components";
import { ChangeEvent, FormEvent, useState } from "react";
interface IUserInfo {
  userName: string;
  cardNumber: string;
  mm: string;
  yy: string;
  cvc: string;
}
export default function FormContent({
  userInformation,
  setUserInformation,
}: {
  userInformation: IUserInfo;
  setUserInformation: (information: IUserInfo) => void;
}) {
  interface IErrorState {
    [key: string]: {
      error: boolean;
      message: string;
    };
  }
  const [error, setError] = useState<IErrorState>({
    userName: {
      error: false,
      message: "Can’t be blank",
    },
    cardNumber: {
      error: false,
      message: "Wrong format, numbers only",
    },
    mm: {
      error: false,
      message: "Can’t be blank",
    },

    cvc: {
      error: false,
      message: "Can’t be blank",
    },
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const mmOryyError =
      userInformation.mm === "" ||
      userInformation.yy === "" ||
      isNaN(Number(userInformation.mm)) ||
      isNaN(Number(userInformation.mm));

    const globalError = Object.values(error).every(
      (fieldError) => fieldError.error == false
    );
    console.log(globalError);
    if (globalError) {
      setUserInformation({
        userName: "",
        cardNumber: "",
        mm: "",
        yy: "",
        cvc: "",
      });
    }
    setError({
      ...error,
      userName: {
        ...error.userName,
        error: userInformation.userName === "",
      },

      cardNumber: {
        ...error.cardNumber,
        error:
          userInformation.cardNumber === "" ||
          isNaN(Number(userInformation.cardNumber)),
      },
      mm: {
        ...error.mm,
        error: mmOryyError,
      },
      cvc: {
        ...error.cvc,
        error: userInformation.cvc === "" || isNaN(Number(userInformation.cvc)),
      },
    });
  };
  console.log(error);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "cardNumber") {
      let income = value.replace(/\s/g, "");
      console.log(income);

      if (income.length === 17) {
        return;
      }

      if (income.length % 4 === 0) {
        setUserInformation({ ...userInformation, cardNumber: `${value} ` });
        return;
      }
    }

    if (name == "mm" || name == "yy") {
      let income = value.replace(/\s/g, "");
      if (income.length === 3) {
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
          />
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
          />
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
            />

            <input
              name="yy"
              className="mm_yy"
              type="text"
              placeholder="YY"
              value={userInformation.yy}
              onChange={handleChange}
            />

            <input
              name="cvc"
              id="cvc"
              type="text"
              placeholder="e.g. 123"
              value={userInformation.cvc}
              onChange={handleChange}
            />
          </div>
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

  label {
    color: var(--Deep-Violet, #21092f);
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
  }
  input {
    height: 4rem;
    border-radius: 0.8rem;
    border: 1px solid var(--Light-Grey, #dfdee0);
    background: var(--White, #fff);
    padding-left: 2rem;
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
      width: 16.4rem;
    }
  }
`;
