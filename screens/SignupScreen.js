import { Ionicons } from '@expo/vector-icons';
import { Pressable, SafeAreaView, Text, View, ScrollView, TextInput, StyleSheet, Alert } from 'react-native';
import { createRef, React  } from 'react';
import { useState } from 'react';
import HomeScreen from './HomeScreen';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { firebaseConfig } from '../firebaseConfig';
import { updateCurrentUser } from 'firebase/auth';


function SignupScreen({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleCreateAccount = () =>{


        this.myTextInput = createRef();

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('Account Created!');

            updateProfile(auth.currentUser, {
                displayName: name,
            })

            const user = userCredential.user;
    
            console.log(user);
            navigation.navigate(HomeScreen);
            console.log(this.myTextInput)
        })
        .catch(error => {
            console.log(error);
            Alert.alert(error.message);
        })
    }

   


    return (
        <SafeAreaView style={{backgroundColor: '#343434'}}>
            <View style={{
                backgroundColor: '#343434',
                height: '120%'
            }}>
            
            <View style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between'
                
            }}>
                <Pressable onPress={() => navigation.popToTop()}>
            <Text style={{
                padding: 10,
                color: 'white',
                fontSize: 15,
            }}>
                Cancel
            </Text>
            </Pressable>

            <Text style={{
                fontSize: 16,
                color: 'white',
                fontWeight: 'bold',
                alignSelf: 'center'
            }}>
                Sign Up
            </Text>

            <Ionicons 
            name='information-circle-outline'
            size={24}
            color='white'
            style={{
                padding: 10
            }}
            />

            </View>
            <ScrollView>
            <View style={{
                   backgroundColor: '#343434',
                   height: '100%',
                   flexDirection: 'column'

               }}>
                   <Text style={{
                       color: 'grey',
                       paddingLeft: 30,
                       paddingTop: 30,
                       paddingBottom: 10
                   }}>
                       ENTER YOUR CREDENTIALS
                   </Text>


                   <View style={{
                       backgroundColor: 'grey',
                       width: '90%',
                       height: 50,
                       borderTopLeftRadius: 10,
                       borderTopRightRadius: 10,
                       alignSelf: 'center',
                       flexDirection: 'row',
                       
                   }}>
                       <Text style={{color: 'white', alignSelf: 'center', paddingRight:30, paddingLeft:5}}>Name</Text>


                       <TextInput
                            autoFocus={true}
                            ref={this.myTextInput}
                            clearButtonMode='while-editing'
                            keyboardType= 'email-address'
                            textAlign = 'left'
                            placeholder='Your Name'
                            placeholderTextColor={'#343434'}
                            onChangeText = {(text) => setName(text)}
                            style={{
                                height: 50,
                                width: '75%',
                                backgroundColor: 'grey',
                                color: 'white',
                                fontWeight: '600'
                            }}
                        />

                   </View>



                   <View style={{
                       backgroundColor: 'grey',
                       width: '90%',
                       height: 50,
                       alignSelf: 'center',
                       flexDirection: 'row',
                       
                   }}>
                       <Text style={{color: 'white', alignSelf: 'center', paddingRight:30, paddingLeft:5}}>Email</Text>


                       <TextInput
                            ref={this.myTextInput}
                            clearButtonMode='while-editing'
                            keyboardType= 'email-address'
                            textAlign = 'left'
                            placeholder='user@example.com'
                            placeholderTextColor={'#343434'}
                            onChangeText = {(text) => setEmail(text)}
                            style={{
                                height: 50,
                                width: '75%',
                                backgroundColor: 'grey',
                                color: 'white',
                                fontWeight: '600'
                            }}
                        />

                   </View>

                   <View style={{
                       backgroundColor: 'grey',
                       width: '90%',
                       height: 50,
                       borderBottomLeftRadius: 10,
                       borderBottomRightRadius: 10,
                       alignSelf: 'center',
                       flexDirection: 'row',
                       
                   }}>
                       <Text style={{color: 'white', alignSelf: 'center', paddingRight:5, paddingLeft:5}}>Password</Text>

                       <TextInput
                            ref={this.myTextInput}
                            secureTextEntry={true}
                            clearButtonMode='while-editing'
                            keyboardType= 'default'
                            textAlign = 'left'
                            placeholder='Required'
                            placeholderTextColor={'#343434'}
                            onChangeText = {(text) => setPassword(text)}
                            style={{
                                height: 50,
                                width: '75%',
                                backgroundColor: 'grey',
                                color: 'white',
                                fontWeight: '600'
                            }}
                        />


                   </View>

                   

                   <Pressable onPress={handleCreateAccount}>
                    <View style={{
                        width: '90%',
                        height: 50,
                        backgroundColor: 'dodgerblue',
                        marginBottom: 20,
                        borderRadius: 15,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        margin: 30
                    }}>
                        <Text style={styles.welcomebutton}>Sign Up</Text>
                        
                    </View>
                 </Pressable>

                 <Pressable style={{
                    padding: 5
                }}>
                    <Text style={{
                        color: 'dodgerblue',
                        textAlign: 'center'
                    }}>
                        Forgot Password?
                    </Text>
                </Pressable>

                <Text style={{
                       color: 'grey',
                       paddingLeft: 30,
                       paddingTop: 30,
                       paddingBottom: 10
                   }}>
                       OTHER SIGN IN METHODS
                   </Text>

                   <Pressable onPress={() => navigation.navigate(SigninScreen)}>
                    <View style={{
                        width: '90%',
                        height: 50,
                        backgroundColor: 'dodgerblue',
                        marginBottom: 20,
                        borderRadius: 15,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        margin: 30,
                        flexDirection: 'row'
                    }}>
                        <Ionicons
                        name='logo-google'
                        size={25}
                        style={{
                            paddingRight: 5
                        }}
                        />
                        <Text style={styles.welcomebutton}>Continue with Google</Text>
                        
                    </View>
                 </Pressable>


                 <Pressable onPress={() => navigation.navigate(SigninScreen)}>
                    <View style={{
                        width: '90%',
                        height: 50,
                        backgroundColor: 'dodgerblue',
                        marginBottom: 20,
                        borderRadius: 15,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        margin: 30,
                        flexDirection: 'row'
                    }}>
                        <Ionicons
                        name='logo-facebook'
                        size={25}
                        style={{
                            paddingRight: 5
                        }}
                        />
                        <Text style={styles.welcomebutton}>Continue with Facebook</Text>
                        
                    </View>
                 </Pressable>

               </View>
               
               <View style={{
                    height: 300
                }}></View>

            </ScrollView>
            
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

export default SignupScreen;