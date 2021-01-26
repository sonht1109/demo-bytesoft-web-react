import { WOW } from 'wowjs'

export const wowInit = () => {
    const wow = new WOW({
        offset: 0,
        mobile: true,
        live: false
    })
    wow.init()
}