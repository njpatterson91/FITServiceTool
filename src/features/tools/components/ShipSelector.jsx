import { useRecoilState } from "recoil";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { shipCode } from "../../../store/atoms";
const ships = require("../../../json/ships.json");

export default function ShipSelector() {
  const [ship, setShip] = useRecoilState(shipCode);

  const handleChange = (event) => {
    setShip(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 130 }} size="small">
      <InputLabel id="ship-select-label">Select Ship</InputLabel>
      <Select
        labelId="ship-select-label"
        id="ship-select"
        value={ship}
        label="Select-Ship"
        onChange={handleChange}
      >
        {ships.ships.map((ship) => (
          <MenuItem value={ship} key={ship}>
            {ship.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
