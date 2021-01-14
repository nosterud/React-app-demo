import React, {useState} from 'react';
import 'eds-card';
import 'eds-button';
import 'eds-icon';
import Pros from './designsystem/Pros';
import UseCase from './designsystem/UseCase';
import Challenges from './designsystem/Challenges';
import Introduction from './designsystem/Introduction';
import HowTo from './designsystem/HowTo';
import styled, {keyframes} from 'styled-components';

const slideOut = keyframes`
  0% {left: -999px;}
  90% {left: 0px;}
  100% {opacity: 1;}
`;

const SlideInWrapper = styled.div`
  animation-duration: 1s;
  animation-name: ${props => (props.active ? slideOut : "")};
  animation-fill-mode: forwards;  
  position: relative;
  transition: ${slideOut} 1s linear;
`;

const Wrapper = styled.div`
    padding: 28px;
`;

const ButtonWrapper = styled.div`
    padding: 28px;
    display: flex;
    justify-content: space-between;
    width: 40%;
`;

const DesignSystem = () => {

  const [comp, setComp] = useState('introduction');
  const [active, setActive] = useState(false);


  const changeSlide = (e) => {
    const {id} = e.target;
    setComp('introduction')
    if(id === 'pros') {
      setComp('pros')
      setActive(true)
    } else if (id === 'challenges') {
      setComp('challenges')
      setActive(true)
    } else if (id === 'how-to'){
      setComp('how-to');
      setActive(true)
    } else if (id === 'use-case'){
      setComp('use-case');
      setActive(true)
    }
  }

  return (
    <Wrapper>
        <h1>Hvordan gjøre seg beredt på fremtiden?</h1>
        {comp === "introduction" && <SlideInWrapper active={active}><Introduction /></SlideInWrapper>}
        {comp === "pros" && <SlideInWrapper active={active}><Pros /></SlideInWrapper>}
        {comp === "challenges" && <SlideInWrapper active={active}><Challenges /></SlideInWrapper>}
        {comp === "how-to" && <SlideInWrapper active={active}><HowTo /></SlideInWrapper>}
        {comp === "use-case" && <SlideInWrapper active={active}><UseCase /></SlideInWrapper>}
      <ButtonWrapper>
        <eds-button variant="outlined" id="introduction" onClick={(e) => changeSlide(e)}>
          Introduction
        </eds-button>
        <eds-button variant="outlined" id="pros" onClick={(e) => changeSlide(e)}>
          Pros
        </eds-button>
        <eds-button variant="outlined" id="challenges" onClick={(e) => changeSlide(e)}>
              Challenges
        </eds-button>
        <eds-button variant="outlined" id="how-to" onClick={(e) => changeSlide(e)}>
          How to
        </eds-button>
        <eds-button variant="outlined" id="use-case" onClick={(e) => changeSlide(e)}>
          Use Case
        </eds-button>
      </ButtonWrapper>
    </Wrapper>
  )
};

export default DesignSystem;