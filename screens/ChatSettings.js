import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import {AntDesign, SimpleLineIcons} from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Button, Icon, Input } from 'react-native-elements';
import { async } from '@firebase/util';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { Header } from 'react-native/Libraries/NewAppScreen';






function ChatSettings({navigation}) {

    const back = () => {
        navigation.goBack()
    }

    return (
        
        <SafeAreaView style={styles.container}>
        <View style={styles.header}>

            <TouchableOpacity activeOpacity={0.5} onPress={back}>
            <Text style={styles.cancelTitle}>Cancel</Text>
            </TouchableOpacity>

            <Text style={styles.title}>Shared Documents</Text>

            <TouchableOpacity activeOpacity={0.5} onPress={{}}>
            <SimpleLineIcons name='plus' size={24} color= 'white' style={{padding: 10}}/>
            </TouchableOpacity>
        </View>

        <View style={{height: '100%', backgroundColor: 'black'}}></View>

    </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    container: {
      backgroundColor: '#343434',
      flex: 1
    },
    title: {
      color: 'white',
      padding: 15,
      fontSize: 15,
      alignSelf: 'center',
      fontWeight: 'bold'
  
    },
    header: {
      backgroundColor: '#343434',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    cancelTitle: {
        color: 'white',
        fontSize: 15,
        paddingTop: 15,
        paddingLeft: 5
    },
    entryInput: {
        color: 'white',
        padding:10
    }
  })



export default ChatSettings;