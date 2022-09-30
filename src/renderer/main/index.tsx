import style1 from "./index.module.less"
import A from "./A"
import "./index.css"
import "resources/css/global.css"

const App: React.FC<{}> = props => {
  return (
    <div>
      <img src={"../resources/1.png"} />
      <div className={style1.bg1}></div>
      <A />
    </div>
  )
}

const rootDom = document.querySelector("#root")
const root = ReactDOM.createRoot(rootDom)
root.render(<App />)
