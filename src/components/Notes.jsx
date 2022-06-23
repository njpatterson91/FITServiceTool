import { TextField, Button, Paper } from "@mui/material";
import SaveBookings from "./SaveBooking";
import { useRecoilState } from "recoil";
import { customerInfo, chatPF } from "../store/atoms";

export default function Notes() {
  const [customer, setCustomer] = useRecoilState(customerInfo);
  const [pf, setPF] = useRecoilState(chatPF);
  const onChangeHandler = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
    console.log(customer);
  };
  return (
    <>
      <Paper elevation={5} style={{ padding: 8 }}>
        <Paper>
          <TextField
            id="outlined-multiline-static"
            label="Notes"
            name="notes"
            multiline
            rows={8}
            onChange={onChangeHandler}
            value={customer["notes"]}
            fullWidth
          />
        </Paper>
        <SaveBookings />
        <Button onClick={() => setPF(true)}>Contact Chat PF</Button>
      </Paper>
    </>
  );
}
