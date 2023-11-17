import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const styles = StyleSheet.create({
    heading: {
        display: "flex",
        backgroundColor: "grey",
        alignSelf: 'stretch',
        textAlign: 'center',
        fontSize: 30,
        height: "8%",
        display: "flex",
        position: "relative",
        marginBottom: 100,
        textTransform: "uppercase",
        paddingTop: "3%",
        letterSpacing: -1
    },
    question: {
        display: "flex",
        position: "relative",
        fontSize: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    buttonText: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        marginTop: 20,
    },
    button: {
        backgroundColor: 'black',
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        height: 80,
        width: 170,
        paddingTop: 10,
    },
    feedback: {
        display: "flex",
        flexDirection: "row",
    },
    feedbackButton: {
        color: "#fff",
        backgroundColor: "#000",
        height: 60,
        width: 60,
        fontSize: 20,
        display: "flex",
        marginRight: 10,
        marginTop: 20,
        marginBottom: 20,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "space-around",
        padding: 20,
    },
    nextButton:{
        backgroundColor: "orange",
        width: "80%",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        height: 40,
        position: "relative",
        marginTop: "20%"
    },
    
    descTestOn:{
        marginRight: "80%",
        position: "relative",
        fontSize: 15
    }
});

export const AssessSymptoms = (props) => {
    const numbers = Array.from({ length: 5 }, (_, index) => index + 1);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', position: "relative", top: -30 }}>
            <Text style={styles.heading}>{props.route.name}</Text>
            <Text style={styles.question}>Do you experience fluctuation in your symptoms of Parkinson's ?</Text>
            <View  style={styles.buttonText}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}
                >
                    <Text style={{ color: "#fff", gap: 10 }}> YES </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}
                >
                    <Text style={{ color: "#fff", marginLeft: 10 }}> NO </Text>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    width: "80%",
                    height: 2,
                    marginTop: 40,
                    marginBottom: 40,
                    backgroundColor: "grey"
                }}
            />
            <Text style={{ fontSize: 20 }} >How on / off are you at the moment ?</Text>
            <Text>
                {numbers.map(i => {
                    return (
                        <TouchableOpacity
                            key={i}
                            style={styles.feedback}
                            onPress={this.onPress}
                        >
                            <Text style={styles.feedbackButton}> {i} </Text>
                        </TouchableOpacity>
                    )
                })}
            </Text>

            <View style={{ gap: 10, flexDirection:'row', width: "70%" }}>
                <Text style={styles.descTestOn}>ON</Text>
                <Text style={styles.descTest}>OFF</Text>
            </View>

            <TouchableOpacity
                style={styles.nextButton}
                onPress={this.onPress}
            >
                <Text style={{ color: "#fff", marginLeft: 10 }}> NEXT </Text>
            </TouchableOpacity>
        </View>
    );
}
