import { useState } from "react";
import {
  Avatar,
  Button,
  TextField,
  CardActions,
  CardContent,
  CardHeader,
  Card,
  styled,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SendIcon from "@mui/icons-material/Send";
import { Messages } from "./Messages";
import { v4 as uid } from "uuid";
import { useAppDispatch } from "../store/hooks";
import { addMessage } from "../store/messagesSlice";
import { styles } from "../consts";
import { IUser } from "Users";

const StyledInput = styled(TextField)`
  width: 100%;
  & .MuiInput-underline::before {
    border-color: #65aca4;
  }
  & .MuiInput-underline::after {
    border-color: #65aca4;
  }
`;

export const ChatCard = ({ user }: { user: IUser }) => {
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState("");

  const postMessage = () => {
    if (message.trim() !== "") {
      const date = new Date();
      const newMessage = {
        id: uid(),
        message: message.trim(),
        userId: user.id,
        userName: user.name,
        time: `${date.getHours()}:${date.getMinutes()}`,
      };
      dispatch(addMessage(newMessage));
    }
    setMessage("");
  };

  return (
    <Card sx={{ width: "25rem" }} style={styles.cardStyle}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#e2d4cb" }} aria-label="current-user">
            <PersonIcon />
          </Avatar>
        }
        title={user.name}
        style={styles.bgGradient}
      />
      <CardContent style={{ ...styles.cardContentStyle, overflowY: "auto" }}>
        <Messages userId={user.id} />
      </CardContent>
      <CardActions
        disableSpacing
        style={{
          background: "rgb(226, 212, 203, 0.3)",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <StyledInput
          hiddenLabel
          id="messages-text-field"
          variant="standard"
          multiline
          sx={{ width: "80%" }}
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          aria-label="send-message"
          onClick={postMessage}
          sx={{ color: "#336154" }}
        >
          <SendIcon />
        </Button>
      </CardActions>
    </Card>
  );
};
