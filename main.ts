function avoid () {
    if (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) < 7) {
        cuteBot.motors(-30, 30)
    } else {
        cuteBot.motors(30, 30)
    }
}
let onoff = false
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        onoff = !(onoff)
    }
    if (onoff == true) {
        avoid()
        basic.showIcon(IconNames.Happy)
    } else {
        cuteBot.stopcar()
        basic.showIcon(IconNames.SmallSquare)
    }
    basic.pause(100)
})
