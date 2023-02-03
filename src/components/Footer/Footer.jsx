import icon from "../../images/svg-sprite.svg";
import { Box, Icon, Item, List, Text } from "./Footer.styled";

export default function Footer() {
  return (
    <Box>
      <List>
        <Item>
          <Icon width="35px" height="35px">
            <use href={`${icon}#icon-facebook`}></use>
          </Icon>
        </Item>
        <Item>
          <Icon width="35px" height="35px">
            <use href={`${icon}#icon-twitter`}></use>
          </Icon>
        </Item>
        <Item>
          <Icon width="40px" height="35px">
            <use href={`${icon}#icon-youtube`}></use>
          </Icon>
        </Item>
        <Item>
          <Icon width="31px" height="35px">
            <use href={`${icon}#icon-linkedIn`}></use>
          </Icon>
        </Item>
      </List>
      <Text>Copyright © 2021 - FinanceLedger</Text>
    </Box>
  );
}
