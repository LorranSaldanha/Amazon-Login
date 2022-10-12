import styled from 'styled-components'

export const WrapperHeader = styled.header`
  background: rgb(35, 47, 62);
  width: 100%;
  height: 16vh;
  -webkit-border-radius: 0px 0px 100% 100%;
  -moz-border-radius: 0px 0px 100% 100%;
  border-radius: 0px 0px 100% 100%;
  border-bottom: solid 0.3rem #ff9900;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`
export const WrapperLogo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LogoFloating = styled.img`
  width: 100%;
  max-width: 35%;
  animation: myAnim 2s ease 0s 1 normal forwards;
  @keyframes myAnim {
    0% {
      animation-timing-function: ease-in;
      opacity: 1;
      transform: translateY(-400px);
    }
    24% {
      opacity: 1;
    }
    40% {
      animation-timing-function: ease-in;
      transform: translateY(-24px);
    }
    65% {
      animation-timing-function: ease-in;
      transform: translateY(-12px);
    }
    82% {
      animation-timing-function: ease-in;
      transform: translateY(-6px);
    }
    93% {
      animation-timing-function: ease-in;
      transform: translateY(-4px);
    }
    25%,
    55%,
    75%,
    87% {
      animation-timing-function: ease-out;
      transform: translateY(0px);
    }
    100% {
      animation-timing-function: ease-out;
      opacity: 1;
      transform: translateY(0px);
    }
  }
`
