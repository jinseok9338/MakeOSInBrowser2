export type sizes = {
  taskbar: {
    width: string;
    height: string;
  };
  startButton: {
    // height is the same size as the taskbar
    width: string;
  };
};

export type sizesOptions = {
  taskbar?: {
    width?: string;
    height?: string;
  };
  startButton?: {
    // height is the same size as the taskbar
    width?: string;
  };
};
