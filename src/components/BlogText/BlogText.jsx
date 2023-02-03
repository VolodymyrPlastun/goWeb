import { Box, SecTitle, Title, Text, Button } from "./BlogText.styled";

export default function BlogText() {
  return (
      <Box>
        <SecTitle>April 16 2020</SecTitle>
        <Title>Blog Post One</Title>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </Text>
        <Button variant={"transparent"}>Read Our Blog</Button>
      </Box>
  );
}
