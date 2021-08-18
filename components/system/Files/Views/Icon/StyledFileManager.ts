import type { StyledFileManagerProps } from "components/system/Files/Views";
import StyledWindow from "components/system/window/styledWindow";
import styled from "styled-components";

const StyledFileManager = styled.ol<StyledFileManagerProps>`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: ${({ theme }) =>
        `repeat(auto-fill, ${theme.sizes.fileManager.gridEntryWidth})`};
  grid-template-rows: ${({ theme }) =>
        `repeat(auto-fill, ${theme.sizes.fileManager.gridEntryHeight})`};
  height: ${({ theme }) => `calc(100% - ${theme.sizes.taskbar.height})`};
  padding: ${({ theme }) => theme.sizes.fileManager.padding};
  row-gap: ${({ theme }) => theme.sizes.fileManager.rowGap};

  li {
    pointer-events: ${({ selecting }) => (selecting ? "none" : "all")};
  }

  main > & {
    padding-bottom: 20px;
  }

  ${StyledWindow} & {
    grid-auto-flow: row;
  }
`;

export default StyledFileManager;
