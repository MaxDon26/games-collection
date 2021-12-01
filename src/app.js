import { CrossZeroGame } from './games/cross-zero'
import { HomePage } from './home-page'
import './styles.css'
import { Gallows } from "./games/gallows";
import "./css/Gallows.css";

const home = new HomePage()
const crossZero = new CrossZeroGame('cross-zero', 'Крестики-нолики')
const gallows = new Gallows('gallows', "Виселица");

home.add(crossZero)
home.add(gallows)
home.menu()
home.render()
