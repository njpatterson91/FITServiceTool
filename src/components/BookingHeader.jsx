import {
  TextField,
  Container,
  Grid,
  Typography,
  MenuItem,
  FormControl,
  Button,
} from "@mui/material";
import { customerInfo, stage } from "../store/atoms";
import { useRecoilState } from "recoil";

function BookingHeader() {
  const [customer, setCustomer] = useRecoilState(customerInfo);
  const [step, setStep] = useRecoilState(stage);
  const onChangeHandler = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
    console.log(customer);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(customer);
  };
  return (
    <>
      <Container>
        <Typography variant="h3" component="h1" margin={1} align="center">
          Enter Booking Info
        </Typography>
        <Grid container spacing={2} align="Center">
          <Grid item xs={6}>
            <Button
              onClick={() => {
                setStep(step - 1);
              }}
            >
              Previous Step
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              onClick={() => {
                setStep(step + 1);
              }}
            >
              Next Step
            </Button>
          </Grid>
        </Grid>

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
                <MenuItem value={"DG"}>Direct Guest</MenuItem>
                <MenuItem value={"TA"}>Travel Advisor</MenuItem>
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
