import { chatPF, customerInfo } from "../store/atoms";
import { useRecoilState } from "recoil";
import { useState } from "react";
import { TextField, Modal, Typography, Button, Box } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ChatPF() {
  const [open, setOpen] = useRecoilState(chatPF);
  const [customer, setCustomer] = useRecoilState(customerInfo);
  const [remainingInfo, setRemainingInfo] = useState({
    fareCode: "",
    penalty: "",
    mappers: "",
    concern: "",
  });

  const handleClose = () => setOpen(false);
  const onChangeHandler = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
    console.log(customer);
  };
  const onChangeLocalHandler = (e) => {
    setRemainingInfo({ ...remainingInfo, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} margin>
          <TextField
            type="text"
            name="bookingNumber"
            label="Booking Number"
            onChange={onChangeHandler}
            value={customer["bookingNumber"]}
            style={{ margin: "10px" }}
          />
          <TextField
            type="text"
            name="fareCode"
            label="Fare Code"
            onChange={onChangeLocalHandler}
            value={remainingInfo["fareCode"]}
            style={{ margin: "10px" }}
          />
          <TextField
            type="text"
            name="penalty"
            label="Penalty Status"
            onChange={onChangeLocalHandler}
            value={remainingInfo["penalty"]}
            style={{ margin: "10px" }}
          />
          <TextField
            type="text"
            name="name"
            label="Name"
            onChange={onChangeHandler}
            value={customer["name"]}
            style={{ margin: "10px" }}
          />

          <TextField
            type="text"
            name="mappers"
            label="Mappers"
            onChange={onChangeLocalHandler}
            value={remainingInfo["mappers"]}
            style={{ margin: "10px" }}
          />
          <TextField
            type="text"
            name="concern"
            label="Concern"
            onChange={onChangeLocalHandler}
            value={remainingInfo["Concern"]}
            style={{ margin: "10px" }}
          />

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Copy to clipboard and give to chat pf.
          </Typography>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(
                "BKG: " +
                  customer.bookingNumber +
                  "FareCode: " +
                  remainingInfo.fareCode +
                  " Penalty Status: " +
                  remainingInfo.penalty +
                  " Who is on the phone: " +
                  customer.name +
                  " Mappers: " +
                  remainingInfo.mappers +
                  " Detailed Concern: " +
                  remainingInfo.concern
              );
              handleClose();
            }}
          >
            Copy to Clipboard
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
