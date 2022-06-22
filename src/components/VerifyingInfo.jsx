import { Paper, Typography } from "@mui/material";

export default function VerifyingInfo() {
  return (
    <Paper style={{ margin: "5%" }}>
      <Typography margin>Verifying/Adding any missing guest info</Typography>
      <Typography margin>
        **Once you have appropriately qualified the booking, please move
        immediately to the guest info tab to confirmm there is info regarding
        the guest's email addres and phone number. Only one set of info is
        required per booking per call.
      </Typography>
      <Typography margin>
        If there is not vaccination status on Guest Info Tab say: and to
        confirm, all guests are fully vaccinated?
      </Typography>
      <Typography margin>
        Then enter comment: "Vaxed" if vaccinated next to pax code section.
      </Typography>
    </Paper>
  );
}
