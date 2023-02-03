import BlogImg from "../../components/BlogImg";
import BlogText from "../../components/BlogText/BlogText";
import { Box } from "./Blog.styled";

export default function Blog() {
  return (
    <Box>
      <BlogImg />
      <BlogText />
    </Box>
  );
}
