import { Box, Typography } from "@mui/material";
import { Locale } from "@/types";
import Footer from "@/components/common/Footer";

export default async function HomePage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  return (
    <>
      <Box component="main">
        <Typography variant="h1">Wishlist For Friends</Typography>
      </Box>
      <Footer locale={locale} />
    </>
  );
}
