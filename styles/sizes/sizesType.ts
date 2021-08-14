export type sizes = {
  taskbar: {
    width: string;
    height: string;
    entry: {
      maxwidth: string;
      fontSize: string;
      borderSize: string;
      icon: {
        size: string;
      };
    };
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
    entry?: {
      maxWidth?: string;
      fontSize?: string;
      borderSize?: string;
      icon?: {
        size?: string;
      };
    };
  };
  startButton?: {
    // height is the same size as the taskbar
    width?: string;
  };
};
