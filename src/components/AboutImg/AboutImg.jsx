import { Img, ImgBox } from "./AboutImg.styled";
import { people, people2x, peopleWebp, peopleWebp2x } from "../../images";

export default function AboutImg() {
  return (
    <ImgBox>
      <Img
        src={people}
        alt="People"
        srcSet={`${peopleWebp} 1x, ${peopleWebp2x} 2x, type="image/webp",
        ${people} 1x, ${people2x} 2x, type="image/jpeg"`}
      />
    </ImgBox>
  );
}
