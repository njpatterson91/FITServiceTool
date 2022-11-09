import { Typography } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import { imageToolTip, imageLocation } from "../store/atoms";
import { useSetRecoilState } from "recoil";

export default function TypographyWithTT(props) {
  const setOpen = useSetRecoilState(imageToolTip);
  const setImage = useSetRecoilState(imageLocation);

  return (
    <div
      style={{
        backgroundColor: props.script.backgroundColor,
      }}
    >
      <Typography margin padding>
        {props.script.text}
      </Typography>
    </div>
  );
}
