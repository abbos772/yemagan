import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "../../../api/Index";
import "../About/About.css";
export default function MediaCard() {
  const [data, setData] = useState(null);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [reload]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure")) {
      axios.delete(`/products/${id}`).then((res) => {
        setReload((p) => !p);
        console.log(res);
      });
    }
  };
  const Products = data?.map((product) => (
    <Card key={product.id} sx={{ maxWidth: 545 }}>
      <CardMedia
        sx={{ height: 160 }}
        image={product.avatar}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => handleDelete(product.id)}
          style={{ background: "red", color: "white" }}
          size="small"
        >
          Delete
        </Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  ));

  return <div className="wrapper">{Products}</div>;
}
