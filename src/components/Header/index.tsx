import { LogoFloating, WrapperHeader, WrapperLogo } from './styles'
import Amazon from '..//..//assets/amazon.png'

export function Header() {
  return (
    <WrapperHeader>
      <WrapperLogo>
        <LogoFloating src={Amazon} />
      </WrapperLogo>
    </WrapperHeader>
  )
}
