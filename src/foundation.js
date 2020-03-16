// @flow

const palette = {
  product: {
    light: "#ECF8F7",
    lightHover: "#D6F0EE",
    lightActive: "#C0E8E4",
    normal: "#00A991",
    normalHover: "#009882",
    normalActive: "#008F7B",
    dark: "#007F6D",
    darkHover: "#007060",
    darkActive: "#006657",
    darker: "#005C4E",
  },
  white: {
    normal: "#FFFFFF",
    normalHover: "#F1F4F7",
    normalActive: "#E7ECF1",
  },
  cloud: {
    light: "#F5F7F9",
    lightHover: "#E5EAEF",
    lightActive: "#D6DEE6",
    normal: "#EFF2F5",
    normalHover: "#DCE3E9",
    normalActive: "#CAD4DE",
    dark: "#E8EDF1",
  },
  ink: {
    lighter: "#BAC7D5",
    lighterHover: "#A6B6C8",
    lighterActive: "#94A8BE",
    light: "#5F738C",
    lightHover: "#52647A",
    lightActive: "#465567",
    normal: "#252A31",
    normalHover: "#181B20",
    normalActive: "#0B0C0F",
  },
  orange: {
    light: "#FDF0E3",
    lightHover: "#FAE2C7",
    lightActive: "#F8D3AB",
    normal: "#E98305",
    normalHover: "#DC7C05",
    normalActive: "#CD7304",
    dark: "#A25100",
    darkHover: "#8F4700",
    darkActive: "#753A00",
    darker: "#803F00",
  },
  red: {
    light: "#FAEAEA",
    lightHover: "#F4D2D2",
    lightActive: "#EEB9B9",
    normal: "#D21C1C",
    normalHover: "#B91919",
    normalActive: "#9D1515",
    dark: "#970C0C",
    darkHover: "#890B0B",
    darkActive: "#6D0909",
    darker: "#760909",
  },
  green: {
    light: "#EBF4EC",
    lightHover: "#D7EAD9",
    lightActive: "#C3DFC7",
    normal: "#28A138",
    normalHover: "#238B31",
    normalActive: "#1D7228",
    dark: "#2B7336",
    darkHover: "#25642F",
    darkActive: "#1F5126",
    darker: "#235C2B",
  },
  blue: {
    light: "#E8F4FD",
    lightHover: "#D0E9FB",
    lightActive: "#B4DBF8",
    normal: "#0172CB",
    normalHover: "#0161AC",
    normalActive: "#01508E",
    dark: "#005AA3",
    darkHover: "#004F8F",
    darkActive: "#003E70",
    darker: "#004680",
  },
  social: {
    facebook: "#3B5998",
    facebookHover: "#385490",
    facebookActive: "#354F88",
  },
};

const base = {
  fontFamily:
    '"Roboto", -apple-system, ".SFNSText-Regular", "San Francisco", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif',
  fontSizeSm: "12px",
  fontSizeMd: "14px",
  fontSizeLg: "16px",
  borderRadius: "3px",
  sizeSm: "16px",
  sizeMd: "24px",
  sizeLg: "32px",
  sizeXl: "44px",
  size2xl: "52px",
  opacitySmall: "0.3",
  opacityMedium: "0.5",
  opacityLarge: "0.8",
  fontWeightNormal: "400",
  fontWeightMedium: "500",
  fontWeightBold: "700",
  space2xs: "4px",
  spaceXs: "8px",
  spaceSm: "12px",
  spaceMd: "16px",
  spaceLg: "24px",
  spaceXl: "32px",
  space2xl: "40px",
  space3xl: "52px",
  durationFast: "0.15s",
  durationNormal: "0.3s",
  durationSlow: "0.4s",
  transitionDefault: "ease-in-out",
  lineHeight: "1.4",
};

const foundation = { palette, base };

export default foundation;
