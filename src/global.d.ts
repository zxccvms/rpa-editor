import * as ReactDOMClient from "@types/react-dom/client"

declare global {
  declare module "*.png" {
    var png: string
    export default png
  }

  declare module "*.css" {
    var css: Record<string, string>
    export default css
  }

  declare module "*.less" {
    var less: Record<string, string>
    export default less
  }

  declare namespace React {}
  declare namespace ReactDOM {
    export var createRoot: typeof ReactDOMClient.createRoot
    export var hydrateRoot: typeof ReactDOMClient.hydrateRoot
  }
}
