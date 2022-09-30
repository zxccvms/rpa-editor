import path from "path"

export const root = path.join(__dirname, "..")
export const getPath = (relativePath: string) => path.join(root, relativePath)
