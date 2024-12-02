import { Box } from "@mui/material";
import React from "react";
import "./qualification.css";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
// import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import CSS3 from "./assets/image/CSS3.png";

const Qualification = () => {
  return (
    <>
      <Box className="Degrees-Received">
        <Typography variant="h3" gutterBottom>
          Degrees Received
        </Typography>
      </Box>
      <Box className="qualification-parent-section">
        <Accordion className="qualification-main-heading">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography variant="h5">
              Dr. Ram Manohar Lohia Awadh University, Ayodhya Uttar Pradesh,
              Bachelor Of Computer Application (BCA) Year(2021-24)
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="qualification-paragraph-section">
              <li className="qualification-list">
                ⚡ I have studied basic software engineering subjects like DS,
                Algorithms, DBMS, OS, CA etc.
              </li>
              <li className="qualification-list">
                ⚡ Apart from this, I have done courses on Core Java, Frontend
                Development, and learning Python Programming
              </li>
              <li className="qualification-list">
                ⚡ I was selected for the First Prize in BCA in my college. I
                have received award from respected director for consistently
                best performance in academics.
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>

        <Accordion className="qualification-second-main-section">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography variant="h5">
              A.I.T. Inter College Jaganpur Ayodhya Uttar Pradesh
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <li className="qualification-second-list">
                ⚡High School(10th) Year:(2017-19)
              </li>
              <li className="qualification-second-list">
                ⚡Intermediate(12th) Non-Medical Year:(2020-21)
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};
export default Qualification;
