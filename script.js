function calculateBMI() {
    // Get height and weight values from input fields
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;

    // Validate input
    if (height === "" || weight === "") {
        alert("Please enter height and weight.");
        return;
    }

    if (isNaN(height) || isNaN(weight)) {
        alert("Height and weight must be numbers.");
        return;
    }

    // Convert height to meters and calculate BMI
    var heightMeters = height / 100;
    var bmi = weight / (heightMeters * heightMeters);

    // Display result with category information
    var result = "Your BMI is: " + bmi.toFixed(2) + "<br>";
    if (bmi < 18.5) {
        result += "You are underweight.";
    } else if (bmi >= 18.5 && bmi < 25) {
        result += "You are normal weight.";
    } else if (bmi >= 25 && bmi < 30) {
        result += "You are overweight.";
    } else {
        result += "You are obese.";
    }

    document.getElementById("result").innerHTML = result;
}