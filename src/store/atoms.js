import { atom } from "recoil";

export const customerInfo = atom({
  key: "customerInfo",
  default: {
    name: "",
    bookingNumber: "",
    bookingType: "",
    notes: "",
  },
});

export const toolBarColor = atom({
  key: "toolBarColor",
  default: "red",
});

export const verified = atom({
  key: "verified",
  default: false,
});

export const stage = atom({
  key: "stage",
  default: 0,
});

export const infoCards = atom({
  key: "infoCards",
  default: [["leTest,leTest2,leTest3"]],
});

export const chatPF = atom({
  key: "chatPF",
  default: false,
});

export const imageToolTip = atom({
  key: "imageToolTip",
  default: false,
});

export const imageLocation = atom({
  key: "imageLocation",
  default: "",
});

export const shipCode = atom({
  key: "shipCode",
  default: "",
});

export const cabinNumber = atom({
  key: "cabinNumber",
  default: "",
});
