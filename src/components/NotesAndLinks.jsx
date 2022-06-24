import { TextField, Button, Paper } from "@mui/material";
import SaveBookings from "./SaveBooking";
import { useRecoilState, useSetRecoilState } from "recoil";
import { customerInfo, chatPF } from "../store/atoms";

export default function NotesAndLinks() {
  const [customer, setCustomer] = useRecoilState(customerInfo);
  const setPF = useSetRecoilState(chatPF);
  const onChangeHandler = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
    console.log(customer);
  };
  return (
    <>
      <Paper elevation={5} style={{ padding: 8 }}>
        <Paper style={{ padding: 8 }}>
          <Button
            variant="p"
            component="p"
            align="center"
            onClick={() => {
              window.open("https://www.carnival.com");
            }}
          >
            Carnival
          </Button>
          <Button
            variant="p"
            component="p"
            align="center"
            onClick={() => {
              window.open("https://arise.okta.com/");
            }}
          >
            Arise
          </Button>
          <Button
            variant="p"
            component="p"
            align="center"
            onClick={() => {
              window.open(
                "https://docs.google.com/spreadsheets/d/1q5CFh0hfJx2GcwUwP9ByVOp-abzbz9LGoM2BBMACyiQ/edit#gid=661269468"
              );
            }}
          >
            Easy Breezy KB
          </Button>
          <Button
            variant="p"
            component="p"
            align="center"
            onClick={() => {
              window.open(
                "https://www.carnival.com/Legal/covid-19-legal-notices/covid-19-guest-protocols?icid=advisory_cruisehealth_040122"
              );
            }}
          >
            Have Fun. Be Safe.
          </Button>
        </Paper>
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
