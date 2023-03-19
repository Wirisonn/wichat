import {React, useState} from 'react';
import { SafeAreaView, Text, View, StyleSheet, Pressable } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import ChatScreen from './ChatScreen';
import HomeScreen from './HomeScreen';
import WelcomeScreen from './WelcomeScreen';
import { CommonActions } from '@react-navigation/native';
import SignupScreen from './SignupScreen';
import { firebaseConfig } from '../firebaseConfig';
import { updateCurrentUser } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
    


function AccountScreen({navigation}) {
  const [email, setEmail] = useState('');
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

    const signOut = () => {
      auth.signOut().then(() => 
      navigation.navigate('WelcomeScreen'),
      console.log('Signed out')
      )
      
    }

    return (
        <SafeAreaView style={{
          backgroundColor: '#343434',
          flex: 1,
        }}>
          <View style={{
            alignContent: 'center',
            justifyContent: 'center',
            marginBottom: 30
          }}>
            <Text style={{
              fontSize: 15,
              fontWeight: '700',
              alignSelf: 'center',
              color: 'white'
            }}>
            My Account
            </Text>
          </View>
          <ScrollView>
            <View style={styles.container}>
              <TouchableOpacity style={{
                flexDirection: 'row',
                height: 50,
                borderBottomWidth: 1,
                borderBottomColor: 'white',
                justifyContent: 'space-between',
                padding: 10
              }}>
                <Text style={styles.innerTextTitle}>My Account</Text>
                <Text style={styles.innerTextInfo}>my email {'>'} </Text>
              </TouchableOpacity>

              <TouchableOpacity style={{
                flexDirection: 'row',
                height: 50,
                borderBottomWidth: 1,
                borderBottomColor: 'white',
                justifyContent: 'space-between',
                padding: 10
              }}>
                <Text style={styles.innerTextTitle}>Display Name</Text>
                <Text style={styles.innerTextInfo} >my name {'>'} </Text>
              </TouchableOpacity>

              <TouchableOpacity style={{
                flexDirection: 'row',
                height: 50,
                justifyContent: 'space-between',
                padding: 10
              }}>
                <Text style={styles.innerTextTitle}>Profile Photo</Text>
                <Text style={styles.innerTextInfo} >my name {'>'} </Text>
              </TouchableOpacity>

            </View>
            <View></View>
            <View></View>
            <TouchableOpacity onPress={signOut}>
                    <View style={{
                        width: '90%',
                        height: 50,
                        backgroundColor: 'red',
                        marginBottom: 20,
                        borderRadius: 15,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        margin: 30
                    }}>
                        <Text style={{}}>Sign Out</Text>
                        
                    </View>
                 </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

  container: {
    margin:15,
    borderRadius: 10,
    height: 150,
    flexDirection: 'column',
    backgroundColor: 'dodgerblue'
  },
  innerTextTitle: {
    alignSelf: 'center',
    fontSize: 14,
    fontWeight: '600',
    alignSelf: 'center'
  },
  innerTextInfo: {
    alignSelf: 'center',
    fontSize: 14,
  }
})

export default AccountScreen;