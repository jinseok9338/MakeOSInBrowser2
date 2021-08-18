import { useFileSystem } from "contexts/fileSystem";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const StyledFileInput = styled.input.attrs({
  type: "file",
})`
  display: none;
`;

const FileInput = (): JSX.Element => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { setFileInput } = useFileSystem();

  useEffect(() => {
    if (inputRef.current) setFileInput(inputRef.current);
  }, [setFileInput]);

  return <StyledFileInput ref={inputRef} />;
};

export default FileInput;
