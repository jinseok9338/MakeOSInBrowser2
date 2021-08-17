import type { Processes } from "contexts/process/types";
import dynamic from "next/dynamic";

const processDirectory: Processes = {
  // FileExplorer: {
  //   backgroundColor: "#202020",
  //   Component: dynamic(() => import("components/apps/FileExplorer")),
  //   icon: "/icons/explorer.png",
  //   title: "File Explorer",
  // },
  // JSDOS: {
  //   autoSizing: true,
  //   backgroundColor: "#000",
  //   Component: dynamic(() => import("components/apps/JSDOS")),
  //   icon: "/icons/jsdos.png",
  //   lockAspectRatio: true,
  //   title: "js-dos v7",
  // },
  // Ruffle: {
  //   backgroundColor: "#000",
  //   Component: dynamic(() => import("components/apps/Ruffle")),
  //   defaultSize: {
  //     height: 400,
  //     width: 550,
  //   },
  //   icon: "/icons/ruffle.png",
  //   title: "Ruffle",
  // },
  // V86: {
  //   autoSizing: true,
  //   backgroundColor: "#000",
  //   Component: dynamic(() => import("components/apps/V86")),
  //   icon: "/icons/v86.png",
  //   title: "Virtual x86",
  // },
  // Webamp: {
  //   Component: dynamic(() => import("components/apps/Webamp")),
  //   hasWindow: false,
  //   icon: "/icons/webamp.png",
  //   singleton: true,
  //   title: "Webamp",
  // },
  HelloWorld: {
    Component: dynamic(() => import("components/app/HelloWorld")),
    hasWindow: true,
    icon: "/favicon.ico",
    title: "hello World",
  },
};

export default processDirectory;
