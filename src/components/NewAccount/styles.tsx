import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const WrapperMain = styled.main`
  width: 100%;
  min-height: auto;
  padding: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  animation: go-back 1s;
  @keyframes go-back {
    0% {
      transform: translateX(600px);
    }
    100% {
      transform: translateX(0);
    }
  }
`
export const Typography = styled.h1`
  width: 100%;
  color: #212121;
  text-transform: capitalize;
  text-align: center;
  font-size: 2.5rem;
  letter-spacing: 0.03rem;
  font-weight: 600;
  font-style: normal;
`
export const ContentFields = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.35rem;
  /* position: relative; */
`
export const InputField = styled.input`
  width: 100%;
  padding: 1.35rem;
  border-radius: 0.7rem;
  background-color: #fff;
  border: solid 0.02rem #e9e8e8;
  box-shadow: 0px 10px 15px -3px rgba(51, 51, 51, 0.1);
  text-align: left;
  color: #212121;
  caret-color: #212121;
  outline: none;
  font-size: 1.4rem;
  font-weight: 500;
  font-style: normal;
  &::placeholder {
    color: #546e7a;
    font-size: 1.4rem;
    opacity: 0.8;
  }
  /* &:nth-child(3) {
    position: relative;
  } */
`
export const BlockPassword = styled.div`
  width: 100%;
  position: relative;
`
export const WatchPassword = styled.div`
  position: absolute;
  top: 25%;
  right: 1.25rem;
  z-index: 10;
  background: #fff;
  padding-left: 1.25rem;
  font-size: 2rem;
`
export const ButtonAcess = styled(Link)`
  width: 100%;
  display: block;
  background-color: #ff9900;
  border-radius: 0.9rem;
  border: solid 0.02rem #e9e8e8;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  padding: 1.25rem;
  color: #fff;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1.6rem;
  letter-spacing: 0.04rem;
  transition: ease all 0.3s;
  text-decoration: none;
  text-align: center;
  &:hover {
    background-color: #ff9900b0;
    transition: ease all 0.3s;
    transform: scale(0.98);
  }
`
export const ContentCheck = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 1rem;
  padding: 1rem;
`
export const FloatingText = styled.p`
  font-size: 1.4rem;
  color: #212121;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0.03rem;
  /* text-align: left; */
`
export const FloatingIcon = styled.div`
  font-size: 2rem;
  color: #ff9900;
`
export const WrapperTerms = styled.div`
  width: 100%;
  display: block;
`
export const BlockTerms = styled.p`
  color: #212121;
  font-size: 1.4rem;
  font-weight: 500;
  font-style: normal;
  text-align: left;
  span {
    color: blue;
  }
`
