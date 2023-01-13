export const decorate = (clazz, handler) => {
    Object.keys(handler).forEach(property => {      // Object.keys(handler) Retorna um array com todas as propriedades do objeto handler
        const decorators = handler[property]
        decorators.reverse().forEach(decorator => {
            const method = clazz.prototype[property]
            clazz.prototype[property] = function(...args) {
                return decorator(method.bind(this), property, args)
            }
        })
    })        
}