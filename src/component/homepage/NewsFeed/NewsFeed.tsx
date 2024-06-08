import {
  Container,
  Typography,
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

export const NewsFeed = () => {
  const {t} = useTranslation();
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
  return (
    <>
      <Container>
        <h1>{t("latestNews")}</h1>
        <Paper>
          <List>
            {news.map((article, index) => (
              <div  key={index}>
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
