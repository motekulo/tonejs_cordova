/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

document.addEventListener("deviceready", function(event) {

    var button = document.getElementById("mono_synth");
    button.addEventListener('click', showMonoSynth);
    //var mkeyboard = document.getElementById("keyboard");


});


var showMonoSynth = function (event) {

    var keyboard = new QwertyHancock({
        id: "keyboard",
//        width: document.getElementById("#Content").width(),
        width: 600,
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
        "oscillator" : {
            "type" : "square"
        },
        "envelope" : {
            "attack" : 0.1
        }
    }).toMaster();

};


