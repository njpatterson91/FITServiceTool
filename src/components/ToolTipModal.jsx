import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { imageToolTip, imageLocation } from "../store/atoms";
import { useRecoilState, useRecoilValue } from "recoil";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  width: "90%",
};

export default function BasicModal() {
  const [open, setOpen] = useRecoilState(imageToolTip);
  const image = useRecoilValue(imageLocation);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {image && (
          <Box sx={style}>
            <img
              src={require("../tooltipAssets/" + image)}
              alt="tooltop"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        )}
      </Modal>
    </div>
  );
}
