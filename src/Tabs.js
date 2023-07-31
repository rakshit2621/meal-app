import React, { useState } from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import KebabDiningIcon from "@mui/icons-material/KebabDining";
import EggIcon from "@mui/icons-material/Egg";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import Nonveg from "./Nonveg";
import Egg from "./Egg";
import Veg from "./Veg";

function Tabs() {
  const [value, setValue] = useState("non-veg");
  const handlechange = (e, newValue) => {
    return setValue(newValue);
  };

  return (
    <>
      <Box>
        <TabContext value={value}>
          <Box sx={{ borderBottom: "1", borderColor: "divider" }}>
            <TabList
              aria-label="Tabs"
              onChange={handlechange}
              sx={{ marginTop: "20px" }}
              centered
            >
              <Tab
                value="non-veg"
                label="Non-Vegetarian  &nbsp;"
                icon={<KebabDiningIcon />}
                iconPosition="start"
                sx={{
                  fontWeight: "600",
                  background: "white",
                  borderRadius: 28,
                  color: "#c90001",
                  fontSize: "1rem",
                  borderTop: "1px solid #c90001",
                }}
              />
              <Tab
                value="egg"
                label=" Eggetarian   &nbsp;"
                icon={<EggIcon />}
                iconPosition="start"
                sx={{
                  fontWeight: "600",
                  background: "white",
                  borderRadius: 28,
                  color: "#f79216",
                  fontSize: "1rem",
                  borderTop: "1px solid #f79216",
                }}
              />
              <Tab
                value="veg"
                label="Vegetarian   &nbsp;"
                icon={<EnergySavingsLeafIcon />}
                iconPosition="start"
                sx={{
                  fontWeight: "600",
                  background: "white",
                  borderRadius: 28,
                  color: "#009500",
                  fontSize: "1rem",
                  borderTop: "1px solid #009500",
                }}
              />
            </TabList>
            <TabPanel value="non-veg">
              <Nonveg />
            </TabPanel>
            <TabPanel value="egg">
              <Egg />
            </TabPanel>
            <TabPanel value="veg">
              <Veg />
            </TabPanel>
          </Box>
        </TabContext>
      </Box>
    </>
  );
}

export default Tabs;
