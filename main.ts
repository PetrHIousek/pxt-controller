radio.setGroup(231)
radio.setFrequencyBand(57)

input.onButtonPressed(Button.A, function() {
    radio.sendString("ABCD")
})



