import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === '' || password === '') {
      Alert.alert('Error', 'Please enter both username and password.');
    } else {
      // Here you can add your authentication logic
      Alert.alert('Success', `Welcome, ${username}!`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        value={password}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Center horizontally
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    width: 200, // Smaller input box width
    height: 40, // Slightly smaller height
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 10, // Less padding due to smaller input size
    marginBottom: 15, // Reduced margin for more compact layout
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 8,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 25,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});


export default LoginScreen;

