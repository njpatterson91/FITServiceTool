import {
  TextField,
  Container,
  Grid,
  MenuItem,
  FormControl
} from "@mui/material";
import { customerInfo } from "../store/atoms";
import { useRecoilState } from "recoil";

function BookingHeader() {
  const [customer, setCustomer] = useRecoilState(customerInfo);
  const onChangeHandler = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Container>
        <FormControl fullWidth>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField
                type="text"
                name="name"
                label="Name"
                onChange={onChangeHandler}
                value={customer["name"]}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                type="text"
                name="bookingNumber"
                label="Booking Number"
                onChange={onChangeHandler}
                value={customer["bookingNumber"]}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                fullWidth
                select
                name="bookingType"
                label="Booking Type"
                onChange={onChangeHandler}
                value={customer["bookingType"]}
              >
                <MenuItem value={"DG"} key={"DG"}>
                  Direct Guest
                </MenuItem>
                <MenuItem value={"TA"} key={"TA"}>
                  Travel Advisor
                </MenuItem>
              </TextField>
            </Grid>
          </Grid>
        </FormControl>
        <Grid container spacing={2}></Grid>
      </Container>
    </>
  );
}

export default BookingHeader;
