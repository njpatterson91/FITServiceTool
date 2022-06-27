import { Typography } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import { imageToolTip, imageLocation } from "../store/atoms";
import { useSetRecoilState } from "recoil";

export default function TypographyWithTT(props) {
  const setOpen = useSetRecoilState(imageToolTip);
  const setImage = useSetRecoilState(imageLocation);

  if (props.script.tooltip) {
    return (
      <div
        style={{
          backgroundColor: props.script.backgroundColor,
          borderRadius: "5px",
        }}
      >
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
      </div>
    );
  } else {
    return (
      <div
        style={{
          backgroundColor: props.script.backgroundColor,
          borderRadius: "5px",
        }}
      >
        <Typography margin padding>
          {props.script.text}
        </Typography>
      </div>
    );
  }
}
