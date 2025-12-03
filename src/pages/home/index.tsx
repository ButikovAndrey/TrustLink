import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useStore } from "@/store/useStore";
import { Reactsvg } from "@/icons";

export const Home = () => {
  const { count, increase, decrease, reset } = useStore();

  return (
    <Container sx={{ mt: 4 }}>
      <Reactsvg />
      <h1>Hello</h1>
      <Typography variant="h4" gutterBottom>
        Главная страница
      </Typography>

      <Typography variant="h6">Счётчик: {count}</Typography>
      <Button variant="contained" sx={{ mr: 1 }} onClick={increase}>
        +
      </Button>
      <Button variant="contained" sx={{ mr: 1 }} onClick={decrease}>
        -
      </Button>
      <Button variant="outlined" onClick={reset}>
        Сброс
      </Button>

      <Button variant="contained" component={Link} to="/about" sx={{ mt: 2 }}>
        Перейти на About
      </Button>
    </Container>
  );
};
