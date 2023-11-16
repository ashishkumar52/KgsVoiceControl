import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

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
        
    }
});



const InstructionScreen = () => {
    const navigation = useNavigation();
    return (
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
            <View style={{ color: '#fff', marginTop: 30}}>
                    <Button
                        title="I Agree"
                        onPress={() => navigation.navigate('Home')}
                    />
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

export default InstructionScreen;