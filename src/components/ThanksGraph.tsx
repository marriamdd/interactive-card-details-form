import styled from "styled-components";
export default function ThanksGraph() {
  return (
    <ThanksContainer>
      <img src="/images/icon-complete.svg" alt="icon-complete" />
      <h1>THANK YOU!</h1>
      <p>We’ve added your card details</p>
      <button>Continue</button>
    </ThanksContainer>
  );
}
const ThanksContainer = styled.div`
  margin-top: 9rem;
  width: 37.5rem;
  display: flex;
  flex-direction: column;

  align-items: center;
  @media screen and (min-width: 1440px) {
    width: 40rem;
    margin-top: 28rem;
    margin-left: 30rem;
  }
  h1 {
    color: var(--Deep-Violet, #21092f);
    text-align: center;
    font-size: 2.8rem;

    font-weight: 500;

    letter-spacing: 3.422px;
  }
  p {
    color: var(--Purplish-Grey, #8f8694);
    text-align: center;

    font-size: 1.8rem;

    font-weight: 500;
  }
`;
