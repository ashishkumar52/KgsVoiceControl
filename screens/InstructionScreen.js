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
// import Voice from '@react-native-voice/voice';
import VoiceControl from '../common/VoiceControl';

const styles = StyleSheet.create({
    container: {
        flex: 0,
        padding: 20,
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



const InstructionScreen = () => {
    // const [messages, setMessages] = useState([]);
    // const [isListening, setIsListening] = useState(false);
    // const [recognizedText, setRecognizedText] = useState('');
    const navigation = useNavigation();

    // useEffect(() => {
    //     Voice.onSpeechStart = onSpeechStart;
    //     Voice.onSpeechEnd = stopListing;
    //     Voice.onSpeechResults = onSpeechResults;
    //     Voice.onSpeechError = error => console.log('onSpeechError', error)
    //     return () => {
    //         Voice.destroy().then(Voice.removeAllListeners);
    //     };

    // }, [])

    // const onSpeechStart = (event) => {
    //     console.log("Recording started....", event)

    // }

    // const onSpeechEnd = () =>{

    // }

    // const onSpeechResults = (event) => {
    //     console.log("Result..", event);
    //     const text = event.value[0];
    //     setRecognizedText(text)
    //     if (text == "I agree") {
    //         console.log("Navigating to Home page")
    //         navigation.navigate('Home');
    //         stopListing();
    //         // setTimeout(() => {
    //         //     onSpeechStart();
    //         //     console.log("Starting speed again!")
    //         // }, 40000);
    //     } else {
    //         console.log("Naviagation not found!");
    //     }
    // }

    // const startListing = async () => {
    //     setIsListening(true);
    //     try {
    //         await Voice.start('en-GB');
    //     } catch (error) {
    //         console.log('StartListing Error', error)
    //     }
    // }

    // const stopListing = async () => {
    //     console.log("Stop listing....")
    //     setIsListening(true);
    //     try {
    //         await Voice.stop();
    //         Voice.removeAllListeners();
    //         await Voice.destroy();
    //         setIsListening(false)
    //     } catch (error) {
    //         console.log('stopListing Error', error)
    //     }
    // }

    // const sendMessage = () => {
    //     console.log("Click send message")
    //     if (recognizedText) {
    //         setMessages([...messages, { text: recognizedText, sender: 'user' }]);
    //         setRecognizedText('');
    //     }
    // };

    return (
        <>
        <View
            style={[
                styles.container,
                {
                    flexDirection: 'column',
                },
            ]}>
            <View style={styles.Instra}>
                <Text style={styles.titleText}>INSTRUCTIONS</Text>
            </View>

            <View style={{ flex: 0, alignItems: 'left', }}>
                <View style={styles.textDesg}>
                    <Text >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                </View>

                <View style={styles.textDesg}>
                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                </View>

                <View style={styles.textDesg}>
                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                </View>

                <View style={styles.textDesg}>
                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                </View>

                <View style={styles.textDesg}>
                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                </View>

                <View style={styles.textDesg}>
                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                </View>
            </View>
            <View style={{ color: '#fff', marginTop: 30 }}>
                <Button
                    title="I Agree"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </View>
        <VoiceControl />
        </>
    );
}

export default InstructionScreen;