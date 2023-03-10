import propsRender from "../../utils/htmlPropsRender"
import templateFunction from "./index.hbs"
import "./index.styl"

const mountLinkComponent = propsRender(templateFunction)

export default mountLinkComponent
