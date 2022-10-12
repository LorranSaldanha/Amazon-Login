import {
  BlockTerms,
  ButtonAcess,
  ContentCheck,
  ContentFields,
  FloatingIcon,
  FloatingText,
  InputField,
  Typography,
  WatchPassword,
  WrapperMain,
  WrapperTerms
} from './styles'
import { BsFillEyeSlashFill } from 'react-icons/bs'
import { RiErrorWarningLine } from 'react-icons/ri'

export function NewAccount() {
  return (
    <WrapperMain>
      <Typography>criar conta</Typography>
      <ContentFields>
        <InputField type="text" placeholder="Nome" />
        <InputField type="e-mail" placeholder="E-mail o u número de telefone" />
        <InputField type="password" placeholder="Crie uma senha" />
        <WatchPassword>
          <BsFillEyeSlashFill />
        </WatchPassword>
        <ContentCheck>
          <FloatingIcon>
            <RiErrorWarningLine />
          </FloatingIcon>
          <FloatingText>
            As senhas devem ter pelo menos 6 caracteres.
          </FloatingText>
        </ContentCheck>
        <ButtonAcess to="/">continuar</ButtonAcess>
      </ContentFields>
      <WrapperTerms>
        <BlockTerms>
          Ao criar uma conta, você concorda com as <span>Condições de Uso</span>{' '}
          da Amazon. Por favor verifique a
          <span>Notificação de Privacidade </span>,
          <span>Notificação de Cookies</span> e a
          <span> Notificação de Anúncios Baseados em Interesse.</span>
        </BlockTerms>
      </WrapperTerms>
    </WrapperMain>
  )
}
