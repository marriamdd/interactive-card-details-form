import styled from "styled-components";
interface IUserInfo {
  userName: string;
  cardNumber: string;
  mm: string;
  yy: string;
  cvc: string;
}
export default function Header({
  userInformation,
}: {
  userInformation: IUserInfo;
}) {
  return (
    <HeaderContainer>
      <BackOfCard>
        <div className="blackRectangle"></div>
        <div className="greyRectangle">
          <p>{userInformation.cvc}</p>
        </div>
      </BackOfCard>
      <FrontOfCard>
        <img src="public/images/card-logo.svg" alt="card-logo" />
        <div>
          <h2>{userInformation.cardNumber}</h2>
          <div>
            <span>{userInformation.userName}</span>
            <span>{`${userInformation.mm} / ${userInformation.yy}`}</span>
          </div>
        </div>
      </FrontOfCard>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 375px;
  height: 240px;
  background-image: url(/images/bg-main-mobile.png);

  position: relative;
`;
const BackOfCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  width: 286px;
  height: 157px;
  border-radius: 6px;
  background: linear-gradient(169deg, #fff 5%, #d2d3d9 91.69%);
  position: absolute;
  z-index: 1000;
  top: 3.5rem;
  left: 7rem;
  .blackRectangle {
    margin-top: 2rem;
    width: 286px;
    height: 34.604px;
    background: #2f2f2f;
  }
  .greyRectangle {
    width: 230.975px;
    height: 29.739px;
    background: #adb5be;
    border-radius: 0.7rem;
    & > p {
      text-align: end;
      padding-right: 1rem;
      font-size: 9px;
      font-style: normal;
      font-weight: 500;
      letter-spacing: 1.286px;
      text-transform: uppercase;
    }
  }
`;
const FrontOfCard = styled.div`
  position: absolute;
  z-index: 2000;
  top: 14rem;
  left: 2rem;
  width: 285px;
  height: 156.208px;
  border-radius: 6px;
  background-image: url(/images/bg-card-front.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  & > img {
    width: 54px;
    height: 30px;
    margin-top: 2rem;
    margin-left: 1.3rem;
  }
  & > div h2 {
    font-size: 18px;
    font-weight: 500;
    padding-top: 1.5rem;
    padding-inline: 2rem;
    letter-spacing: 2.2px;
  }
  & > div div {
    display: flex;
    justify-content: space-between;
    padding-inline: 2rem;
    span {
      font-size: 9px;
      font-weight: 500;
      letter-spacing: 1.286px;
      text-transform: uppercase;
    }
  }
`;
