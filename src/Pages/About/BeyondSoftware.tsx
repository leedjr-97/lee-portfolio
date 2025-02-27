import { Theme, Typography } from "@mui/material";

export default function BeyondSoftware({
  isMobile,
  theme,
}: {
  isMobile: boolean;
  theme: Theme;
}) {
  return (
    <div
      style={{
        marginTop: "32px",
        marginBottom: "16px",
        backgroundColor: theme.palette.grey[200],
        borderRadius: "10px",
        padding: "16px",
      }}
    >
      <Typography
        variant={"h3"}
        style={{ textDecoration: "underline", marginBottom: "16px" }}
      >
        {"Beyond the Software:"}
      </Typography>

      <Typography
        variant={"h5"}
        style={{ marginLeft: "16px", marginBottom: "16px" }}
      >
        {
          "As a Colorado native, I've enjoyed the beautiful rocky mountains for the majority of my life. Outside of gazing at nature, I spend my free time volunteering with my church, running, cooking, video editing, playing video games, and terrorizing the local population in my T-Rex costume. There's no need to be so serious all the time, even if the world grows gloomy. Have you ever caught yourself smiling when you see someone else laugh? I believe God created laughter with purpose to spread joy to everyone, so take some time to laugh yourself:"
        }
      </Typography>

      <iframe
        width={isMobile ? "100%" : "853"}
        height={isMobile ? "200" : "480"}
        src={`https://www.youtube.com/embed/ydAyvvDQrgY`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}
