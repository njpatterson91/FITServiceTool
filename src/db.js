import Dexie from "dexie";

export const db = new Dexie("contacts");
db.version(1).stores({
  bookings: "++id, bookingNumber, contactName, bookingType, notes",
});
