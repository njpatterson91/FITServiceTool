import { Button } from "@mui/material";
import { customerInfo } from "../store/atoms";
import { useRecoilState } from "recoil";
import { db } from "../db";
import { useLiveQuery } from "dexie-react-hooks";

export default function SaveBookings() {
  const [customer, setCustomer] = useRecoilState(customerInfo);

  const data = useLiveQuery(() => db.bookings.toArray());
  console.log(data);

  async function addNote() {
    try {
      const id = await db.bookings.add({
        bookingNumber: customer.bookingNumber,
        contactName: customer.name,
        bookingType: customer.bookingType,
        notes: customer.notes,
      });
      console.log(id);
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
