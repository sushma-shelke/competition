// import { Grid, Typography } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import { useCompitationContext } from "../../Context/CompitationContext";
// import CategoryIcon from "@mui/icons-material/Category";
// import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
// import GroupIcon from "@mui/icons-material/Group";
// import HowToVoteIcon from "@mui/icons-material/HowToVote";
// import Stats from "../../Assets/Images/bg.png";
// // import Stats from "../../Assets/Images/bgStaticInfo.png";

// const backgroundStyle = {
//   // backgroundImage: `url(${Stats})`,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   width: "100%",
// };
// const MainCounter = () => {
//   const { products, users, votes } = useCompitationContext();
//   console.log("votes", votes);
//   const [productCount, setProductCount] = useState(0);
//   const [userCount, setUserCount] = useState(0);
//   const [voteCount, setVoteCount] = useState(0);

//   useEffect(() => {
//     const countUp = (target, setter) => {
//       let currentCount = 0;
//       const interval = setInterval(() => {
//         currentCount++;
//         setter(currentCount);
//         if (currentCount >= target) {
//           clearInterval(interval);
//         }
//       }, 50);
//     };

//     if (products?.length) {
//       countUp(products.length, setProductCount);
//     }
//     if (users?.length) {
//       countUp(users.length, setUserCount);
//     }
//     if (votes?.length) {
//       countUp(votes.length, setVoteCount);
//     }
//   }, [products?.length, users?.length, votes?.length]);
//   return (
//     <>
//       <Grid
//         container
//         sx={{
//           // mt: 4,
//           // justifyContent: "center",
//           // background: "linear-gradient(to right, #e6739d, #edd7df)",
//           ...backgroundStyle,
//           alignSelf: "center",
//           backgroundColor:'#F5F5F5'
//         }}
//       >
//         {/* <Grid
//           container
//           sx={{
//             m: 4,
//             justifyContent: "center",
//             background: "rgba(128, 128, 128, 0.4)", // Adding opacity to the background colors
//             borderRadius: "15px",
//             boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
//           }}
//         > */}
//           <Grid
//             item
//             container
//             xs={12}
//             sx={{
//               justifyContent: "center",
//               alignItems: "center",
//               textAlign: "center",
//               mt: 3,
//             }}
//           >
//             <Grid
//               item
//               lg={3}
//               md={3}
//               sm={6}
//               xs={12}
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 backgroundColor:'#ffffff',
//                 // borderRadius:'20px',
//                 height:'150px',
//                 // width:'100px'

//               }}
//             >
//               <CategoryIcon sx={{ fontSize: "2rem", color: "#6F1C32" }} />
//               <Typography
//                 variant="h3"
//                 gutterBottom
//                 sx={{ fontWeight: 700, color: "#808080" }}
//               >
//                 7
//               </Typography>
//               <Typography
//                 sx={{
//                   mt:-3,
//                   textAlign: "center",
//                   fontWeight: "bold",
//                   fontSize: "1rem",
//                   color: "#808080",
//                 }}
//               >
//                 Categories
//               </Typography>

//             </Grid>
//             <Grid
//               item
//               lg={3}
//               md={3}
//               sm={6}
//               xs={12}
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 backgroundColor:'#ffffff',
//                 // borderRadius:'20px',
//                 height:'150px',
//                 // width:'100px'
//               }}
//             >
//               <ShoppingBagIcon sx={{ fontSize: "2rem", color: "#6F1C32" }} />
//               <Typography
//                 variant="h3"
//                 gutterBottom
//                 sx={{ fontWeight: 700, color: "#808080" }}
//               >
//                 {productCount}
//               </Typography>
//               <Typography
//                 sx={{
//                   mt:-3,
//                   textAlign: "center",
//                   fontWeight: "bold",
//                   fontSize: "1rem",
//                   color: "#808080",
//                 }}
//               >
//                 Products
//               </Typography>

