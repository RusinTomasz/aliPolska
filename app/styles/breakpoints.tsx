interface Breakpoints {
  sm: "576px";
  md: "768px";
  lg: "992px";
  xl: "1200px";
}

const breakpoints: Breakpoints = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};

const up = (breakpoint: String) => {
  return `@media (min-width: calc(${breakpoint} + 1px))`;
};

const down = (breakpoint: String) => {
  return `@media (max-width: ${breakpoint})`;
};

const between = (breakpointMin: String, breakpointMax: String) =>
  `@media (max-width: ${breakpointMax}) and (min-width: calc(${breakpointMin} + 1px))`;

export { up, down, between, breakpoints };
