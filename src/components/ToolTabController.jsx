import * as React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box} from "@mui/material"
import Notes from "./Notes";
import Links from "./Links";
import CabinCategories from "../features/tools/CabinCategories";
import ShipSelector from "../features/tools/components/ShipSelector";
import ShipLinks from "../features/tools/components/ShipLinks";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function ToolTabController() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Notes" />
          <Tab label="Links" />
          <Tab label="Tools" />
          <ShipSelector />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Notes />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Links />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ShipLinks />
        <CabinCategories />
      </TabPanel>
    </Box>
  );
}
