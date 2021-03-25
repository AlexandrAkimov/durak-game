export const addCard = (to, from, entity, bank) => {
    if (to.length >= 6 || !from.length) {
        return
    }
    let cards
    if (from.length < (6 - to.length)) {
        cards = from.slice(-from.length)
        entity.set([...to, ...cards])
        bank.set([])
    } else {
        cards = from.slice(-(6 - to.length))
        entity.set([...to, ...cards])
        bank.set(from.slice(0, from.length - (6 - to.length)))
    }
}