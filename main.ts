let contador = 0
basic.forever(function () {
    basic.showNumber(contador)
    contador += 1
    basic.pause(1000)
    if (contador > 20) {
        contador = 0
    }
})
