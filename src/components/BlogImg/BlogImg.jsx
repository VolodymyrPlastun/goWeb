import { blog, blog2x, blogWebp, blogWebp2x } from "../../images";
import { Img } from "./BlogImg.styled";

export default function BlogImg() {
  return (
    <div>
      <Img
        src={blog}
        alt="things on the table"
        srcSet={`${blogWebp} 1x, ${blogWebp2x} 2x, type="image/webp",
            ${blog} 1x, ${blog2x} 2x, type="image/jpeg"`}
      />
    </div>
  );
}
