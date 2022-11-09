import { TextField, Typography, Button, Grid } from "@mui/material";
import { useState } from "react";

import categories from "../../json/cabinCategories.json";

export default function CabinCategories() {
  const [findCategory, setFindCategory] = useState("");
  const [category, setCategory] = useState("");

  const onChangeLocalHandler = (e) => {
    setFindCategory(e.target.value);
  };

  return (
    <>
      <Grid container>
        <Grid>
          <TextField
            type="text"
            name="catgory"
            label="Search Category"
            onChange={onChangeLocalHandler}
            value={findCategory}
            style={{ margin: "10px" }}
            size={"small"}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setCategory(categories[findCategory.toUpperCase()]);
              }
            }}
          />
        </Grid>
        <Grid alignItems="stretch" style={{ display: "flex" }}>
          <Button
            onClick={() => {
              setCategory(categories[findCategory.toUpperCase()]);
            }}
          >
            Search
          </Button>
        </Grid>
      </Grid>

      <Typography>{category}</Typography>
    </>
  );
}
