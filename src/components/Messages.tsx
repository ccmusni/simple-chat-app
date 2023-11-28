import { useEffect, useRef } from "react";
import "../styles/MessageCard.css";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import { useAppSelector } from "../store/hooks";
import { Box } from "@mui/material";

type TMessageItem = {
  userId: string;
  userName: string;
  message: string;
  time: string;
};

export const Messages = ({ userId }: { userId: string | undefined }) => {
  const { messages } = useAppSelector((state) => state);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Box className="messages-card">
      {messages.map((message) => (
        <Message key={message.id} messageItem={message} userId={userId} />
      ))}
      <div ref={messagesEndRef} />
    </Box>
  );
};

type TMessageProps = { messageItem: TMessageItem; userId: string | undefined };

const Message = ({ messageItem, userId }: TMessageProps) => {
  return (
    <>
      <Box
        className={`message-box ${
          messageItem.userId === userId
            ? "message-box-right"
            : "message-box-left"
        }`}
      >
        <Avatar
          sx={{ width: 24, height: 24, margin: "10px 3px", bgcolor: "#e2d4cb" }}
          aria-label="current-user"
        >
          <PersonIcon style={{ width: 16 }} />
        </Avatar>
        <Box>
          <Box className="username">{messageItem.userName}</Box>
          <Box className="message">
            <Box className="message-text">{messageItem.message}</Box>
            <Box className="message-time">{messageItem.time}</Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
