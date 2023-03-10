function htmlPropsRender(
    selector,
    props = {},
    classNames = [],
    templateFunction
) {
    const source = {
        classNames: " " + classNames.join(" "),
    }

    for (const [key, value] of Object.entries(props)) {
        source[key] = value
    }

    const htmlTemplate = templateFunction(source)
    const nodeToMount = document.querySelector(selector)

    if (nodeToMount) nodeToMount.innerHTML += htmlTemplate
}

export default function propsRender(templateFunction) {
    return (selector, props, classNames) =>
        htmlPropsRender(selector, props, classNames, templateFunction)
}
