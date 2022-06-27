import { Typography } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import { imageToolTip, imageLocation } from "../store/atoms";
import { useSetRecoilState } from "recoil";

export default function TypographyWithTT(props) {
  const setOpen = useSetRecoilState(imageToolTip);
  const setImage = useSetRecoilState(imageLocation);

  if (props.script.tooltip) {
    return (
      <>
        <Typography margin padding>
          {props.script.text + "  "}
          <HelpIcon
            fontSize="small"
            onClick={() => {
              setImage(props.script.tooltipSRC);
              setOpen(true);
            }}
          />
        </Typography>
      </>
    );
  } else {
    return (
      <Typography margin padding>
        {props.script.text}
      </Typography>
    );
  }
}
