import NavLinks from "../NavLinks/NavLinks";
import NavHeader from "../NavHeader/NavHeader";
import { Header } from "./NavBar.styled";

export default function NavBar() {
  return (
    <Header>
      <NavHeader />
      <NavLinks />
    </Header>
  );
}
