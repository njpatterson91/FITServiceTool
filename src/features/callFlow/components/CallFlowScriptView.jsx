import { Paper } from "@mui/material";
import TypographyWithTT from "../../../components/TypographyWithTT";

export default function CallFlowScriptView({ script }) {
  return (
    <Paper
      style={{
        margin: "2%",
        padding: "0px",
      }}
      elevation={10}
    >
      {script.map((item, idx) => (
        <TypographyWithTT script={item} key={idx} />
      ))}
    </Paper>
  );
}
