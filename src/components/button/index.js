import propsRender from "../../utils/htmlPropsRender"
import templateFunction from "./index.hbs"
import "./index.styl"

const mountButtonComponent = propsRender(templateFunction)

export default mountButtonComponent
