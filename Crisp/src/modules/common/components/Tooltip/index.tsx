import Tippy from "@tippyjs/react";
import React, { JSXElementConstructor, ReactElement } from "react";
import "tippy.js/dist/svg-arrow.css";
import "tippy.js/dist/tippy.css";

import { TooltipPlacements, TooltipThemes } from "../../types/tooltip";
import "./styles.scss";

type TooltipProps = {
  tooltipContent: string | React.ReactNode;
  // Has to be any because of the way Tippy is typed
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
  theme?: TooltipThemes;
  placement?: TooltipPlacements;
  isInteractive?: boolean;
  arrow?: boolean;
};

const Tooltip: React.FC<TooltipProps> = ({
  tooltipContent,
  children,
  theme = TooltipThemes.Primary,
  placement = TooltipPlacements.Top,
  isInteractive = false,
  arrow = true,
}) => {
  return (
    <Tippy
      content={tooltipContent}
      duration={0}
      theme={theme}
      placement={placement}
      interactive={isInteractive}
      arrow={arrow}
    >
      {children}
    </Tippy>
  );
};

export default Tooltip;
