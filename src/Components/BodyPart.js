import React from "react";
import { Stack, Typography } from "@mui/material";

import Icon from "../assets/icons/gym.png";
import backIcon from "../assets/icons/back.png";
import neckIcon from "../assets/icons/back.png";
import cardioIcon from "../assets/icons/run.png";
import chestIcon from "../assets/icons/chest.png";
import lowerlegsIcon from "../assets/icons/lower-legs.png";
import lowerarmsIcon from "../assets/icons/upper-arms.png";
import shouldersIcon from "../assets/icons/shoulders.png";
import upperarmsIcon from "../assets/icons/upper-arms.png";
import upperlegsIcon from "../assets/icons/upper-legs.png";
import waistIcon from "../assets/icons/waist.png";

//Horizontal Scroll Bar to choose a muscle group to filter exercises

const BodyParts = ({ item, setBodyPart, bodyPart }) => {
  function renderSwitch(item) {
    switch (item) {
      case "neck":
        return neckIcon;
      case "neck":
        return backIcon;
      case "back":
        return backIcon;
      case "cardio":
        return cardioIcon;
      case "chest":
        return chestIcon;
      case "lower arms":
        return upperarmsIcon;
      case "lower legs":
        return lowerlegsIcon;
      case "shoulders":
        return shouldersIcon;
      case "upper arms":
        return upperarmsIcon;
      case "upper legs":
        return upperlegsIcon;
      case "waist":
        return waistIcon;
      default:
        return Icon;
    }
  }

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        console.log(item);
        setBodyPart(item);

        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={renderSwitch(item)}
        alt="dumbbell"
        style={{ width: "50px", height: "50px" }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyParts;
