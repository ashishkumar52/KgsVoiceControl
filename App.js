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
                <Item title="Menu" iconName='ios-menu' onPress={() => {
                  navData.navigation.toggleDrawer()
                  }
                }/>
              </HeaderButtons>
            ),
          }} name="Home" component={HomeScreen} />
        <Stack.Screen name="Instruction" component={InstructionScreen} />
        <Stack.Screen name="My Symptom Summary" component={SymptomSummary} />
        <Stack.Screen name="Self Help Library" component={SelfHelpLibrary} />
        <Stack.Screen name="Partial Symptom Assessment" component={SymptomAssessMent} />
        <Stack.Screen name="Full Symptom Assessment" component={SymptomAssessMent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;