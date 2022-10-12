import { BlockPassword, WatchPassword } from '../NewAccount/styles'
import {
  BlockTerms,
  ButtonAcess,
  ContentFields,
  CreateAccount,
  InputField,
  TextFloating,
  Typography,
  WrapperMain,
  WrapperTerms,
  WrapperText
} from './styles'
import { BsFillEyeSlashFill } from 'react-icons/bs'

export function Main() {
  return (
    <WrapperMain>
      <Typography>fazer login</Typography>
      <ContentFields>
        <InputField type="e-mail" placeholder="E-mail o u número de telefone" />
        <BlockPassword>
          <InputField type="password" placeholder="Senha Amazon" />
          <WatchPassword>
            <BsFillEyeSlashFill />
          </WatchPassword>
        </BlockPassword>
        <ButtonAcess to="register">continuar</ButtonAcess>
      </ContentFields>
      <WrapperTerms>
        <BlockTerms>
          Ao continuar, você concorda com as <span>Condições de Uso</span> da
          Amazon. Por favor verifique a <span>Notificação de Privacidade </span>
          , <span>Notificação de Cookies</span> e a
          <span> Notificação de Anúncios Baseados em Interesse.</span>
          <WrapperText>
            <TextFloating>Novo na Amazon?</TextFloating>
          </WrapperText>
          <CreateAccount>Criar sua conta da Amazon</CreateAccount>
        </BlockTerms>
      </WrapperTerms>
    </WrapperMain>
  )
}
