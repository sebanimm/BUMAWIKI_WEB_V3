import { style } from "@vanilla-extract/css";
import { flex, font, theme } from "@/styles";

export const body = style({
  ...flex.COLUMN_FLEX,
});

export const container = style({
  position: "sticky",
  width: "250px",
  height: "502px",
  background: theme.white,
  marginTop: "20px",
  marginRight: "20px",
  border: `2px solid ${theme.gray}`,
  borderTop: "none",
  top: "74px",
});

export const titleBox = style({
  backgroundColor: theme.primary,
  border: `2px solid ${theme.gray}`,
  borderLeft: "none",
  borderRight: "none",
  width: "100%",
  height: "46px",
  ...flex.VERTICAL,
});

export const titleText = style({
  marginLeft: "20px",
  color: theme.white,
  ...font.H5,
});

export const docs = style({
  width: "100%",
  height: "38px",
  backgroundColor: theme.white,
  border: `2px solid ${theme.gray}`,
  borderLeft: "none",
  borderRight: "none",
  borderTop: "none",
  ...flex.VERTICAL,

  ":hover": {
    opacity: 0.8,
  },
});

export const docsName = style({
  color: theme.primary,
  marginLeft: "14px",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
  width: "70%",
  ...font.H6,

  ":hover": {
    textDecoration: "underline",
  },
});

export const docsLastModified = style({
  marginLeft: "auto",
  marginRight: "14px",
  color: theme.boldgray,
  ...font.caption,
});

export const pageBox = style({
  ...flex.FLEX,
});

export const pageButton = style({
  width: "56px",
  height: "24px",
  backgroundColor: theme.white,
  margin: "6px 2px",
  border: `2px solid ${theme.gray}`,
  borderRadius: "3px",
  ...flex.CENTER,
});

export const pageButtonText = style({
  color: theme.primary,
  fontWeight: 600,
  fontSize: "12px",
  gap: "2.5px",
  ...flex.CENTER,
});
