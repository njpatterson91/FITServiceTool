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

export default function ContactTable() {
  const data = useLiveQuery(() => db.bookings.toArray());
  const del = async (index) => {
    await db.bookings.delete(index);
  };
  if (!data) return null;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Booking Number</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Type</TableCell>
            <TableCell align="left">Notes</TableCell>
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
              <Button
                variant="outlined"
                color="error"
                onClick={() => {
                  del(row.id);
                }}
              >
                Delete
              </Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
