import { Container, Icon, Span, Title } from "./NavHeader.styled";
import icons from "../../images/svg-sprite.svg";

export default function NavHeader() {
  return (
    <Container>
      <Icon width="39px" height="35px">
        <use href={`${icons}#icon-open-book`}></use>
      </Icon>
      <Title>
        <Span>Finance</Span>Ledger
      </Title>
    </Container>
  );
}
