import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Grid, Typography } from "@mui/material";
import "./result.css";

export default function Result() {
  return (
    <>
      // congratulations grid
      <Grid xs={12} className="congratulations-body">
        <div>
          <div class="stars-01"></div>
          // <div class="stars-02"></div>
          // <div class="stars-03"></div>
          // <div class="stars-04"></div>
        </div>

        <div class="text">
          <span>CON</span>
          <span>GRA</span>
          <span>TUL</span>
          <span>TIO</span>
          <span>NS</span>
        </div>
      </Grid>
      // timeline grid
      <Grid xs={12}>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              <Grid container xs={12}>
                <Grid container item xs={12}>
                  <Grid item xs={5}>
                    <img
                      src="https://t3.ftcdn.net/jpg/06/15/48/68/360_F_615486892_aozUyTfkyojEl6WJ2Gq8GtTvLLOTmHRV.jpg"
                      width="290px"
                      style={{ borderRadius: "12px" }}
                    />
                    <Typography xs={12} className="winner-text">
                      Name of SHG
                    </Typography>
                  </Grid>

                  <Grid item xs={5}>
                    <img
                      src="https://www.feelgift.com/media/productdetail/HOME_OFFICE/novelty-mugs/Cute-Cat-Ceramic-Mug-Funny-Cat-Shaped-Cup-2019-7-8-Christmas-gifts-Cool-stuffs-feelgift-1.jpg"
                      width="290px"
                    />
                    <Typography xs={12} className="winner-text">
                      Product Name
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className="winner-text">Winner</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              <Grid container xs={12}>
                <Grid item container xs={12} gap={2}>
                  <Grid item xs={5}>
                    <img
                      src="https://img.freepik.com/premium-photo/group-funny-cats-vacation-take-selfie-high-quality-illustration_472640-1627.jpg"
                      width="290px"
                      style={{ borderRadius: "12px" }}
                    />
                    <Typography xs={12} className="runnerup-text">
                      Name of SHG
                    </Typography>
                  </Grid>

                  <Grid item xs={5}>
                    <img
                      src="https://www.feelgift.com/media/productdetail/HOME_OFFICE/novelty-mugs/Cute-Cat-Ceramic-Mug-Funny-Cat-Shaped-Cup-2019-7-8-Christmas-gifts-Cool-stuffs-feelgift-1.jpg"
                      width="290px"
                    />
                    <Typography xs={12} className="runnerup-text">
                      Product Name
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className="runnerup-text">
              Runner Up
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              <Grid container xs={12}>
                <Grid container item xs={12} gap={2}>
                  <Grid xs={5}>
                    <img
                      src="https://img.freepik.com/premium-photo/several-cats-take-group-selfie_433905-4062.jpg"
                      width="290px"
                      style={{ borderRadius: "12px" }}
                    />
                    <Typography xs={12} className="last-text">
                      Name of SHG
                    </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <img
                      src="https://www.feelgift.com/media/productdetail/HOME_OFFICE/novelty-mugs/Cute-Cat-Ceramic-Mug-Funny-Cat-Shaped-Cup-2019-7-8-Christmas-gifts-Cool-stuffs-feelgift-1.jpg"
                      width="290px"
                    />
                    <Typography xs={12} className="last-text">
                      Product Name
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className="last-text">
              Last Runner Up
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Grid>
    </>
  );
}
