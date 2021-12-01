import { CrossZeroGame } from './games/cross-zero'
import { HomePage } from './home-page'
import './styles.css'

const home = new HomePage()
const crossZero = new CrossZeroGame('cross-zero', 'Крестики-нолики')

home.add(crossZero)
home.menu()
home.render()
