import React, { useEffect, useState } from 'react';
import {
    Button, View, Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Image,
    SafeAreaView,
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Voice from '@react-native-voice/voice';

const styles = StyleSheet.create({
    container: {
        flex: 0,
        padding: 5,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff'
    },
    Instra: {
        backgroundColor: '#666',
        textAlign: 'center',
        padding: 10,
    },
    textDesg: {
        padding: 5,
        paddingTop: 25

    },

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
        // flexDirection: 'row',
        // alignItems: 'center',
        // padding: 10,
        // borderTopWidth: 1,
        // borderColor: '#ccc',
        // backgroundColor: 'white',
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



const VoiceControl = () => {
    const [messages, setMessages] = useState([]);
    const [isListening, setIsListening] = useState(false);
    const [recognizedText, setRecognizedText] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        Voice.onSpeechStart = onSpeechStart;
        Voice.onSpeechEnd = stopListing;
        Voice.onSpeechResults = onSpeechResults;
        Voice.onSpeechError = error => console.log('onSpeechError', error)
        return () => {
            Voice.destroy().then(Voice.removeAllListeners);
        };

    }, [])

    const onSpeechStart = (event) => {
        console.log("Recording started....", event)

    }

    // const onSpeechEnd = () =>{

    // }

    const onSpeechResults = (event) => {
        console.log("Result..", event);
        const text = event.value[0];
        setRecognizedText(text)
        switch(text) {
            case "I agree":
                console.log("Navigating to Home page")
                navigation.navigate('Home');
                stopListing();
              break;
            case "One":
                console.log("Navigating to Home page")
                stopListing();
                navigation.navigate('My Symptom Summary');
              break;
            case "Two":
                console.log("Navigating to Home page")
                navigation.navigate('Self Help Library');
                stopListing();
              break;
            case "Three":
                console.log("Navigating to Home page")
                navigation.navigate('Partial Symptom Assessment');
                stopListing();
              break;
            case "Four":
                console.log("Navigating to Home page")
                navigation.navigate('Full Symptom Assessment');
                stopListing();
              break;
            case "Back":
                console.log("Navigating to Home page")
                stopListing();
                navigation.navigate('Home');
                
              break;
            default:
                console.log("Naviagation not found!");
                stopListing();
          }

        // if (text == "Hello") {
        //     console.log("Navigating to Home page")
        //     navigation.navigate('My Symptom Summary');
        //     stopListing();
        //     // setTimeout(() => {
        //     //     onSpeechStart();
        //     //     console.log("Starting speed again!")
        //     // }, 40000);
        // } else {
        //     console.log("Naviagation not found!");
        //     stopListing();
        // }
    }

    const startListing = async () => {
        setIsListening(true);
        try {
            await Voice.start('en-GB');
        } catch (error) {
            console.log('StartListing Error', error)
        }
    }

    const stopListing = async () => {
        console.log("Stop listing....")
        setIsListening(true);
        try {
            await Voice.stop();
            Voice.removeAllListeners();
            await Voice.destroy();
            setIsListening(false)
        } catch (error) {
            console.log('stopListing Error', error)
        }
    }

    const sendMessage = () => {
        console.log("Click send message")
        if (recognizedText) {
            setMessages([...messages, { text: recognizedText, sender: 'user' }]);
            setRecognizedText('');
        }
    };

    return (
        <View
            style={[
                styles.container,
                {
                    flexDirection: 'column',
                },
            ]}>

            <View style={styles.container}>
                <SafeAreaView />
                <ScrollView contentContainerStyle={styles.messagesContainer}>
                    {messages.map((message, index) => (
                        <View
                            key={index}
                            style={[
                                styles.messageBubble,
                                {
                                    alignSelf:
                                        message.sender === 'user' ? 'flex-end' : 'flex-start',
                                    backgroundColor:
                                        message.sender === 'user' ? '#BB2525' : '#141E46',
                                },
                            ]}>
                            <Text style={styles.messageText}>{message.text}</Text>
                        </View>
                    ))}
                </ScrollView>
                <View style={styles.inputContainer}>
                    {/* <TextInput
                    style={styles.input}
                    placeholder="Type your message..."
                    value={recognizedText}
                    onChangeText={text => setRecognizedText(text)}
                    /> */}
                    <TouchableOpacity
                        onPress={() => isListening ? stopListing() : startListing()}
                        style={styles.voiceButton}>
                        {isListening ? (
                            <Text style={styles.voiceButtonText}>•••</Text>
                        ) : (
                            <Image
                                source={{
                                    uri: 'https://cdn-icons-png.flaticon.com/512/4980/4980251.png',
                                }}
                                style={{ width: 45, height: 45 }}
                            />
                        )}
                    </TouchableOpacity>
                    {/* <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
                    <Text style={styles.sendButtonText}>Send</Text>
                    </TouchableOpacity> */}
                </View>
            </View>
            {/* <View style={{ color: '#fff', marginTop: 30}}>
                    <Button
                        title="Next"
                        onPress={() => navigation.navigate('AssessSymptoms')}
                    />
            </View>  */}
        </View>
    );
}

export default VoiceControl;