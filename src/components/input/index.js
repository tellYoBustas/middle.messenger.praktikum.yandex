import propsRender from "../../utils/htmlPropsRender"
import templateFunction from "./index.hbs"
import "./index.styl"

const mountInputComponent = propsRender(templateFunction)

export default mountInputComponent
