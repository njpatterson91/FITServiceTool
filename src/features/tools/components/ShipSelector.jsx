import { useRecoilState } from "recoil";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { shipCode } from "../../../store/atoms";
import ships from "../../../json/ships.json";

export default function ShipSelector() {
  const [ship, setShip] = useRecoilState(shipCode);

  const handleChange = (event) => {
    setShip(event.target.value);
  };

  const sortedShips = ships.ships.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );

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
        {sortedShips.map((ship, idx) => (
          <MenuItem value={ship} key={idx}>
            {ship.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
