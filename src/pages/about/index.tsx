import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useStore } from "@/store/useStore";

export const About = () => {
  const { count } = useStore();

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        О нас
      </Typography>

      <Typography variant="h6">Текущий счётчик: {count}</Typography>

      <Button variant="outlined" component={Link} to="/">
        Вернуться на главную
      </Button>
    </Container>
  );
};
