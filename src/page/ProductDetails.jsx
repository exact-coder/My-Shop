import {
    Box,
    Button,
    Card,
    Container,
    Grid,
    IconButton,
    TextField,
    Typography
} from "@material-ui/core";
import { Send, Visibility } from "@material-ui/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleReview } from "../components/common/SingleReview";
import { domain } from "../env";

export const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const getProductDetails = async () => {
      await axios({
        url: `${domain}/api/singleproduct/${id}/`,
        method: "GET",
      }).then((response) => {
        setProduct(response.data[0]);
      });
    };
    getProductDetails();
  }, [id]);
  return (
    <Container style={{ paddingTop: "10px" }}>
      <Card>
        <Grid container>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <img
              style={{ width: "100%", height: "auto" }}
              src={product?.image}
              alt={product?.title}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <Grid
              style={{ display: 'inline-block',marginLeft: "10px" }}
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
            >
              <Typography
                style={{
                  fontSize: "25px",
                  color: "var(--navbar)",
                  fontWeight: "600",
                }}
              >
                {product?.title}
              </Typography>
              <Box>
                {product?.category?.map((item, i) => (
                  <Button style={{ color: "var(--gray)" }} key={i}>
                    {item?.title}
                  </Button>
                ))}
              </Box>
              {product?.brand && (
                <Button style={{ color: "var(--blue)" }}>
                  {product?.brand?.title}
                </Button>
              )}
              <Box>
                {product?.discount > 0 && (
                  <Box style={{ color: "var(--orange)" }}>
                    {product?.discount}% Off
                  </Box>
                )}
              </Box>
              <Box>
                {product?.oldprice && (
                  <Box
                    component={"span"}
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "var(--orange)",
                      textDecoration: "line-through",
                      marginRight: ".7rem",
                    }}
                  >
                    ৳{product?.oldprice}Tk
                  </Box>
                )}
                <Box
                  component={"span"}
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "var(--nabvar)",
                  }}
                >
                  ৳{product?.price} Tk
                </Box>
              </Box>
              <Button
                style={{
                  backgroundColor: "var(--orange)",
                  color: "var(--white)",
                  fontSize: "20px",
                  margin: "10px 0px",
                  padding: "10px",
                }}
              >
                Add To Cart
              </Button>
            </Grid>
            <Grid style={{padding: '10px', display: 'inline-block',justifyContent: 'center'}} item xs={12} sm={12} md={6} lg={6}>
                <Button endIcon={<Visibility />} style={{fontSize: '20px', padding: '10px', borderRadius: '50%'}}>{product?.view}</Button>
            </Grid>
            <Typography
              style={{ color: "var(--gray)", margin: "5px", padding: "5px" }}
            >
              {product?.details}
            </Typography>
            <Typography style={{textAlign: 'center', fontSize: '30px', fontWeight: 'bold',color: 'var(--navbar)', marginBottom: '5px'}}>Reviews</Typography>
            <Box p={'3'} >
              <TextField label='Your View...' style={{width: '95%',margin: '1rem',}} variant='outlined' InputProps={{
                endAdornment: (
                  <IconButton><Send /> </IconButton>
                )
              }}/>
              {
                product?.review?.map((item,i) => <SingleReview key={i} item={item} />)
              }
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

