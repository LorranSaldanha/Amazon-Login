import styled from 'styled-components'

export const WrapperFooter = styled.footer`
  width: 100%;
  min-height: 30vh;
  padding: 1rem;
  background: rgb(13, 20, 30);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`
export const ContentLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 2rem;
  padding-top: 1.25rem;
`
export const ExternalLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 500;
  font-style: normal;
  flex-wrap: wrap;
  text-align: center;
  &:visited {
    color: #fff;
  }
`
export const QuoteCite = styled.p`
  color: #fff;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 500;
  font-style: normal;
`
