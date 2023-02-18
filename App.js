import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, Alert } from 'react-native';
import styles from './styles/Styles';

const BloodAlcoholCalculator = () => {
  const [weight, setWeight] = useState('');
  const [bottles, setBottles] = useState('');
  const [time, setTime] = useState('');
  const [isMale, setIsMale] = useState(true);
  const [grams, setGrams] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const calculate = () => {

    if (!weight) {
      Alert.alert('Error!', 'Please enter your weight.');
      return;
    }

    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - burning * time;
    const result = isMale ? gramsLeft / (weight * 0.7) : gramsLeft / (weight * 0.6);
    setGrams(result > 0 ? result : 0);
  };

  const containerStyles = [styles.container];
  const textStyles = [styles.text];

  if (isDarkMode) {
    containerStyles.push(styles.darkContainer);
    textStyles.push(styles.darkText);
  }

  return (
    <View style={containerStyles}>
      <Text style={styles.heading}>Alcometer</Text>
      <View style={styles.inputContainer}>
        <Text style={textStyles}>Weight (kg)</Text>
        <TextInput
          style={[styles.input, textStyles]}
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={textStyles}>Number of beer bottles</Text>
        <TextInput
          style={[styles.input, textStyles]}
          keyboardType="numeric"
          value={bottles}
          onChangeText={setBottles}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={textStyles}>Time passed since drinking (hours)</Text>
        <TextInput
          style={[styles.input, textStyles]}
          keyboardType="numeric"
          value={time}
          onChangeText={setTime}
        />
      </View>
      <View style={styles.switchContainer}>
        <Switch trackColor={{ true: '#f69edf', false: 'grey' }} value={isMale} onValueChange={setIsMale} />
        <Text style={styles.genderText}>{isMale ? 'Male' : 'Female'}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={calculate}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
      <Text style={textStyles}>Blood alcohol level:</Text>
      <Text style={[styles.result, isDarkMode ? styles.resultDark : null,
      grams < 1 ? styles.resultGreen : grams >= 1 && grams <= 2 ? styles.resultOrange : styles.resultRed]}>
        {grams.toFixed(2)}
      </Text>
      <View style={styles.toggleContainer}>
        <Text style={textStyles}>Dark mode:</Text>
        <Switch trackColor={{ true: '#f69edf', false: 'grey' }} value={isDarkMode} onValueChange={setIsDarkMode} />
      </View>
    </View>
  );
};

export default BloodAlcoholCalculator;