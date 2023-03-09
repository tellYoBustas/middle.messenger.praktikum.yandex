import propsRender from "../../utils/htmlPropsRender"
import templateFunction from "./index.hbs"
import { mountLinkComponent } from "../../components"
import "./index.styl"
import urlParsing from "../../utils/urlParsing"

const currentHref = urlParsing()

if (currentHref === "404" || currentHref === "404/") {
    propsRender(templateFunction)("#root", {
        errorCode: "404",
        errorText: "Не туда попали",
    })
    mountLinkComponent(".error-page", {
        linkHref: "chat",
        linkText: "Назад к чатам",
    })
}

if (currentHref === "500" || currentHref === "500/") {
    propsRender(templateFunction)("#root", {
        errorCode: "500",
        errorText: "Мы уже фиксим",
    })
    mountLinkComponent(".error-page", {
        linkHref: "chat",
        linkText: "Назад к чатам",
    })
}
