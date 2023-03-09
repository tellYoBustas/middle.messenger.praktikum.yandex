const regex = /(http|https):\/\/([^\n]+)\/([^\n]+)\/*?/

export default function () {
    const route = window.location.href.match(regex)[3]
    return route
}
