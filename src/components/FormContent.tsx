import styled from "styled-components";
import { ChangeEvent, FormEvent, useState } from "react";

export default function FormContent() {
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
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserInformation({ ...userInformation, [name]: value });
  };
  console.log(userInformation);
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
