import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  CircularProgress,
  Box,
} from "@mui/material";
import axios from "axios";
import { LocationOn, LocalPhone, MedicalServices } from "@mui/icons-material";

const App = () => {
  const [city, setCity] = useState("");
  const [labs, setLabs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFetchLabs = async () => {
    if (!city.trim()) {
      setError("Please enter a city name.");
      return;
    }

    setError("");
    setLabs([]);
    setLoading(true);

    try {
      const response = await axios.get(
        `https://medical-labs-finder.onrender.com/api/health-labs/${city}`
      );
      setLabs(response.data);
    } catch (err) {
      console.error("Error fetching health labs:", err.message);
      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Typography
        variant="h3"
        textAlign="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#1976d2" }}
      >
        Find Health Labs in Your City
      </Typography>
      <Typography
        textAlign="center"
        color="text.secondary"
        sx={{ marginBottom: 3 }}
      >
        Enter your city name to discover health labs near you with their
        details.
      </Typography>

      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={8}>
          <TextField
            fullWidth
            label="City Name"
            variant="outlined"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            error={!!error}
            helperText={error}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleFetchLabs}
            sx={{ height: "56px" }}
          >
            Search
          </Button>
        </Grid>
      </Grid>

      {loading && (
        <Grid container justifyContent="center" sx={{ marginTop: 4 }}>
          <CircularProgress />
        </Grid>
      )}

      {error && !loading && (
        <Typography color="error" textAlign="center" sx={{ marginTop: 3 }}>
          {error}
        </Typography>
      )}

      {!loading && labs.length > 0 && (
        <Grid container spacing={4} sx={{ marginTop: 3 }}>
          {labs.map((lab, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={`https://source.unsplash.com/400x300/?health,lab&random=${index}`}
                  alt="Health Lab"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x300?text=Health+Lab";
                  }}
                />

                <CardContent>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: "bold", color: "#1976d2" }}
                  >
                    {lab.name}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 1,
                    }}
                  >
                    <LocationOn sx={{ marginRight: 1, color: "#757575" }} />
                    <Typography variant="body2" color="text.secondary">
                      {lab.address}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 1,
                    }}
                  >
                    <MedicalServices
                      sx={{ marginRight: 1, color: "#757575" }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {lab.service}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <LocalPhone sx={{ marginRight: 1, color: "#757575" }} />
                    <Typography variant="body2" color="text.secondary">
                      {lab.phone}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {!loading && labs.length === 0 && !error && (
        <Typography
          textAlign="center"
          color="text.secondary"
          sx={{ marginTop: 3 }}
        >
          No results found. Try searching for another city.
        </Typography>
      )}
    </Container>
  );
};

export default App;