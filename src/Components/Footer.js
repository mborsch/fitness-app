import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/ICO.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#ffdddd">
      <Stack gap="40px" alignItems="center" px="40px" pt="40px">
        <img src={Logo} alt="logo" width="50px" height="40px" />
        <Typography variant="h5" pb="40px">
          Made by Matt Borschnack for ICO Fitness
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
