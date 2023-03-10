import propsRender from "../../utils/htmlPropsRender"
import templateFunction from "./index.hbs"
import "./index.styl"
import urlParsing from "../../utils/urlParsing"
import {
    mountButtonIconComponent,
    mountInputFullComponent,
} from "../../components"

const currentHref = urlParsing()

if (currentHref === "chat" || currentHref === "chat/") {
    propsRender(templateFunction)("#root")
    mountButtonIconComponent(".chat-page__navigation", { burgerIcon: true }, [
        "chat-page__button",
    ])
    mountInputFullComponent(
        ".chat-page__navigation",
        { inputType: "text", inputName: "search", inputPlaceholder: "Поиск" },
        ["chat-page__navigation-input"]
    )
    mountButtonIconComponent(
        ".chat-page__user-info-wrapper",
        { threeDotsIcon: true },
        ["chat-page__button", "chat-page__user-options"]
    )
    mountButtonIconComponent(".chat-page__form-wrapper", { pickIcon: true }, [
        "chat-page__button",
    ])
    mountInputFullComponent(
        ".chat-page__form-wrapper",
        {
            inputType: "text",
            inputName: "message",
            inputPlaceholder: "Сообщение",
        },
        ["chat-page__form-input"]
    )
    mountButtonIconComponent(".chat-page__form-wrapper", { arrowIcon: true }, [
        "chat-page__button",
        "chat-page__button_blue",
    ])
}
