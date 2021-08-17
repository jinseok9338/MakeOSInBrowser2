import { useFileSystem } from "contexts/fileSystem";
import { extname } from "path";
import { useEffect, useState } from "react";
import { IMAGE_FILE_EXTENSIONS } from "utils/constants";
import { getShortCut } from "utils/fileFunctions";

type FileInfo = {
  icon: string;
  pid: string;
};

const getProcessByFileExtension = (_extension: string) => "";

const useFileInfo = (path: string) => {
  const [icon, setIcon] = useState("");
  const [pid, setPid] = useState("");
  const { fs } = useFileSystem();

  useEffect(() => {
    if (fs) {
      const extension = extname(path);
      if (extension === ".url") {
        getShortCut(path, fs).then(({ URL, IconFile }) => {
          setIcon(IconFile);
          setPid(URL);
        });
        // Do shortCut Stuff
      } else if (IMAGE_FILE_EXTENSIONS.has(extension)) {
        setIcon(path);
        setPid("ImageViewer");
      } else {
        setPid(getProcessByFileExtension(extension));
      }
    }
  }, [fs, path]);
  return {
    icon,
    pid,
  };
};

export default useFileInfo;
