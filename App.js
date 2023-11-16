// In App.js in a new project

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import InstructionScreen from './screens/InstructionScreen';
import { AssessSymptoms } from './screens/AssessSymptoms';


const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Instruction'>
        <Stack.Screen
          options={{
            headerTitle: () => (
              <Text>
                NMS
              </Text>
            ),
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Setting"
                color="#00cc00"
              />
            ),
          }} name="Home" component={HomeScreen} />
        <Stack.Screen name="Instruction" component={InstructionScreen} />
        <Stack.Screen name="AssessSymptoms" component={AssessSymptoms} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;