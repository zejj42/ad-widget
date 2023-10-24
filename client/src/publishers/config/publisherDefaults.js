import COLORS from "../../constants/colors.js";
import FONT_SIZES from "../../constants/fontSizes.js";
import FONTS from "../../constants/fonts.js";

export const DEFAULT_PUBLISHER_OPTIONS = {
  publisherId: "taboola-templates",
  retries: 3,
  totalRecs: 4,
  displayRecOnFail: true,
  defaultImageSrc:
    "https://www.shepherdsearchgroup.com/wp-content/themes/shepherd/images/no-image-found-360x250.png",
  recsDesktop: 4,
  recsMobile: 2,
  maxCaptionLength: 100,
  priority: "medium",
  themeColor: COLORS.white,
  textColor: COLORS.black,
  accentColor: COLORS.blue,
  fontFamily: FONTS.default,
  fontSize: FONT_SIZES.medium,
};
