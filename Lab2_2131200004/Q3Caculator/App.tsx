import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import styles from './style';

const App = () => {
  // State variables
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('');
  // Function to handle number inputs
  const handleNumberInput = num => {
    if (displayValue === '0') {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num);
    }
  };
  // Function to handle operator inputs
  const handleOperatorInput = operator => {
    setOperator(operator);
    setFirstValue(displayValue);
    setDisplayValue('0');
  };
  // Function to handle equal button press
  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);
    if (operator == '+') {
      setDisplayValue((num1 + num2).toString());
    } else if (operator == '-') {
      setDisplayValue((num1 - num2).toString());
    } else if (operator == '*') {
      setDisplayValue((num1 * num2).toString());
    } else if (operator == '/') {
      setDisplayValue((num1 / num2).toString());
    }
    setOperator(null);
    setFirstValue('');
  };
  // Function to handle clear button press
  const handleClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.displayValue}>{displayValue}</Text>
      <View>
        <View style={styles.collumn}>
          <Text style={styles.numbers} onPress={() => handleNumberInput('7')}>
            7
          </Text>
          <Text style={styles.numbers} onPress={() => handleNumberInput('8')}>
            8
          </Text>
          <Text style={styles.numbers} onPress={() => handleNumberInput('9')}>
            9
          </Text>
          <Text
            style={styles.operation}
            onPress={() => handleOperatorInput('/')}>
            ÷
          </Text>
        </View>
        <View style={styles.collumn}>
          <Text style={styles.numbers} onPress={() => handleNumberInput('4')}>
            4
          </Text>
          <Text style={styles.numbers} onPress={() => handleNumberInput('5')}>
            5
          </Text>
          <Text style={styles.numbers} onPress={() => handleNumberInput('6')}>
            6
          </Text>
          <Text
            style={styles.operation}
            onPress={() => handleOperatorInput('*')}>
            x
          </Text>
        </View>
        <View style={styles.collumn}>
          <Text style={styles.numbers} onPress={() => handleNumberInput('1')}>
            1
          </Text>
          <Text style={styles.numbers} onPress={() => handleNumberInput('2')}>
            2
          </Text>
          <Text style={styles.numbers} onPress={() => handleNumberInput('3')}>
            3
          </Text>
          <Text
            style={styles.operation}
            onPress={() => handleOperatorInput('-')}>
            -
          </Text>
        </View>
        <View style={styles.collumn}>
          <Text style={styles.zero} onPress={() => handleNumberInput('0')}>
            0
          </Text>
          <Text
            style={styles.operation}
            onPress={() => handleOperatorInput('+')}>
            +
          </Text>
          <Text style={styles.equal} onPress={handleEqual}>
            =
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.clear} onPress={handleClear}>
          {' '}
          C
        </Text>
      </View>
    </View>
  );
};
export default App;
