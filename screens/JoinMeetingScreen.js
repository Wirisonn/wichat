import React from 'react';
import { View, SafeAreaView, Text, Pressable, TextInput, StyleSheet, Switch, ScrollView } from 'react-native';
import JoinFirstScreen from './JoinFirstScreen';
import { useState } from 'react';


function JoinMeetingScreen({navigation}) {


    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <SafeAreaView style={{
            alignContent: 'flex-start',
            justifyContent: 'center',
            backgroundColor: '#343434'
        }}> 
            <View style={{
                alignContent: 'flex-start',
                justifyContent: 'center',
                backgroundColor: '#343434',
                
            }}>
                <Pressable onPress={() => navigation.popToTop()}>
                <Text style={{color: 'white', paddingTop: 5}}>Cancel</Text>
                </Pressable>
                

                <Text style={{
                    textAlign: "center",
                    fontSize: 15,
                    fontWeight: 'bold',
                    paddingBottom: 10,
                    color: 'white'
                }}>Join a Meeting</Text>
            </View>
            
            <ScrollView style={{
                backgroundColor: '#343434',
            }}>
            <View style={{
                backgroundColor: '#343434',
                height: '100%',
                alignContent: 'center',
                
            }}>
                <TextInput
                clearButtonMode='while-editing'
                keyboardType='number-pad'
                textAlign='center'
                placeholder='Meeting ID'
                placeholderTextColor={'#343434'}
                style={{
                    height: 50,
                    width: '100%',
                    backgroundColor: 'grey',
                    color: 'white',
                    fontWeight: '600'
                }}
                />

                <Pressable style={{
                    padding: 20
                }}>
                    <Text style={{
                        color: 'dodgerblue',
                        textAlign: 'center'
                    }}>
                        Join with a personal link
                    </Text>
                </Pressable>
                
                <TextInput
                clearButtonMode='while-editing'
                keyboardType= 'default'
                textAlign='center'
                defaultValue='Your Name'
                placeholderTextColor={'#343434'}
                style={{
                    height: 50,
                    width: '100%',
                    backgroundColor: 'grey',
                    color: 'white',
                    fontWeight: '600'
                }}
                />

                <Pressable style={{
                    padding: 20
                }}>
                    <Text style={{
                        color: 'dodgerblue',
                        textAlign: 'center'
                    }}>
                        Terms and Conditions Apply
                    </Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate(JoinFirstScreen)}>
                  <View style={{
                      width: '100%',
                      height: 50,
                      backgroundColor: 'grey',
                      marginBottom: 20,
                      borderRadius: 15,
                      justifyContent: 'center',
                      alignItems: 'center'
                 }}>
                
                    <Text style={styles.welcomebutton}>Join</Text>
                    
                    </View>
                  </Pressable>

                <Text style={{
                    padding:10,
                    color: 'grey'
                }}>
                If you received an invitation link, tap on the link again to join the meeting 
                </Text>

                <Text style={{
                    paddingTop: 50,
                    paddingLeft: 10,
                    color: 'grey'
                }}>
                    JOIN OPTIONS
                </Text>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    borderWidth: 1,
                    backgroundColor: 'grey',
                    height: 50,
                    padding: 8
                }}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 15,
                        color: 'white'
                    }}>
                    Don't Connect To Audio
                    </Text>

                    <Switch
                        trackColor={{false: '#767577', true: '#81b0ff'}}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />

                </View>
                
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    borderWidth: 1,
                    backgroundColor: 'grey',
                    height: 50,
                    padding: 8
                }}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 15,
                        color: 'white'
                    }}>
                    Turn Off My Video
                    </Text>

                    <Switch
                        trackColor={{false: '#767577', true: '#81b0ff'}}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />

                </View>

                <View style={{
                    height: 300
                }}></View>

                </View>
            </ScrollView>

            

            
            
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

export default JoinMeetingScreen;