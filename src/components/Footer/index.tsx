import { ContentLinks, ExternalLink, QuoteCite, WrapperFooter } from './styles'

export function Footer() {
  return (
    <WrapperFooter>
      <ContentLinks>
        <ExternalLink href="/">Cookies</ExternalLink>
        <ExternalLink href="/">Condições de Uso</ExternalLink>
        <ExternalLink href="/">Aviso de Privacidade</ExternalLink>
      </ContentLinks>
      <QuoteCite>
        &copy; 1996-2022, Amazon.com, Inc. ou suas afiliadas
      </QuoteCite>
    </WrapperFooter>
  )
}
