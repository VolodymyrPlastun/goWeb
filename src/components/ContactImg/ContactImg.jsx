import { contact, contact2x, contactWebp, contactWebp2x } from "../../images";
import { Img } from "./ContactImg.styled";

export default function ContactImg() {
  return (
    <div>
      <Img
        src={contact}
        alt="men at the table"
        srcSet={`${contactWebp} 1x, ${contactWebp2x} 2x, type="image/webp",
             ${contact} 1x, ${contact2x} 2x, type="image/jpeg"`}
      />
    </div>
  );
}