//             </Grid>
//             <Grid
//               item
//               lg={3}
//               md={3}
//               sm={6}
//               xs={12}
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 backgroundColor:'#ffffff',
//                 // borderRadius:'20px',
//                 height:'100px',
//                 // width:'100px'
//               }}
//             >
//               <GroupIcon sx={{ fontSize: "2rem", color: "#6F1C32" }}  />
//               <Typography
//                 variant="h4"
//                 gutterBottom
//                 sx={{ fontWeight: 700, color: "#808080" }}
//               >
//                 {userCount}
//               </Typography>
//               <Typography
//                 sx={{
//                   mt:-3,
//                   textAlign: "center",
//                   fontWeight: "bold",
//                   fontSize: "1rem",
//                   color: "#808080",
//                 }}
//               >
//                 Users
//               </Typography>

//             </Grid>
//             <Grid
//               item
//               lg={3}
//               md={3}
//               sm={6}
//               xs={12}
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 backgroundColor:'#ffffff',
//                 // borderRadius:'20px',
//                 height:'150px',
//                 // width:'100px'
//               }}
//             >
//               <HowToVoteIcon sx={{ fontSize: "2rem", color: "#6F1C32" }}  />
//               <Typography
//                 variant="h4"
//                 gutterBottom
//                 sx={{ fontWeight: 700, color: "#808080" }}
//               >
//                 {voteCount}
//               </Typography>
//               <Typography
//                 sx={{
//                   mt:-3,
//                   textAlign: "center",
//                   fontWeight: "bold",
//                   fontSize: "1rem",
//                   color: "#808080",
//                 }}
//               >
//                 Votes
//               </Typography>

//             </Grid>
//           </Grid>
//         {/* </Grid> */}
//       </Grid>
//     </>
//   );
// }

// export default MainCounter

import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useCompitationContext } from "../../Context/CompitationContext";
import CategoryIcon from "@mui/icons-material/Category";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import GroupIcon from "@mui/icons-material/Group";
import HowToVoteIcon from "@mui/icons-material/HowToVote";

const MainCounter = () => {
  const { products, users, votes } = useCompitationContext();
  const [productCount, setProductCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [voteCount, setVoteCount] = useState(0);

  useEffect(() => {
    const countUp = (target, setter) => {
      let currentCount = 0;
      const interval = setInterval(() => {
        currentCount++;
        setter(currentCount);
        if (currentCount >= target) {
          clearInterval(interval);
        }
      }, 50);
    };

    if (products?.length) {
      countUp(products.length, setProductCount);
    }
    if (users?.length) {
      countUp(users.length, setUserCount);
    }
    if (votes?.length) {
      countUp(votes.length, setVoteCount);
    }
  }, [products?.length, users?.length, votes?.length]);

  const counterItems = [
    {
      icon: <CategoryIcon sx={{ fontSize: "3rem", color: "#6F1C32" }} />,
      count: 7,
      label: "Categories",
    },
    {
      icon: <ShoppingBagIcon sx={{ fontSize: "3rem", color: "#6F1C32" }} />,
      count: productCount,
      label: "Products",
    },
    {
      icon: <GroupIcon sx={{ fontSize: "3rem", color: "#6F1C32" }} />,
      count: userCount,
      label: "Users",
    },
    {
      icon: <HowToVoteIcon sx={{ fontSize: "3rem", color: "#6F1C32" }} />,
      count: voteCount,
      label: "Votes",
    },
  ];

  return (
    <Grid
      container
      spacing={2}
      sx={{
        mt: 4,
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        // backgroundColor: "#F5F5F5",
        padding: 2,
        borderRadius: 2,
      }}
    >
      {counterItems.map((item, index) => (
        <Grid
          item
          key={index}
          lg={2.5}
          md={2.5}
          sm={4}
          xs={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ffffff",
            padding: 3,
            margin: 2,
            borderRadius: 2,
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          {item.icon}
          <Typography
            variant="h3"
            sx={{ m: 1, fontWeight: 500, color: "#727070" }}
          >
            {item.count.toLocaleString()}
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1rem",
              color: "#878787",
            }}
          >
            {item.label}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default MainCounter;
