import { HomePage } from "./home-page";
import { Gallows } from "./module/gallows";
import "./styles.css";
import "./css/Gallows.css";

const home = new HomePage();
const gallows = new Gallows("gallows", "Виселица");

// home.add(gallows);
gallows.render();
home.menu();
home.render();
