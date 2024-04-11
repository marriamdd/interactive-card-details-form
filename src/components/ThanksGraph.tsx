import styled from "styled-components";
export default function ThanksGraph() {
  return (
    <ThanksContainer>
      <img src="public/images/icon-complete.svg" alt="icon-complete" />
      <h1>THANK YOU!</h1>
      <p>We’ve added your card details</p>
      <button>Continue</button>
    </ThanksContainer>
  );
}
const ThanksContainer = styled.div`
  margin-top: 9rem;
  width: 375px;
  display: flex;
  flex-direction: column;

  align-items: center;
  h1 {
    color: var(--Deep-Violet, #21092f);
    text-align: center;
    font-size: 28px;

    font-weight: 500;

    letter-spacing: 3.422px;
  }
  p {
    color: var(--Purplish-Grey, #8f8694);
    text-align: center;

    font-size: 18px;

    font-weight: 500;
  }
`;
