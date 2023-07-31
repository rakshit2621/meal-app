import React, { useState, useEffect } from "react";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Skeleton,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import Button from "@mui/material-next/Button";
import "./App.css";
import axios from "axios";

function Nonveg() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    async function apirequest() {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
      );
      let data1 = response.data.meals;
      const response1 = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken"
      );
      let data2 = response1.data.meals;
      setData([...data1, ...data2]);
    }
    apirequest();
  }, []);

  function description(idvalue) {
    const link = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idvalue}`;
    async function apirequest() {
      const response = await axios.get(link);
      setDesc(response.data.meals[0].strInstructions);
    }
    apirequest(); //calling the function
  }

  return (
    <>
      <Box display="flex" justifyContent="center">
        <b style={{ color: "grey" }}>
          Click on the image to know the recipe{" "}
          <i style={{ fontSize: "25px" }}> &#x1F447;</i>
        </b>
      </Box>

      <Box
        sx={{
          marginTop: "30px",
          borderWidth: "2px",
          borderColor: "error",
          marginLeft: "250px",
          marginRight: "250px",
          borderRadius: "7px",
        }}
        display="flex"
        justifyContent="center"
        overflow="hidden"
      >
        <ImageList
          className="boxforscroll"
          sx={{ width: "1200px", height: "1200px", marginTop: "30px" }}
          cols={4}
          rowHeight={320}
        >
          {data.map((item) =>
            loading ? (
              <Skeleton
                sx={{ borderRadius: "30px", height: "400px" }}
                animation="wave"
              />
            ) : (
              <ImageListItem key={item.idMeal} gap={10}>
                <Button
                  sx={{ borderRadius: "10px" }}
                  onClick={() => {
                    setOpen(true);
                    description(item.idMeal);
                  }}
                >
                  <img
                    src={item.strMealThumb}
                    alt={item.idMeal}
                    loading="lazy"
                    style={{ borderRadius: "20px" }}
                  />
                  <ImageListItemBar
                    title={item.strMeal}
                    sx={{
                      borderBottomLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                      fontWeight: "600",
                    }}
                  />
                </Button>
              </ImageListItem>
            )
          )}
        </ImageList>
        <Dialog
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
          open={open}
        >
          <DialogTitle id="dialog-title">
            <b>Recipe &#128523;</b>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="dialog-description">
              {desc}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              sx={{ borderRadius: "10px" }}
              onClick={() => setOpen(false)}
            >
              <b>Ok</b>
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
}

export default Nonveg;
