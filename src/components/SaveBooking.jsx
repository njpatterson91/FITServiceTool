import { Button } from "@mui/material";
import { customerInfo } from "../store/atoms";
import { useRecoilValue } from "recoil";
import { db } from "../db";

export default function SaveBookings() {
  const customer = useRecoilValue(customerInfo);

  async function addNote() {
    try {
      await db.bookings.add({
        bookingNumber: customer.bookingNumber,
        contactName: customer.name,
        bookingType: customer.bookingType,
        notes: customer.notes,
      });
    } catch (error) {
      console.log(error);
    }
  }

  //   if (!data) return null;

  return (
    <Button
      onClick={() => {
        addNote();
      }}
    >
      Save Notes
    </Button>
  );
}
