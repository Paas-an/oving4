package no.ntnu.oving4;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*") // Replace with your Vue.js application's origin
@RestController
public class CalculatorController {

    @PostMapping("/calculate")
public @ResponseBody CalculationResult calculate(@RequestBody CalculationRequest request) {
    double result;

    switch (request.getOperator()) {
        case "+":
            result = request.getNum1() + request.getNum2();
            break;
        case "-":
            result = request.getNum1() - request.getNum2();
            break;
        case "*":
            result = request.getNum1() * request.getNum2();
            break;
        case "/":
            if (request.getNum2() != 0) {
                result = request.getNum1() / request.getNum2();
            } else {
                throw new IllegalArgumentException("Division by zero is not allowed.");
            }
            break;
        default:
            throw new IllegalArgumentException("Invalid operator: " + request.getOperator());
    }

    CalculationResult calculationResult = new CalculationResult();
    calculationResult.setResult(result);

    return calculationResult;
    }
}

