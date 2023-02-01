import { TextField, Button, Paper, Stack } from "@mui/material";
import SaveBookings from "./SaveBooking";
import { useSetRecoilState, useRecoilState } from "recoil";
import { customerInfo, chatPF } from "../store/atoms";

export default function Notes() {
  const [customer, setCustomer] = useRecoilState(customerInfo);
  const setPF = useSetRecoilState(chatPF);
  const onChangeHandler = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };
  return (
    <Paper style={{ padding: 8, overflow: "auto" }} elevation={5}>
      <Stack direction="row" sx={{ flexWrap: "wrap" }}>
        <TextField
          id="outlined-multiline-static"
          label="Notes"
          name="notes"
          multiline
          overflow
          rows={7}
          onChange={onChangeHandler}
          value={customer["notes"]}
          fullWidth
        />
        <SaveBookings />
        <Button onClick={() => setPF(true)}>Contact Chat PF</Button>
      </Stack>
    </Paper>
  );
}
