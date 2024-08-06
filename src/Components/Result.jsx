// import * as React from "react";
// import Timeline from "@mui/lab/Timeline";
// import TimelineItem from "@mui/lab/TimelineItem";
// import TimelineSeparator from "@mui/lab/TimelineSeparator";
// import TimelineConnector from "@mui/lab/TimelineConnector";
// import TimelineContent from "@mui/lab/TimelineContent";
// import TimelineDot from "@mui/lab/TimelineDot";
// import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
// import { Grid, Typography } from "@mui/material";
// import "./result.css";

// export default function Result() {
//   return (
//     <>
//       {/*congratulations grid*/}
//       <Grid xs={12} className="congratulations-body" sx={{ marginTop: "3rem" }}>
//         <div class="text">
//           <span>CON</span>
//           <span>GRA</span>
//           <span>TUL</span>
//           <span>TIO</span>
//           <span>NS</span>
//         </div>
//       </Grid>
//       {/*timeline grid*/}
//       <Grid xs={12} className="timelinePadding">
//         <Timeline position="alternate">
//           <TimelineItem>
//             <TimelineOppositeContent color="text.secondary">
//               <Grid container xs={12}>
//                 <Grid container item xs={12}>
//                   <Grid item sm={9} lg={5}>
//                     <img
//                       src="https://t3.ftcdn.net/jpg/06/41/86/84/360_F_641868415_icZuVksFNm9fvc6SaTWURenXfeMtXolU.jpg"
//                       width="290px"
//                       alt=""
//                       style={{ borderRadius: "12px" }}
//                     />
//                     <Typography xs={12} className="winner-text">
//                       Name of SHG
//                     </Typography>
//                   </Grid>

//                   <Grid item sm={9} lg={5}>
//                     <img
//                       src="https://m.media-amazon.com/images/I/716fhiaOi7L._SX679_.jpg"
//                       width="290px"
//                       alt=""
//                       style={{ borderRadius: "12px", paddingLeft: "15px" }}
//                     />
//                     <Typography xs={12} className="winner-text">
//                       Product Name
//                     </Typography>
//                   </Grid>
//                 </Grid>
//               </Grid>
//             </TimelineOppositeContent>
//             <TimelineSeparator>
//               <TimelineDot />
//               <TimelineConnector />
//             </TimelineSeparator>
//             <TimelineContent className="winner-text">Winner</TimelineContent>
//           </TimelineItem>
//           <TimelineItem>
//             <TimelineOppositeContent color="text.secondary">
//               <Grid container xs={12}>
//                 <Grid item container xs={12} gap={2}>
//                   <Grid item sm={9} lg={5}>
//                     <img
//                       src="https://t3.ftcdn.net/jpg/06/41/86/84/360_F_641868415_icZuVksFNm9fvc6SaTWURenXfeMtXolU.jpg"
//                       width="290px"
//                       alt=""
//                       style={{ borderRadius: "12px" }}
//                     />
//                     <Typography xs={12} className="runnerup-text">
//                       Name of SHG
//                     </Typography>
//                   </Grid>

//                   <Grid item sm={9} lg={5}>
//                     <img
//                       src="https://m.media-amazon.com/images/I/716fhiaOi7L._SX679_.jpg"
//                       width="290px"
//                       alt=""
//                       style={{ borderRadius: "12px", paddingLeft: "5px" }}
//                     />
//                     <Typography xs={12} className="runnerup-text">
//                       Product Name
//                     </Typography>
//                   </Grid>
//                 </Grid>
//               </Grid>
//             </TimelineOppositeContent>
//             <TimelineSeparator>
//               <TimelineDot />
//               <TimelineConnector />
//             </TimelineSeparator>
//             <TimelineContent className="runnerup-text">
//               Runner Up
//             </TimelineContent>
//           </TimelineItem>
//           <TimelineItem>
//             <TimelineOppositeContent color="text.secondary">
//               <Grid container xs={12}>
//                 <Grid container item xs={12} gap={2}>
//                   <Grid sm={9} lg={5}>
//                     <img
//                       src="https://t3.ftcdn.net/jpg/06/41/86/84/360_F_641868415_icZuVksFNm9fvc6SaTWURenXfeMtXolU.jpg"
//                       width="290px"
//                       alt=""
//                       style={{ borderRadius: "12px" }}
//                     />
//                     <Typography xs={12} className="last-text">
//                       Name of SHG
//                     </Typography>
//                   </Grid>
//                   <Grid item sm={9} lg={5}>
//                     <img
//                       src="https://m.media-amazon.com/images/I/716fhiaOi7L._SX679_.jpg"
//                       width="290px"
//                       alt=""
//                       style={{ borderRadius: "12px", paddingLeft: "5px" }}
//                     />
//                     <Typography xs={12} className="last-text">
//                       Product Name
//                     </Typography>
//                   </Grid>
//                 </Grid>
//               </Grid>
//             </TimelineOppositeContent>
//             <TimelineSeparator>
//               <TimelineDot />
//               <TimelineConnector />
//             </TimelineSeparator>
//             <TimelineContent className="last-text">
//               Last Runner Up
//             </TimelineContent>
//           </TimelineItem>
//         </Timeline>
//       </Grid>
//     </>
//   );
// }
