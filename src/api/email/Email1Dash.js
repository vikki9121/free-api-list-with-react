import { Box, useTheme } from "@mui/material";

import BtnRouting from "../../components/BtnRouting";
import NavBar from "../../navigation/NavBar";

const EmailDash = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        minHeight: "110vh",
      }}
    >
      <NavBar link="/EmailDash" />
      <Box>
        <BtnRouting btnName="" navigateTo="" />
      </Box>
    </Box>
  );
};

export default EmailDash;
