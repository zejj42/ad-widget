import COLORS from "../../constants/colors.js";
import FONT_SIZES from "../../constants/fontSizes.js";
import FONTS from "../../constants/fonts.js";

export const DEFAULT_PUBLISHER_OPTIONS = {
  publisherId: "taboola-templates",
  retries: 3,
  totalRecs: 4,
  displayRecOnFail: true,
  defaultImageSrc:
    "https://www.wpbeginner.com/wp-content/uploads/2017/08/fallbackthumbnail.png",
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
