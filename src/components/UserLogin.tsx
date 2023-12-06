import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  styled,
} from "@mui/material";

const StyledInput = styled(TextField)`
  width: 100%;
  & .MuiOutlinedInput-notchedOutline {
    border-color: #65aca4;
  }
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #65aca4;
  }
  & label.Mui-focused {
    color: #65aca4;
  }
`;

export const UserLogin = ({
  handleLogin,
}: {
  handleLogin: (name: string) => void;
}) => {
  const [name, setName] = useState("");

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Login
        </Typography>
        <StyledInput
          label="Username"
          placeholder="Enter username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Box
          style={{ paddingTop: 10, display: "flex", justifyContent: "center" }}
        >
          <Button
            variant="contained"
            style={{ backgroundColor: "#65aca4" }}
            onClick={() => handleLogin(name)}
          >
            Join chat
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
