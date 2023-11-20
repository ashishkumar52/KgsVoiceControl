// In App.js in a new project

import React, {useEffect, useState} from 'react';
import { Button, View, Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  SafeAreaView, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import InstructionScreen from './screens/InstructionScreen';
// import Voice from '@react-native-voice/voice';
import { AssessSymptoms } from './screens/AssessSymptoms';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from './common/CustomHeaderButton'
import SymptomSummary from './screens/SymptomSummary';
import SelfHelpLibrary from './screens/SelfHelpLibrary';
import SymptomAssessMent from './screens/SymptomAssessMent';
const Stack = createNativeStackNavigator();


function App({ navigation }) {
  const [messages, setMessages] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');
  // const navigation = useNavigation();

  useEffect(()=>{
    // Voice.onSpeechStart = onSpeechStart;
    // Voice.onSpeechEnd = stopListing;
    // Voice.onSpeechResults = onSpeechResults;
    // Voice.onSpeechError = error => console.log('onSpeechError', error)
    // return () =>{
    //   Voice.destroy().then(Voice.removeAllListeners); 
    // };

  }, [])

  const onSpeechStart = (event) =>{
    console.log("Recording started....", event)

  }

  // const onSpeechEnd = () =>{
    
  // }

  const onSpeechResults = (event) =>{
    console.log("Result..", event);
    const text = event.value[0];
    setRecognizedText(text)
    if (text == "I agree"){
        console.log("Navigating to Home page")
        navigation.navigate('Home');
    } else{
      console.log("Naviagation not found!");
    }
  }

  const startListing = async () =>{
    setIsListening(true);
    try{
      await Voice.start('en-GB');
    } catch (error) {
      console.log('StartListing Error', error)
    }
  }

  const stopListing = async () =>{
    console.log("Stop listing....")
    setIsListening(true);
    try{
      await Voice.stop();
      Voice.removeAllListeners();
      setIsListening(false)
    } catch (error) {
      console.log('stopListing Error', error)
    }
  }

  const sendMessage = () => {
    console.log("Click send message")
    if (recognizedText) {
      setMessages([...messages, {text: recognizedText, sender: 'user'}]);
      setRecognizedText('');
    }
  };

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

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#FFF5E0',
  // },
  messagesContainer: {
    padding: 10,
  },
  messageBubble: {
    maxWidth: '70%',
    marginVertical: 5,
    borderRadius: 10,
    padding: 10,
  },
  messageText: {
    color: 'white',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#EFEFEF',
  },
  voiceButton: {
    marginLeft: 10,
    fontSize: 24,
  },
  voiceButtonText: {
    fontSize: 24,
    height: 45,
  },
  sendButton: {
    marginLeft: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#FF6969',
    borderRadius: 20,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 16,
  },
});


export default App;