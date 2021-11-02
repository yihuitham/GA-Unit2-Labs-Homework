import React from "react";
import { white, primary, secondary, success, warning, danger } from "../colors";
import useHover from "../useHoverHook";

export default function InlineStyle(props) {
  const [hoverRefPri, isHoveredPri] = useHover();
  const [hoverRefSec, isHoveredSec] = useHover();
  const [hoverRefSuc, isHoveredSuc] = useHover();

  const buttonStyles = {
    color: white,
    padding: "7px 14px",
    margin: "0 5px",
    borderRadius: "5px",
    border: "1px solid transparent",
  };

  const primaryStyles = {
    ...buttonStyles,
    backgroundColor: primary,
  };

  const secondaryStyles = {
    ...buttonStyles,
    backgroundColor: secondary,
  };

  const successStyles = {
    ...buttonStyles,
    backgroundColor: success,
  };

  const renderButtons = () => {
    return ["Primary", "Secondary", "Success"].map((d) => {
      let style = `${d.toLowerCase()}Styles`;
      let actualStyles;
      let buttonRef;
      let isHovered;
      switch (style) {
        case "primaryStyles":
          actualStyles = primaryStyles;
          buttonRef = hoverRefPri;
          isHovered = isHoveredPri;
          break;
        case "secondaryStyles":
          actualStyles = secondaryStyles;
          buttonRef = hoverRefSec;
          isHovered = isHoveredSec;
          break;
        case "successStyles":
          actualStyles = successStyles;
          buttonRef = hoverRefSuc;
          isHovered = isHoveredSuc;
          break;
        default:
          return "";
      }
      return (
        <button
          ref={buttonRef}
          style={{
            ...actualStyles,
            backgroundColor: isHovered ? danger : actualStyles.backgroundColor,
          }}
        >
          {d}
        </button>
      );
    });
  };

  return (
    <div style={{ color: "red" }}>
      <h2>Inline Styles With Hooks</h2>
      {renderButtons()}
    </div>
  );
}
