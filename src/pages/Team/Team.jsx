import TeamGallery from "../../components/TeamGallery";
import TeamText from "../../components/TeamText";
import { Box } from "./Team.styled";

export default function Team() {
  return (
    <Box>
      <TeamText />
      <TeamGallery />
    </Box>
  );
}
