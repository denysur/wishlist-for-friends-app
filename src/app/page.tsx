import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function HomePage() {
  return (
    <Box>
      <Box component="main">
        <Typography variant="h1">Wishlist For Friends</Typography>
        <Box component="ul">
          <Box component="li">
            <Typography component={Link} href="/about-us">
              About us
            </Typography>
          </Box>
          <Box component="li">
            <Typography component={Link} href="/how-it-works">
              How it works
            </Typography>
          </Box>
          <Box component="li">
            <Typography component={Link} href="/log-in">
              Log in
            </Typography>
          </Box>
          <Box component="li">
            <Typography component={Link} href="/sign-in">
              Sign in
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box component="footer"></Box>
    </Box>
  );
}
