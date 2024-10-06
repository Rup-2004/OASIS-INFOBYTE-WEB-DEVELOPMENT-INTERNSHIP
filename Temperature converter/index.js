function convertTemp() {
    let tempValue = parseFloat(document.getElementById("temp-input").value);
    let fromUnit = document.getElementById("from-unit").value;
    let toUnit = document.getElementById("to-unit").value;
    let result;

    if (isNaN(tempValue)) {
        document.getElementById("result").innerHTML = "Please enter a valid temperature!";
        return;
    }

    if (fromUnit === toUnit) {
        result = tempValue;
    } else {
        if (fromUnit === "celsius") {
            if (toUnit === "fahrenheit") {
                result = (tempValue * 9/5) + 32;
            } else if (toUnit === "kelvin") {
                result = tempValue + 273.15;
            }
        } else if (fromUnit === "fahrenheit") {
            if (toUnit === "celsius") {
                result = (tempValue - 32) * 5/9;
            } else if (toUnit === "kelvin") {
                result = ((tempValue - 32) * 5/9) + 273.15;
            }
        } else if (fromUnit === "kelvin") {
            if (toUnit === "celsius") {
                result = tempValue - 273.15;
            } else if (toUnit === "fahrenheit") {
                result = ((tempValue - 273.15) * 9/5) + 32;
            }
        }
    }

    document.getElementById("result").innerHTML = `Converted Temperature: ${result.toFixed(2)} ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}`;
}
