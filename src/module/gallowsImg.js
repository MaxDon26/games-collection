import png1 from "../assets/gallows/1.png";
import png2 from "../assets/gallows/2.png";
import png3 from "../assets/gallows/3.png";
import png4 from "../assets/gallows/4.png";
import png5 from "../assets/gallows/5.png";
import png6 from "../assets/gallows/6.png";
import png7 from "../assets/gallows/7.png";

export default function getImage(count) {
  const img = [png1, png2, png3, png4, png5, png6, png7];
  return img[count];
}
