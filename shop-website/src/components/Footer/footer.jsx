import React from "react";
import { Box, Container, Grid, Typography, Link, Divider } from "@mui/material";
import { Storefront, HelpOutline } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#181818", color: "#fff", padding: "30px 0" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">ABOUT</Typography>
            <Link href="#" color="inherit" display="block" underline="none">
              Contact Us
            </Link>
            <Link href="#" color="inherit" display="block" underline="none">
              Careers
            </Link>
          </Grid>

          {/* Help Section */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">HELP</Typography>
            <Link href="#" color="inherit" display="block" underline="none">
              Payments
            </Link>
            <Link href="#" color="inherit" display="block" underline="none">
              Shipping
            </Link>
            <Link href="#" color="inherit" display="block" underline="none">
              Cancellation & Returns
            </Link>
            <Link href="#" color="inherit" display="block" underline="none">
              FAQ
            </Link>
          </Grid>

          {/* Consumer Policy Section */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">CONSUMER POLICY</Typography>
            <Link href="#" color="inherit" display="block" underline="none">
              Terms Of Use
            </Link>
            <Link href="#" color="inherit" display="block" underline="none">
              Privacy
            </Link>
            <Link href="#" color="inherit" display="block" underline="none">
              Sitemap
            </Link>
            <Link href="#" color="inherit" display="block" underline="none">
              Grievance Redressal
            </Link>
          </Grid>

          {/* Social Section */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">SOCIAL</Typography>
            <Link href="#" color="inherit" display="block" underline="none">
              Facebook
            </Link>
            <Link href="#" color="inherit" display="block" underline="none">
              Instagram
            </Link>
            <Link href="#" color="inherit" display="block" underline="none">
              Twitter
            </Link>
            <Link href="#" color="inherit" display="block" underline="none">
              YouTube
            </Link>
          </Grid>
        </Grid>

        <Divider sx={{ backgroundColor: "#444", margin: "20px 0" }} />

        {/* Contact Details */}
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">Mail Us:</Typography>
            <Typography variant="body2" color="gray">
              Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
              Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
              Village, Bengaluru, 560103, Karnataka, India
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">Registered Office Address:</Typography>
            <Typography variant="body2" color="gray">
              Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
              Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
              Village, Bengaluru, 560103, Karnataka, India
            </Typography>
            <Typography variant="body2" color="gray">
              CIN: U51109KA2012PTC066107
            </Typography>
            <Typography variant="body2">
              Telephone:{" "}
              <Link href="tel:044-45614700" color="inherit">
                044-45614700
              </Link>
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ backgroundColor: "#444", margin: "20px 0" }} />

        {/* Bottom Footer */}
        <Grid container justifyContent="space-between">
          <Grid item>
            <Link
              href="#"
              color="inherit"
              sx={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
              <Storefront />
              Become a Seller
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="#"
              color="inherit"
              sx={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
              <HelpOutline />
              Help Center
            </Link>
          </Grid>
          <Grid item>
            <Typography variant="body2">© 2020-2025 Shopsy.in</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
