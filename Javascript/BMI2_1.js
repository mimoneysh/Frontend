function bmiCalculator (weight, height) {
    var bmi = (weight/(height*height));
    console.log(bmi);
    if (bmi < 18.5) {
        return "Your BMI is "+bmi+", so you are underweight.";
    } 
    else if (bmi>=18.5 && bmi<=24.9){
        return "Your BMI is "+bmi+", so you have a normal weight.";
    }
    else if (bmi > 24.9) {
        return "Your BMI is "+bmi+", so you are overweight.";
    }
    return interpretation;
}

alert(bmiCalculator (83, 1.8));