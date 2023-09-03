import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Trends
        </Typography>
        <Typography color={medium}> </Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/dog.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}> Dog </Typography>
        <Typography color={medium}>
          {" "}
          <a href="https://unsplash.com/s/photos/dog-in-flower" target="_blank">
            {" "}
            Tap to see more{" "}
          </a>
        </Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Little cute dog with flower.This photo is taken from source unslash.com
        .To see more tap above
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
