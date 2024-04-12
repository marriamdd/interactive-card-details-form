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
          <p>{userInformation.cvc ? userInformation.cvc : "000"}</p>
        </div>
        <div>
          <img className="img1440" src="/images/Group 15.svg" />
        </div>
      </BackOfCard>
      <FrontOfCard>
        <img src="public/images/card-logo.svg" alt="card-logo" />
        <div>
          <h2>
            {!userInformation.cardNumber
              ? "0000 0000 0000 0000 "
              : userInformation.cardNumber}
          </h2>
          <div>
            <span>
              {userInformation.userName
                ? userInformation.userName
                : "JANE APPLESEED"}
            </span>
            <span>
              {userInformation.mm || userInformation.yy
                ? `${userInformation.mm} / ${userInformation.yy}`
                : "00/00"}
            </span>
          </div>
        </div>
      </FrontOfCard>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 37.5rem;
  height: 24rem;
  background-image: url(/images/bg-main-mobile.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  @media screen and (min-width: 1440px) {
    width: 48.3rem;
    height: 90rem;
  }
`;
const BackOfCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  width: 28.6rem;
  height: 15.7rem;
  border-radius: 0.6rem;
  background: linear-gradient(169deg, #fff 5%, #d2d3d9 91.69%);

  position: absolute;
  z-index: 1000;
  top: 3.5rem;
  left: 7rem;
  @media screen and (min-width: 1440px) {
    top: 42rem;
    left: 25rem;
    width: 44.7rem;
    height: 24.5rem;

    background-color: linear-gradient(169deg, #fff 5%, #d2d3d9 91.69%);
    background-position: bottom;
    background-repeat: no-repeat;
    position: relative;
    .img1440 {
      position: absolute;
      bottom: 4rem;
      left: 13rem;
    }
  }
  .blackRectangle {
    margin-top: 2rem;
    width: 28.6rem;
    height: 34.604px;
    background: #2f2f2f;
    @media screen and (min-width: 1440px) {
      width: 44.7rem;
      height: 5.4rem;
    }
  }
  .greyRectangle {
    width: 230.975px;
    height: 29.739px;
    background: #adb5be;
    border-radius: 0.7rem;
    @media screen and (min-width: 1440px) {
      width: 36.1rem;
      height: 3.8rem;
    }
    & > p {
      text-align: right;
      padding-right: 1rem;
      font-size: 9px;
      font-style: normal;
      font-weight: 500;
      letter-spacing: 1.286px;
      text-transform: uppercase;

      @media screen and (min-width: 1440px) {
        font-size: 1.4rem;
        letter-spacing: 0.2rem;
        padding-right: 1.5rem;
      }
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
  @media screen and (min-width: 1440px) {
    top: 13rem;
    left: 17rem;
    width: 44.7rem;
    height: 24.5rem;
  }

  & > img {
    width: 5.4rem;
    height: 3rem;
    margin-top: 2rem;
    margin-left: 1.3rem;
    @media screen and (min-width: 1440px) {
      width: 8.4rem;
      height: 4.7rem;

      margin-left: 4rem;
    }
  }
  & > div h2 {
    font-size: 1.8rem;
    font-weight: 500;
    padding-top: 1.5rem;
    padding-inline: 2rem;
    letter-spacing: 2.2px;

    @media screen and (min-width: 1440px) {
      font-size: 2.8rem;
      font-style: normal;
      padding-inline: 4.5rem;
      letter-spacing: 3.422px;
    }
  }
  & > div div {
    display: flex;
    justify-content: space-between;
    padding-inline: 2rem;
    @media screen and (min-width: 1440px) {
      padding-inline: 5rem;
      padding-top: 2rem;
    }
    span {
      font-size: 0.9rem;
      font-weight: 500;
      letter-spacing: 1.286px;
      text-transform: uppercase;
      @media screen and (min-width: 1440px) {
        font-size: 14px;

        letter-spacing: 2px;
      }
    }
  }
`;
