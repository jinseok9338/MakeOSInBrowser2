import styled, { createGlobalStyle } from "styled-components";
import React from "react";

const NoGlobalPointerEvents = createGlobalStyle`
  body {
    pointer-events: none;
  }
`;

const StyledSelectionComponent = styled.span`
  background-color: ${({ theme }) => theme.colors.highlightBackground};
  border: ${({ theme }) => `1px solid ${theme.colors.highlight}`};
  position: absolute;
  z-index: 2;
`;

const StyledSelection = (
  props: React.HTMLAttributes<HTMLSpanElement>
): JSX.Element => (
  <>
  <NoGlobalPointerEvents />
  < StyledSelectionComponent { ...props } />
    </>
);

export default StyledSelection;
