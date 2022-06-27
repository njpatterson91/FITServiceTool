import { Paper } from "@mui/material";
import TypographyWithTT from "../../../components/TypographyWithTT";

export default function CallFlowScriptView({ script }) {
  return (
    <Paper style={{ margin: "4%" }} elevation={10}>
      {script.map((item) => (
        <TypographyWithTT script={item} />
      ))}
    </Paper>
  );
}
