import React from "react";
import { Stack, Box, Divider, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const TrendPropertyCard = () => {
  return (
    <Stack className="trend-card-box">
      <Box
        component={"div"}
        className={"card-img"}
        style={{ backgroundImage: `url("/img/banner/types/house.webp")` }}
      >
        <div>10$</div>
      </Box>
      <Box component={"div"} className={"info"}>
        <strong className={"title"}>Run Will Buildings</strong>
        <p className={"desc"}> Seoul Gangnam Apartment </p>
        <div className={"options"}>
          <div>
            <img src="/img/icons/bed.svg" alt="bed" />
            <span>3 bed</span>
          </div>
          <div>
            <img src="/img/icons/room.svg" alt="room" />
            <span>7 rooms</span>
          </div>
          <div>
            <img src="/img/icons/expand.svg" alt="expand" />
            <span>350 m2</span>
          </div>
        </div>
        <Divider sx={{ mt: "15px", mb: "17px" }} />
        <div className={"bott"}>
          <p> Rent</p>
          <div className="view-like-box">
            <IconButton color={"default"}>
              <RemoveRedEyeIcon />
            </IconButton>
            <Typography className="view-cnt">120</Typography>
            <IconButton color={"primary"}>
              <FavoriteIcon />
            </IconButton>
            <Typography className="view-cnt">300</Typography>
          </div>
        </div>
      </Box>
    </Stack>
  );
};

export default TrendPropertyCard;
