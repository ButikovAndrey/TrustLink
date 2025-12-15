import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        О нас
      </Typography>

      <Button variant="outlined" component={Link} to="/">
        Вернуться на главную
      </Button>
    </Container>
  );
};
