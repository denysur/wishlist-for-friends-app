import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useTranslation } from "@/i18n";
import { Locale } from "@/types";
import { languages } from "@/i18n/settings";

export default async function Footer({ locale }: { locale: Locale }) {
  const { t } = await useTranslation(locale, "footer");

  return (
    <Box
      component="footer"
      sx={{ backgroundColor: "primary.main", color: "common.white" }}
    >
      <Box component="ul">
        <Box component="li">
          <Typography component={Link} href="/about-us">
            {t("links.aboutUs")}
          </Typography>
        </Box>
        <Box component="li">
          <Typography component={Link} href="/how-it-works">
            {t("links.howItWorks")}
          </Typography>
        </Box>
        <Box component="li">
          <Typography component={Link} href="/log-in">
            {t("links.logIn")}
          </Typography>
        </Box>
        <Box component="li">
          <Typography component={Link} href="/sign-in">
            {t("links.signIn")}
          </Typography>
        </Box>
      </Box>
      {languages
        .filter((l) => locale !== l)
        .map((l) => {
          return (
            <Box key={l}>
              <Link href={`/${l}`}>{l}</Link>
            </Box>
          );
        })}
    </Box>
  );
}
