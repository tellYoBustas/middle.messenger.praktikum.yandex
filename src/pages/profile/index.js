import { mountInputSettingsComponent } from "./components"
import {
    mountButtonComponent,
    mountButtonIconComponent,
    mountLinkComponent,
} from "../../components"
import propsRender from "../../utils/htmlPropsRender"
import urlParsing from "../../utils/urlParsing"
import templateFunction from "./index.hbs"
import "./index.styl"

const currentHref = urlParsing()

function modalToggle() {
    const modalOn = document.querySelector(".profile-page__avatar-button")
    const modal = document.querySelector(".profile-page__modal")
    const modalOff = document.querySelector(".profile-page__modal-background")

    modalOn.addEventListener("click", () => {
        modal.className = "profile-page__modal modal"
    })

    modalOff.addEventListener("click", () => {
        modal.className = "profile-page__modal modal_hidden"
    })
}

if (currentHref === "profile" || currentHref === "profile/") {
    propsRender(templateFunction)("#root", { nonEditable: true })

    mountButtonIconComponent(
        ".profile-page__navigation > nav",
        { arrowIcon: true },
        ["profile-page__navigation-button"]
    )

    mountButtonComponent(".profile-page__modal-form", {
        buttonText: "Сохранить",
    })

    mountInputSettingsComponent(".profile-page__form", {
        disabled: true,
        inputType: "email",
        inputName: "email",
        inputPlaceholder: "Почта",
    })
    mountInputSettingsComponent(".profile-page__form", {
        disabled: true,
        inputType: "text",
        inputName: "login",
        inputPlaceholder: "Логин",
    })
    mountInputSettingsComponent(".profile-page__form", {
        disabled: true,
        inputType: "text",
        inputName: "first_name",
        inputPlaceholder: "Имя",
    })
    mountInputSettingsComponent(".profile-page__form", {
        disabled: true,
        inputType: "text",
        inputName: "second_name",
        inputPlaceholder: "Фамилия",
    })
    mountInputSettingsComponent(".profile-page__form", {
        disabled: true,
        inputType: "text",
        inputName: "display_name",
        inputPlaceholder: "Имя в чате",
    })
    mountInputSettingsComponent(
        ".profile-page__form",
        {
            disabled: true,
            inputType: "tel",
            inputName: "phone",
            inputPlaceholder: "Телефон",
        },
        ["input-settings-field_last-child"]
    )

    mountLinkComponent(
        ".profile-page",
        { linkHref: "profile/info", linkText: "Изменить данные" },
        ["profile-page__link"]
    )
    mountLinkComponent(
        ".profile-page",
        { linkHref: "profile/password", linkText: "Изменить пароль" },
        ["profile-page__link"]
    )

    modalToggle()
}

if (currentHref === "password" || currentHref === "password/") {
    propsRender(templateFunction)("#root")

    mountButtonIconComponent(
        ".profile-page__navigation > nav",
        { arrowIcon: true },
        ["profile-page__navigation-button"]
    )

    mountButtonComponent(".profile-page__modal-form", {
        buttonText: "Сохранить",
    })

    mountInputSettingsComponent(".profile-page__form", {
        disabled: false,
        inputType: "password",
        inputName: "oldPassword",
        inputPlaceholder: "Старый пароль",
    })
    mountInputSettingsComponent(".profile-page__form", {
        disabled: false,
        inputType: "password",
        inputName: "newPassword",
        inputPlaceholder: "Новый пароль",
    })
    mountInputSettingsComponent(
        ".profile-page__form",
        {
            disabled: false,
            inputType: "password",
            inputName: "",
            inputPlaceholder: "Повторите новый пароль",
        },
        ["input-settings-field_last-child"]
    )

    mountButtonComponent(".profile-page__form", { buttonText: "Сохранить" }, [
        "profile-page__form-button",
    ])

    modalToggle()
}

if (currentHref === "info" || currentHref === "info/") {
    propsRender(templateFunction)("#root")

    mountButtonIconComponent(
        ".profile-page__navigation > nav",
        { arrowIcon: true },
        ["profile-page__navigation-button"]
    )

    mountButtonComponent(".profile-page__modal-form", {
        buttonText: "Сохранить",
    })

    mountInputSettingsComponent(".profile-page__form", {
        disabled: false,
        inputType: "email",
        inputName: "email",
        inputPlaceholder: "Почта",
    })
    mountInputSettingsComponent(".profile-page__form", {
        disabled: false,
        inputType: "text",
        inputName: "login",
        inputPlaceholder: "Логин",
    })
    mountInputSettingsComponent(".profile-page__form", {
        disabled: false,
        inputType: "text",
        inputName: "first_name",
        inputPlaceholder: "Имя",
    })
    mountInputSettingsComponent(".profile-page__form", {
        disabled: false,
        inputType: "text",
        inputName: "second_name",
        inputPlaceholder: "Фамилия",
    })
    mountInputSettingsComponent(".profile-page__form", {
        disabled: false,
        inputType: "text",
        inputName: "display_name",
        inputPlaceholder: "Имя в чате",
    })
    mountInputSettingsComponent(
        ".profile-page__form",
        {
            disabled: false,
            inputType: "tel",
            inputName: "phone",
            inputPlaceholder: "Телефон",
        },
        ["input-settings-field_last-child"]
    )

    mountButtonComponent(".profile-page__form", { buttonText: "Сохранить" }, [
        "profile-page__form-button",
    ])

    modalToggle()
}
