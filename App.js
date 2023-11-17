// In App.js in a new project

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import InstructionScreen from './screens/InstructionScreen';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from './common/CustomHeaderButton'
import SymptomSummary from './screens/SymptomSummary';
import SelfHelpLibrary from './screens/SelfHelpLibrary';
import SymptomAssessMent from './screens/SymptomAssessMent';
import { AssessSymptoms } from './screens/AssessSymptoms';
const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Instruction'>
        <Stack.Screen
          options={{
            headerTitle: () => (
              <View style={{flexDirection:'column'}}>
              <Text style={{fontSize:40, fontWeight:'bold',color: '#69bfce'}}>
              NMS
            </Text>
            </View>
            ),
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="Menu" iconName='ios-menu' onPress={() => {}}/>
              </HeaderButtons>
            ),
          }} name="Home" component={HomeScreen} />
        <Stack.Screen name="Instruction" component={InstructionScreen} />
        <Stack.Screen name="My Symptom Summary" component={AssessSymptoms} />
        <Stack.Screen name="Self Help Library" component={AssessSymptoms} />
        <Stack.Screen name="Partial Symptom Assessment" component={AssessSymptoms} />
        <Stack.Screen name="Full Symptom Assessment" component={AssessSymptoms} />
        <Stack.Screen name="AssessSymptoms" component={AssessSymptoms} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;