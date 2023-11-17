import * as React from 'react';
import { View, Text, TouchableOpacity,ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer,useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Keys, homeButton } from '../config/en'

import StyleSheets from '../css/CommonCss'
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      {/* <View style={StyleSheets.container}> */}
      <View style={StyleSheets.online}>
        <Text style={{ color: '#91c2ca', fontSize: 20 }}>{Keys.ONLINE} <Icon name='circle' size={20} style={{ margin: 10, }} color='#3abf33' /></Text>
      </View>
      <View style={StyleSheets.banner}>
        <Text style={{ color: '#ffff', fontWeight: '700', fontSize: 20 }}>{Keys.HOMEPAGE_BANNER}</Text>
      </View>
      <View style={StyleSheets.buttonView}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {
          homeButton.map((button, index) => {
            return (
              <Button key={index} icon={
                <Icon name={button.iconName} size={40} style={{ margin: 10, }} color='white' />
              } title={button.buttonName} buttonStyle={StyleSheets.button} onPress={() => navigation.navigate(button.navigatonTo)}>
              </Button>
            )
          })
        }
        </ScrollView>
        <View style={{ paddingLeft: 60, margin: 5 }}>
          <Text style={{ color: '#91c2ca', fontSize: 18, fontWeight: 500 }}>{Keys.HOMEPAGE_FOOTER_BANNER}</Text>
        </View>
      </View>
      <View >
        <Button icon={<FontAwesome name="volume-control-phone" size={40} style={{ margin: 10, }} color='white' />
        } title={Keys.CONTACT_NAME} buttonStyle={[StyleSheets.button, StyleSheets.footerButton]} onPress={() => { }}>
        </Button></View>
    </>
  );
}

export default HomeScreen;