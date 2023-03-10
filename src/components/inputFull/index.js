import propsRender from "../../utils/htmlPropsRender"
import templateFunction from "./index.hbs"
import "./index.styl"

const mountInputFullComponent = propsRender(templateFunction)

export default mountInputFullComponent
