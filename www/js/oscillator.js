var osc = new Tone.Oscillator({
    "frequency" : 440,
    "volume" : -10
}).toMaster();

var mOscillator = function(){

    new Interface.Dragger({
       tone : osc,
        x : {
            param : "frequency",
            min : 60,
            max : 2000,
            exp : 2
        },
        y : {
            param : "volume",
            min : -40,
            max : 0
        },
        start : function(){
            osc.start();
            Tone.Master.volume.rampTo(0, 0.05);
        },
        end : function(){
            //so it doesn't click
            Tone.Master.volume.rampTo(-Infinity, 0.05);
        }
    });
};


