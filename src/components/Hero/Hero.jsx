import icon from '../../images/svg-sprite.svg';
import { Box, Button, Icon, Text, Title } from './Hero.styled';

export default function Hero() {
    return (
        <Box>
        <Title>The Sky Is The Limit</Title>
        <Text>We provide world class financial assistance</Text>
        <Button variant={"accent"}><Icon width="9px" height="18px">
            <use href=
            {`${icon}#icon-fa-solid_angle-right`}
            
            ></use></Icon> Read More</Button>
        </Box>
    ) 
}