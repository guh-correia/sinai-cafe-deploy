export class databaseMemory {
    #coffees = new Map()
    #id = 0

    create(coffee) {
        this.#id += 1
        this.#coffees.set(this.#id, coffee)
    }

    list() {
        return Array.from(this.#coffees.entries()).map((coffeeArray) => {
            const coffeeId = coffeeArray[0]
            const coffeeItens = coffeeArray[1]

            return {
                coffeeId,
                ...coffeeItens
            }
        })  
    }

    patch(id) {
        const pedidoAtual = this.#coffees.get(id)
        this.#coffees.set(id, { ...pedidoAtual, status: 1 })
    }
}