import React from 'react';
import { Text, View, SafeAreaView, Button, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import SignupScreen from './SignupScreen';
import JoinMeetingScreen from './JoinMeetingScreen';
import SigninScreen from './SigninScreen';

function WelcomeScreen({navigation}) {
    return (
        <SafeAreaView style={{
           
            backgroundColor: 'dodgerblue'
        }}>
            <View style={{
                backgroundColor: 'dodgerblue',
                height: '60%',
                paddingLeft: 10
                
            }}>
                <Pressable onPress={() => navigation.navigate('SettingScreen')}>
                <Ionicons
                    name='settings-outline'
                    size = {25}
                    color = 'white'
                     />
                </Pressable>
                
                <Text style={{
                    textAlign: "center",
                    color: 'white',
                    paddingTop: 100,
                    fontFamily: 'Cochin',
                    fontSize: 40,
                    fontWeight: 'bold'
                }}>WiChat</Text>
                
            </View>

            <View style={{
                backgroundColor: 'black',
                height: '43%',
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                alignContent: 'center',
                padding: 5
                
            }}>
                 <Text style={{
                     textAlign: 'center',
                     color: 'white',
                     fontSize: 19,
                     fontWeight: 'bold',
                     padding: 10
                 }}>Welcome</Text>

                 <Text style={{
                     textAlign: 'center',
                     fontSize: 15,
                     color: 'white',
                     paddingBottom: 20
                 }}>Get Started with your account</Text>

                 <Pressable onPress={() => navigation.navigate(JoinMeetingScreen)}>
                 <View style={{
                       width: '100%',
                       height: 50,
                       backgroundColor: 'dodgerblue',
                       marginBottom: 20,
                       borderRadius: 15,
                       justifyContent: 'center',
                       alignItems: 'center'
                  }}>
                     
                         <Text style={styles.welcomebutton}>Join Meeting</Text>
                     
                 </View>
                 </Pressable>

                 



                  <Pressable onPress={() => navigation.navigate(SignupScreen)}>
                  <View style={{
                      width: '100%',
                      height: 50,
                      backgroundColor: '#343434',
                      marginBottom: 20,
                      borderRadius: 15,
                      justifyContent: 'center',
                      alignItems: 'center'
                 }}>
                
                    <Text style={styles.welcomebutton}>Sign Up</Text>
                    
                 </View>
                  </Pressable>

                

                 <Pressable onPress={() => navigation.navigate(SigninScreen)}>
                 <View style={{
                     width: '100%',
                     height: 50,
                     backgroundColor: '#343434',
                     marginBottom: 20,
                     borderRadius: 15,
                     justifyContent: 'center',
                     alignItems: 'center'
                 }}>
                    <Text style={styles.welcomebutton}>Sign In</Text>
                    
                 </View>
                 </Pressable>
                 
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    welcometext: {
        
    },

    welcomebutton: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    }
  });
  

export default WelcomeScreen;