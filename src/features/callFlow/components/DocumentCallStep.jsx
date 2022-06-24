import { Paper, Typography } from "@mui/material";

export default function DocumentCallStep() {
  return (
    <Paper style={{ margin: "5%" }}>
      <Typography margin>
        **Please remember that anything you said or actioned on a call should be
        documented in the booking history. The only exception is if the action
        is auto time stamped in the booking history**
      </Typography>
      <Typography margin>
        **Documenting should take place with guest still on the call and should
        be concise. We also do not want to advise the guest to hold during this
        time or place the guest on hold. A good trick is to continuosly document
        the booking, especially if you are advising of multiple items.**
      </Typography>
    </Paper>
  );
}
