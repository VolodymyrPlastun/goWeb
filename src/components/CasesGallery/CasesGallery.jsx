import {
  table,
  laptop,
  notebook,
  buildings,
  shakingHands,
  handsAboveTable,
  tableWebp,
  tableWebpx2,
  table2x,
  notebookWebp,
  notebookWebpx2,
  notebook2x,
  shakingHandsWebp,
  shakingHandsWebpx2,
  shakingHands2x,
  handsAboveTableWebp,
  handsAboveTableWebpx2,
  handsAboveTable2x,
  laptopWebp,
  laptopWebpx2,
  laptop2x,
  buildingsWebp,
  buildingsWebpx2,
  buildings2x,
} from "../../images";
import { Box, Img, Item, List } from "./CasesGallery.styled";
import { LightgalleryItem } from "react-lightgallery";

export default function CasesGallery() {
  return (
    <Box>
      <List>
        <Item>
          <LightgalleryItem group="any" src={table}>
            <Img
              src={table}
              alt="people at the table"
              srcSet={`${tableWebp} 1x, ${tableWebpx2} 2x, type="image/webp",
       ${table} 1x, ${table2x} 2x, type="image/jpeg"`}
            />
          </LightgalleryItem>
        </Item>

        <Item>
          <LightgalleryItem group="any" src={notebook}>
            <img
              src={notebook}
              alt="people at the table"
              srcSet={`${notebookWebp} 1x, ${notebookWebpx2} 2x, type="image/webp",
       ${notebook} 1x, ${notebook2x} 2x, type="image/jpeg"`}
            />
          </LightgalleryItem>
        </Item>

        <Item>
          <LightgalleryItem group="any" src={shakingHands}>
            <img
              src={shakingHands}
              alt="people at the table"
              srcSet={`${shakingHandsWebp} 1x, ${shakingHandsWebpx2} 2x, type="image/webp",
       ${shakingHands} 1x, ${shakingHands2x} 2x, type="image/jpeg"`}
            />
          </LightgalleryItem>
        </Item>

        <Item>
          <LightgalleryItem group="any" src={handsAboveTable}>
            <img
              src={handsAboveTable}
              alt="people at the table"
              srcSet={`${handsAboveTableWebp} 1x, ${handsAboveTableWebpx2} 2x, type="image/webp",
       ${handsAboveTable} 1x, ${handsAboveTable2x} 2x, type="image/jpeg"`}
            />
          </LightgalleryItem>
        </Item>

        <Item>
          <LightgalleryItem group="any" src={laptop}>
            <img
              src={laptop}
              alt="people at the table"
              srcSet={`${laptopWebp} 1x, ${laptopWebpx2} 2x, type="image/webp",
       ${laptop} 1x, ${laptop2x} 2x, type="image/jpeg"`}
            />
          </LightgalleryItem>
        </Item>

        <Item>
          <LightgalleryItem group="any" src={buildings}>
            <img
              src={buildings}
              alt="people at the table"
              srcSet={`${buildingsWebp} 1x, ${buildingsWebpx2} 2x, type="image/webp",
       ${buildings} 1x, ${buildings2x} 2x, type="image/jpeg"`}
            />
          </LightgalleryItem>
        </Item>
      </List>
    </Box>
  );
}
