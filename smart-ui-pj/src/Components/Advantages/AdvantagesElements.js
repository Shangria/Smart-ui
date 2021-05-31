import styled from 'styled-components';
import {variables} from "../../Variables";

export const AdvantagesContainer = styled.section`
  justify-content: center;
  display: flex;
`;

export const AdvantagesContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1310px;
  padding: 0 15px;
  width: 100%;
`;

export const AdvantagesTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  align-items: center;
  justify-content: center;
`;

export const AdvantagesTitle = styled.h3`
  font-size: 36px;
  font-weight: 600;
  padding-bottom: 10px;

  @media (max-width: ${variables.tabletMin}) {
    font-size: 32px;
  };
`;

export const AdvantagesText = styled.p`
  max-width: 550px;
  width: 100%;
`;

export const AdvantagesCardWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${variables.desktopMin}) {
    flex-wrap: wrap;
    justify-content: center;
  };
`;

export const AdvantagesCardBox = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #E3E3E3;
  border-radius: 8px;
  margin: 5px 5px;
  transition: .3s background;
  background: ${({hover}) => (hover ? `${variables.accentColor}` : `${variables.mainBg}`)};
  width: 30%;
  padding: 45px 0;

  @media (max-width: ${variables.desktopMin}) {
    width: 45%;
    padding-bottom: 12%;
  };
  @media (max-width: ${variables.mobileMax}) {
    width: 100%;
  };
`;

export const AdvantagesCardTextWrap = styled.div`
  text-align: center;
  padding: 0 20px;
`;

export const AdvantagesIconWrap = styled.div`
  height: 212px;
  width: 212px;
  background-color: ${({hover}) => (hover ? `${variables.mainBg}` : `${variables.accentColor}`)};
  border-radius: 25px;
  margin: 0 auto;
  margin-bottom: 20px;
  box-shadow: 0px 5px 30px rgba(0, 217, 166, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
`;

export const AdvantagesCadTitle = styled.h3`
  font-size: 22px;
  padding-bottom: 6px;
  text-align: center;
`;

export const AdvantagesCardText = styled.p`
  @media (max-width: ${variables.desktopMin}) {
    text-align: center;
  };
`;

export const ButtonWrap = styled.div`
  height: 100px;
  max-height: 100%;
  display: flex;
  justify-content: center;
`;

