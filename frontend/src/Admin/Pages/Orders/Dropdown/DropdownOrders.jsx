import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IoIosArrowDown } from "react-icons/io";

export default function DropdownOrders({ UserOrderDetails, ProductOrders }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}>
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls='panel1bh-content'
          id='panel1bh-header'>
          <Typography sx={{ width: "100%", flexShrink: 0 }}>
            <p className='font-[500]'>User Order Details</p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{UserOrderDetails}</Typography>
        </AccordionDetails>
      </Accordion>
      {/* <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}>
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls='panel2bh-content'
          id='panel2bh-header'>
          <Typography sx={{ width: "100%", flexShrink: 0 }}>
            <p className='font-[500]'>Per Product Order</p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{ProductOrders}</Typography>
        </AccordionDetails>
      </Accordion> */}
      {/* <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}>
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls='panel3bh-content'
          id='panel3bh-header'>
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Advanced settings
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}>
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls='panel4bh-content'
          id='panel4bh-header'>
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Personal data
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </div>
  );
}
