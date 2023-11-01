import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

const ActivityCard = () => {
  const [imageCards, setImageCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  useEffect(() => {
    // Make an API request to fetch image card data from your backend
    fetch("http://localhost:1337/api/activities?populate=*")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setImageCards(data || []);
      })
      .catch((error) => {
        console.error("Error fetching image cards: " + error);
      });
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = Array.isArray(imageCards) ? imageCards.slice(startIndex, endIndex) : [];

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Grid container mt={4} spacing={3}>
        {itemsToDisplay.map((d) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={d.id}>
            <Card elevation={0}>
              <CardMedia
                component="img"
                image={`http://localhost:1337${item.attributes.img_url?.data?.attributes.url}`} // Make sure this corresponds to your API response
                alt="activity image"
                style={{ borderRadius: "15px", height: "250px" }}
              />
              <CardContent
                sx={{
                  padding: "0px",
                }}
              >
                <Typography
                  variant="body1"
                  color="#2161cd"
                  fontWeight="700"
                  py={1.5}
                >
                  {d.date} {/* Update with the actual date field */}
                </Typography>
                <Typography variant="body1" fontWeight="700" pb={2}>
                  {d.description} {/* Update with the actual description field */}
                </Typography>
              </CardContent>
              <CardActions
                disableSpacing
                sx={{
                  padding: "0px",
                }}
              >
                <Link href={`/activity/${d.slug}`} as={`/activity/${d.id}`}>
                  <Button
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      padding: "0px",
                      textTransform: "capitalize",
                      fontWeight: "700",
                    }}
                  >
                    Read More
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Stack spacing={2} alignItems="center" pt={8}>
        <Pagination
          count={Math.ceil(imageCards.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Stack>
    </>
  );
};

export default ActivityCard;
