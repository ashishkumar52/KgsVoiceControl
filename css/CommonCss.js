import {StyleSheet} from 'react-native';
export default StyleSheet.create({

    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#F5FCFF',
    },
    online: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        minWidth: '100%',
        marginBottom: '2%',
        backgroundColor: '#d5eaf0',
        maxHeight: '8%',
        padding:'5%'
    },
    banner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#69bfce',
        minWidth: '100%',
        maxHeight: '8%'
    },
    buttonView:{
        flex: 1,
        alignItems: 'flex-start',
    },
    button: {
        backgroundColor: '#468ea9',
        margin:'2%',
        marginLeft: 10,
        justifyContent: 'flex-start',
        borderColor: '#9ec2cf',
        borderWidth: 1,
        minWidth: '95%',
    },
    footerButton: {
        backgroundColor: 'black'
    }
});