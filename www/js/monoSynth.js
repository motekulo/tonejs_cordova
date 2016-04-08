var monoSynth = function (event) {

    var keyboard = new QwertyHancock({
        id: "content",
        width: document.body.clientWidth,
        //        width: 600,
        height: 150,
        octaves: Interface.isMobile ? 1.26 : 3,
        octaves: 2,
        startNote: "C3",
        whiteKeyColour: "white",
        blackKeyColour: "#1EDF3E",
        activeColour : "#3833ED"

    });
    keyboard.keyDown = function (note, frequency) {
        synth.triggerAttack(frequency);
    };
    keyboard.keyUp = function () {
        synth.triggerRelease();
    };

    var synth = new Tone.MonoSynth({
        "portamento" : 0.01,
        "oscillator" : {
            "type" : "square"
        },
        "envelope" : {
            "attack" : 0.005,
            "decay" : 0.2,
            "sustain" : 0.4,
            "release" : 1.4,
        },
        "filterEnvelope" : {
            "attack" : 0.005,
            "decay" : 0.1,
            "sustain" : 0.05,
            "release" : 0.8,
            "baseFrequency" : 300,
            "octaves" : 4
        }
    }).toMaster();
};


