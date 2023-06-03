import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import { FavoriteBorder } from '@mui/icons-material';
import './ProductsPage.css'; 

function ProductsPage({ searchResults }) {
  console.log(searchResults);

  return (
    <div style={{ marginTop: '2rem', maxWidth: '1440px', margin: '0 auto' }}>
      <Grid container spacing={2} style={{ padding: '16px' }}>
        {searchResults.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="product-card">
              <CardMedia component="img" height="200" image={product.photos[0].large} />
              <CardContent className="card-content">
                <Typography variant="h5" component="div">{product.title}</Typography>
                <Typography variant="body1" className="description">{product.stripped_descr}</Typography>
              </CardContent>
              <CardContent className="price-content">
                <Typography variant="h6" style={{ marginRight: '8px' }}>{product.price}</Typography>
                <IconButton sx={{ color: 'lightgrey' }}>
                  <FavoriteBorder />
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ProductsPage;

