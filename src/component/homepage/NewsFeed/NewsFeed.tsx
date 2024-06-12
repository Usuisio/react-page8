import {
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Paper,
} from "@mui/material";
import Notifications from "@mui/icons-material/Notifications";
import Divider from "@mui/material/Divider";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export const NewsFeed = () => {
  const { t } = useTranslation();
  const news = [
    {
      title: t("news1Title"),
      description: t("news1Date"),
    },
    {
      title: t("news2Title"),
      description: t("news2Date"),
    },
    {
      title: t("news3Title"),
      description: t("news3Date"),
    },
    {
      title: t("news4Title"),
      description: t("news4Date"),
    },
    {
      title: t("news5Title"),
      description: t("news5Date"),
    },
  ];
  const news_Trick = [
    {
      title: t("news1Title_Trick"),
      description: t("news1Date_Trick"),
    },
    {
      title: t("news2Title_Trick"),
      description: t("news2Date_Trick"),
    },
    {
      title: t("news3Title_Trick"),
      description: t("news3Date_Trick"),
    },
    {
      title: t("news4Title_Trick"),
      description: t("news4Date_Trick"),
    },
    {
      title: t("news5Title_Trick"),
      description: t("news5Date_Trick"),
    },
  ];
  const news_lastMessage = [
    {
      title: t("lastHachitanMessage3"),
      description: t("Hachitan"),
    },
    {
      title: t("lastHachitanMessage4"),
      description: t("Hachitan"),
    },
    {
      title: t("lastHachitanMessage5"),
      description: t("Hachitan"),
    },
    {
      title: t("lastHachitanMessage6"),
      description: t("Hachitan"),
    },
    {
      title: t("lastHachitanMessage7"),
      description: t("Hachitan"),
    },
    {
      title: t("lastHachitanMessage8"),
      description: t("Hachitan"),
    },
    {
      title: t("lastHachitanMessage9"),
      description: t("Hachitan"),
    },
    {
      title: t("lastHachitanMessage10"),
      description: t("Hachitan"),
    },
    {
      title: t("lastHachitanMessage11"),
      description: t("Hachitan"),
    },
  ];
  const currentTrick = useSelector(
    (state: RootState) => state.gameState.currentTrick
  );
  const newsToUse =
    currentTrick === "ページ8"
      ? news_lastMessage
      : currentTrick === "歴史的ニュース"
      ? news_Trick
      : news;
  return (
    <>
      <Container>
        <h1>
          {currentTrick === "ページ8"
            ? t("lastHachitanMessage2")
            : t("latestNews")}
        </h1>
        <Paper>
          <List>
            {newsToUse.map((article, index) => (
              <div key={index}>
                {index !== 0 && <Divider component="li" />}
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar>
                      <Notifications />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={article.title}
                    secondary={article.description}
                  />
                </ListItem>
              </div>
            ))}
          </List>
        </Paper>
      </Container>
    </>
  );
};
