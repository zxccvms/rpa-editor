import { getPath } from "./utils"

const windowConfig = [
  {
    name: "main",
    html: getPath("./src/renderer/main/index.html"),
    entry: getPath("./src/renderer/main/index.tsx")
  },
  {
    name: "elementEditor",
    html: getPath("./src/renderer/elementEditor/index.html"),
    entry: getPath("./src/renderer/elementEditor/index.tsx")
  }
]

export default windowConfig
