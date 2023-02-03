import { Item, List, Links } from "./NavLinks.styled";

export default function NavLinks() {
  return (
    <nav>
      <List>
        <Item>
          <Links to="home">Home</Links>
        </Item>
        <Item>
          <Links to="about">About</Links>
        </Item>
        <Item>
          <Links to="cases">Cases</Links>
        </Item>
        <Item>
          <Links to="blog">Blog</Links>
        </Item>
        <Item>
          <Links to="team">Team</Links>
        </Item>
        <Item>
          <Links to="contact">Contact</Links>
        </Item>
      </List>
    </nav>
  );
}
