import {
  john,
  johnWebp,
  john2x,
  johnWebp2x,
  jane,
  jane2x,
  janeWebp,
  janeWebp2x,
  steve,
  steve2x,
  steveWebp,
  steveWebp2x,
} from "../../images";
import {
  Box,
  Icon,
  Img,
  Item,
  List,
  Overlay,
  OverlayItem,
  OverlayList,
  Text,
  Title,
} from "./TeamGallery.styled";
import icon from "../../images/svg-sprite.svg";

export default function TeamGallery() {
  return (
    <Box>
      <List>
        <Item>
          <Overlay>
            <Img
              src={john}
              alt="john"
              srcSet={`${johnWebp} 1x, ${johnWebp2x} 2x, type="image/webp",
                ${john} 1x, ${john2x} 2x, type="image/jpeg"`}
            />
            <OverlayList>
              <OverlayItem>
                <Icon width="35px" height="35px">
                  <use href={`${icon}#icon-facebook`}></use>
                </Icon>
              </OverlayItem>
              <OverlayItem>
                <Icon width="35px" height="35px">
                  <use href={`${icon}#icon-twitter`}></use>
                </Icon>
              </OverlayItem>
              <OverlayItem>
                <Icon width="40px" height="35px">
                  <use href={`${icon}#icon-youtube`}></use>
                </Icon>
              </OverlayItem>
              <OverlayItem>
                <Icon width="31px" height="35px">
                  <use href={`${icon}#icon-linkedIn`}></use>
                </Icon>
              </OverlayItem>
            </OverlayList>
          </Overlay>

          <Title>John Doe</Title>
          <Text>President</Text>
        </Item>
        <Item>
          <Overlay>
            <Img
              src={jane}
              alt="jane"
              srcSet={`${janeWebp} 1x, ${janeWebp2x} 2x, type="image/webp",
                ${jane} 1x, ${jane2x} 2x, type="image/jpeg"`}
            />
            <OverlayList>
              <OverlayItem>
                <Icon width="35px" height="35px">
                  <use href={`${icon}#icon-facebook`}></use>
                </Icon>
              </OverlayItem>
              <OverlayItem>
                <Icon width="35px" height="35px">
                  <use href={`${icon}#icon-twitter`}></use>
                </Icon>
              </OverlayItem>
              <OverlayItem>
                <Icon width="40px" height="35px">
                  <use href={`${icon}#icon-youtube`}></use>
                </Icon>
              </OverlayItem>
              <OverlayItem>
                <Icon width="31px" height="35px">
                  <use href={`${icon}#icon-linkedIn`}></use>
                </Icon>
              </OverlayItem>
            </OverlayList>
          </Overlay>

          <Title>Jane Doe</Title>
          <Text>Vice President</Text>
        </Item>
        <Item>
          <Overlay>
            <Img
              src={steve}
              alt="steve"
              srcSet={`${steveWebp} 1x, ${steveWebp2x} 2x, type="image/webp",
                ${steve} 1x, ${steve2x} 2x, type="image/jpeg"`}
            />
            <OverlayList>
              <OverlayItem>
                <Icon width="35px" height="35px">
                  <use href={`${icon}#icon-facebook`}></use>
                </Icon>
              </OverlayItem>
              <OverlayItem>
                <Icon width="35px" height="35px">
                  <use href={`${icon}#icon-twitter`}></use>
                </Icon>
              </OverlayItem>
              <OverlayItem>
                <Icon width="40px" height="35px">
                  <use href={`${icon}#icon-youtube`}></use>
                </Icon>
              </OverlayItem>
              <OverlayItem>
                <Icon width="31px" height="35px">
                  <use href={`${icon}#icon-linkedIn`}></use>
                </Icon>
              </OverlayItem>
            </OverlayList>
          </Overlay>

          <Title>Steve Smith</Title>
          <Text>Marketing Head</Text>
        </Item>
      </List>
    </Box>
  );
}
