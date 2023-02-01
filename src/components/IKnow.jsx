import { iKnowStatus } from "../store/atoms";
import { useRecoilState } from "recoil";
import { useState } from "react";
import { TextField, Modal, Box, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { Button } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import data from "../features/tools/iKnowArr";
import iKnowData from "../json/iKnow.json";
import Fuse from "fuse.js";

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

export default function IKnow() {
  const options = {
    includeScore: true,
  };
  const [value, setValue] = useState();
  const [result, setResult] = useState([]);
  const fuse = new Fuse(data, options);
  const [open, setOpen] = useRecoilState(iKnowStatus);
  const handleClose = () => setOpen(false);
  const onChangeHandler = (e) => {
    setValue(e.target.value);
    console.log(value);
    setResult(fuse.search(value));
  };

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} margin>
          <Typography color={"white"}>Search For iKnow ID</Typography>
          <TextField
            type="text"
            name="bookingNumber"
            label="Search..."
            onChange={onChangeHandler}
            value={value}
            style={{ margin: "10px" }}
          />
          <Box>
            <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
              <Table aria-label="previous contacts">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Article Name</TableCell>
                    <TableCell align="left">ID</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {result.map((row, idx) => (
                    <TableRow
                      key={idx}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.item}
                      </TableCell>
                      <TableCell
                        align="left"
                        onClick={() => {
                          navigator.clipboard.writeText(
                            `https://ccl.custhelp.com/app/answers/detail/a_id/${
                              iKnowData[row.item]
                            }`
                          );
                        }}
                      >
                        {iKnowData[row.item]}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
