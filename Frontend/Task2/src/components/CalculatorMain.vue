<template>
  <div>
    <InputDisplay :value="input" @input="updateInput" @calculate="calculate" />
    <CalculatorGrid @button-click="handleButtonClick" />
    <div v-if="result !== null">
      Result: {{ result }}
    </div>

    <!-- Display an error message -->
    <div v-if="error">
      Error: {{ error }}
    </div>
    <CalculationLog :log="calculationLog" />
  </div>
</template>

<script>
import axios from 'axios';
import CalculatorGrid from './CalculatoreGrid.vue';
import InputDisplay from './InputDisplay.vue';
import CalculationLog from './CalculationLog.vue';

export default {
  components: {
    CalculatorGrid,
    InputDisplay,
    CalculationLog
  },
  data() {
    return {
      operation: '',
      operands: [],
      input: "",
      result: null,
      error: null,
      calculationLog: []
    };
  },
  methods: {
    updateInput(value) {
      this.input = value;
    },
    handleButtonClick(button) {
      if (button === "=") {
        this.calculate();
      } else if (button === "C") {
        this.input = "";
      } else {
        this.input += button;
      }
    },
    parseInput() {
      const operators = ['+', '-', '*', '/'];
      let operator;

      for (let op of operators) {
        if (this.input.includes(op)) {
          operator = op;
          break;
        }
      }

      const [num1, num2] = this.input.split(operator).map(Number);

      return { num1, num2, operator };
    },

    async calculate() {
      try {
        const { num1, num2, operator } = this.parseInput();

        const payload = {
        num1,
        num2,
        operator,
        };

        console.log('Sending JSON:', payload);
        const response = await axios.post('http://localhost:8081/calculate', {
          num1,
          num2,
          operator,
        });

        if (response.data.result) {
          this.result = response.data.result;
          this.error = null;
          this.calculationLog.push(`Calculated: ${num1} ${operator} ${num2} = ${this.result}`); 
        } else {
          this.error = response.data.error;
          this.result = null;
        }
      } catch (error) {
        this.error = 'An error occurred while calculating.';
        this.result = null;
        console.error(error);
      }
    },
  }
}
</script>
