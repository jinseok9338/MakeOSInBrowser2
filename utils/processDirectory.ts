import dynamic from "next/dynamic";
import type { Processes } from "types/contexts/process";

const processDirectory: Processes = {
  HelloWorld: {
    Component: dynamic(() => import("components/app/HelloWorld")),
    hasWindow: true,
    icon: "/favicon.ico",
    title: "hello World",
  },
};

export default processDirectory;
