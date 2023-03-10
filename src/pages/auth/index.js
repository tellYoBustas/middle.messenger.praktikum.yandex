import {
    mountLinkComponent,
    mountInputComponent,
    mountButtonComponent,
} from "../../components"
import propsRender from "../../utils/htmlPropsRender"
import urlParsing from "../../utils/urlParsing"
import templateFunction from "./index.hbs"
import "./index.styl"

const currentHref = urlParsing()

if (currentHref === "authentication" || currentHref === "authentication/") {
    propsRender(templateFunction)("#root", { authStage: "Вход" })
    mountInputComponent(
        ".auth-page__form",
        { inputType: "text", inputName: "login", inputPlaceholder: "Логин" },
        ["auth-page__input"]
    )
    mountInputComponent(
        ".auth-page__form",
        {
            inputType: "password",
            inputName: "password",
            inputPlaceholder: "Пароль",
        },
        ["auth-page__input", "auth-page__input_last"]
    )
    mountButtonComponent(".auth-page__form", { buttonText: "Войти" }, [
        "auth-page__button",
    ])
    mountLinkComponent(".auth-page", {
        linkHref: "registration",
        linkText: "Нет аккаунта?",
    })
}

if (currentHref === "registration" || currentHref === "registration/") {
    propsRender(templateFunction)("#root", { authStage: "Регистрация" })
    mountInputComponent(
        ".auth-page__form",
        { inputType: "email", inputName: "email", inputPlaceholder: "Почта" },
        ["auth-page__input"]
    )
    mountInputComponent(
        ".auth-page__form",
        { inputType: "text", inputName: "login", inputPlaceholder: "Логин" },
        ["auth-page__input"]
    )
    mountInputComponent(
        ".auth-page__form",
        { inputType: "text", inputName: "first_name", inputPlaceholder: "Имя" },
        ["auth-page__input"]
    )
    mountInputComponent(
        ".auth-page__form",
        {
            inputType: "text",
            inputName: "second_name",
            inputPlaceholder: "Фамилия",
        },
        ["auth-page__input"]
    )
    mountInputComponent(
        ".auth-page__form",
        { inputType: "tel", inputName: "phone", inputPlaceholder: "Телефон" },
        ["auth-page__input"]
    )
    mountInputComponent(
        ".auth-page__form",
        {
            inputType: "password",
            inputName: "password",
            inputPlaceholder: "Пароль",
        },
        ["auth-page__input"]
    )
    mountInputComponent(
        ".auth-page__form",
        {
            inputType: "password",
            inputName: "",
            inputPlaceholder: "Пароль (ещё раз)",
        },
        ["auth-page__input", "auth-page__input_last"]
    )
    mountButtonComponent(
        ".auth-page__form",
        { buttonText: "Зарегистрироваться" },
        ["auth-page__button"]
    )
    mountLinkComponent(".auth-page", {
        linkHref: "authentication",
        linkText: "Войти",
    })
}
