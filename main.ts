let vapor = 0
basic.clearScreen()
basic.forever(function () {
    vapor = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    basic.pause(100)
    serial.writeValue("vapor", pins.analogReadPin(AnalogPin.P0))
    pins.digitalWritePin(DigitalPin.P11, 0)
    if (vapor > 160) {
        pins.digitalWritePin(DigitalPin.P11, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
    } else if (vapor > 143) {
        pins.digitalWritePin(DigitalPin.P11, 0)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P13, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P13, 1)
    }
    basic.pause(1000)
})
