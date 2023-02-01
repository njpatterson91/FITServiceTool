import { Typography, Box } from "@mui/material";

export default function TypographyWithTT(props) {
  const { script } = props
  return (
    <Box
      style={{
        backgroundColor: script.backgroundColor,
      }}
    >
      <Typography margin padding>
        {script.text}
      </Typography>
    </Box>
  );
}
