import storage from "redux-persist/lib/storage";
import { grey } from "@mui/material/colors";

export const excludedActions = ["persist/PERSIST", "persist/REHYDRATE"];

export const persistConfig = {
  key: "root",
  storage,
};

export const styles = {
  cardStyle: {
    overflow: "hidden",
  },
  cardContentStyle: {
    background: "rgb(238, 186, 161, 0.1)",
    height: "400px",
    marginRight: "-15px",
  },
  bgGradient: {
    background: `linear-gradient(to right, rgb(101, 172, 164), rgb(51, 97, 84))`,
    color: grey[100],
  },
};
