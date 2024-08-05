// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { Grid } from "@mui/material";

// export default function WinnerProducts() {
//   return (
//     <Grid container spacing={3} sx={{ mt: 3, justifyContent: "center" }}>
//       <Grid item xs={12} sm={12} md={3.5} lg={3.5}>
//         <Card>
//           <CardMedia
//             sx={{ height: 300, margin: "20px" }}
//             image="https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//             title="green iguana"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               Lizard
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Lizards are a widespread group of squamate reptiles, with over
//               6,000 species, ranging across all continents except Antarctica
//             </Typography>
//           </CardContent>
//         </Card>
//       </Grid>
//       <Grid item xs={12} sm={12} md={3.5} lg={3.5}>
//         <Card>
//           <CardMedia
//             sx={{ height: 140 }}
//             image="https://images.pexels.com/photos/126292/pexels-photo-126292.jpeg?auto=compress&cs=tinysrgb&w=1600"
//             title="green iguana"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               Lizard
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Lizards are a widespread group of squamate reptiles, with over
//               6,000 species, ranging across all continents except Antarctica
//             </Typography>
//           </CardContent>
//         </Card>
//       </Grid>
//       <Grid item xs={12} sm={12} md={3.5} lg={3.5}>
//         <Card>
//           <CardMedia
//             sx={{ height: 140 }}
//             image="https://images.pexels.com/photos/13787796/pexels-photo-13787796.jpeg?auto=compress&cs=tinysrgb&w=1600"
//             title="green iguana"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               Lizard
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Lizards are a widespread group of squamate reptiles, with over
//               6,000 species, ranging across all continents except Antarctica
//             </Typography>
//           </CardContent>
//         </Card>
//       </Grid>
//     </Grid>
//   );
// }

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function WinnerProducts() {
  const [hovered, setHovered] = React.useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <Grid container spacing={4} sx={{ mt: 3, justifyContent: "center" }}>
      <Grid item xs={12} sm={12} md={3.5} lg={3.5}>
        <Card
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "height 0.3s ease-in-out, transform 0.3s ease-in-out",
            height: hovered ? "400px" : "300px",
          }}
        >
          <CardMedia
            component="img"
            image="https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            title="green iguana"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.3s ease-in-out",
              transform: hovered ? "scale(1.1)" : "scale(1)",
            }}
          />
          <CardContent
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              color: "#000",
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
              padding: "16px",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              textAlign: "center",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={3.5} lg={3.5}>
        <Card
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "height 0.3s ease-in-out, transform 0.3s ease-in-out",
            height: hovered ? "400px" : "300px",
          }}
        >
          <CardMedia
            component="img"
            image="https://images.pexels.com/photos/13787796/pexels-photo-13787796.jpeg?auto=compress&cs=tinysrgb&w=1600"
            title="green iguana"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.3s ease-in-out",
              transform: hovered ? "scale(1.1)" : "scale(1)",
            }}
          />
          <CardContent
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              color: "#000",
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
              padding: "16px",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              textAlign: "center",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={3.5} lg={3.5}>
        <Card
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "height 0.3s ease-in-out, transform 0.3s ease-in-out",
            height: hovered ? "400px" : "300px",
          }}
        >
          <CardMedia
            component="img"
            image="https://images.pexels.com/photos/1559908/pexels-photo-1559908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            title="green iguana"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.3s ease-in-out",
              transform: hovered ? "scale(1.1)" : "scale(1)",
            }}
          />
          <CardContent
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              color: "#000",
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
              padding: "16px",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              textAlign: "center",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
