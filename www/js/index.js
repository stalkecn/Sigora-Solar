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
/*if(document.getElementById('selectchoice').value == "Qcell")*/
/*{*/
function solve(irradience, temperature, modules) {
    return 30.79 * modules * (irradience / 1000) * (1 + (-0.42 * (temperature -25)));
}

function handleCalculate() {
    var irradience = parseFloat(document.getElementById('calc-irradience').value);
    var temperature = parseFloat(document.getElementById('calc-temperature').value);
    var modules = parseFloat(document.getElementById('calc-modules').value);
    var answer = solve(irradience, temperature, modules);
    document.getElementById('calc-answer').value = answer.toString();
}

window.onload = function () { // when the window has loaded
    document.getElementById('do-calculate').addEventListener('click', handleCalculate);
};
/*if(document.getElementById('selectchoice').value == "SolarWorld")
    {
    function solve(irradiance, temperature, number_of_modules) { 
    return (irradiance / 1000) * 36.8 * number_of_modules * (1-(-0.43(temperature-25)));
}

function handleCalculate() {
    var irradiance = parseFloat(document.getElementById('calc-Irradieance').value);
    var temperature = parseFloat(document.getElementById('calc-Temperature').value);
    var number_of_modules = parseFloat(document.getElementById('calc-NumberofModules').value);
    var answer = solve(irradiance, temperature, number_of_modules);
    document.getElementById('calc-answer').value = answer.toString();
}

window.onload = function () { // when the window has loaded
    document.getElementById('do-calculate').addEventListener('click', handleCalculate);
}
};
