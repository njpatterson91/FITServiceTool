import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { Button } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { db } from "../db";
import { useLiveQuery } from "dexie-react-hooks";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ContactTable() {
  const data = useLiveQuery(() => db.bookings.toArray());
  const deleteSavedNote = async (index) => {
    await db.bookings.delete(index);
  };
  if (!data) return null;
  return (
    <TableContainer component={Paper}>
      <Table aria-label="previous contacts">
        <TableHead>
          <TableRow>
            <TableCell align="left">Booking Number</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Type</TableCell>
            <TableCell align="left">Notes</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, idx) => (
            <TableRow
              key={idx}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.bookingNumber}
              </TableCell>
              <TableCell align="left">{row.contactName}</TableCell>
              <TableCell align="left">{row.bookingType}</TableCell>
              <TableCell align="left">{row.notes}</TableCell>
              <TableCell align="right">
                <Button
                  onClick={() => {
                    deleteSavedNote(row.id);
                  }}
                >
                  <DeleteIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
