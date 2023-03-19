import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, ScrollView, Modal } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { Button } from 'react-native-paper';
import MeetingScreen from './MeetingScreen';
import { NavigationContainer } from '@react-navigation/native';




function HomeScreen({navigation}) {
    
    return (
        <SafeAreaView style={styles.container} >
            <View style={{
                backgroundColor: 'grey',
                height: '8%',
                flexDirection: 'row'
                }}>
                <View style={{
                    justifyContent: 'flex-end',
                    alignItems:'center',
                    flex: 0.7,
                    backgroundColor: '#343434',
                    flexDirection: 'row'
                }}>
                    <Text style={{
                        fontSize: 16,
                        color: 'white',
                        textAlign: 'center',
                        fontWeight: '500',
                        paddingRight: 55,
                    }}>
                        WiChat
                    </Text>
                </View>
                
                <View style={{
                    paddingTop: 10,
                    justifyContent: 'space-evenly',
                    alignContent: 'center',
                    flex: 0.3,
                    flexDirection: 'row',
                    backgroundColor: '#343434'
                }}>
                    <Ionicons
                    name='refresh-outline'
                    size = {25}
                    color = 'white'
                     />
                    
                    <Ionicons
                    name='information-circle-outline'
                    size = {25}
                    color = 'white'
                     />

                </View>

                
            </View>
            
            <View style={{
                    backgroundColor: '#343434',
                    height: '15%',
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                }}>
                    <View style={{
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <Button 
                            onPress={() => navigation.navigate('ChatRoom')}
                            style={{
                                backgroundColor: 'orange',
                                borderRadius: 15,
                                height: 60,
                                width: 60,
                                alignItems: 'center',
                                alignContent: 'center',
                                justifyContent: 'center'
                                
                                
                            }}
                        >
                            <Ionicons
                            name='videocam'
                            size={25}
                            color='white'
                            style={{
                                alignSelf: 'center'
                            }}
                            
                            />
                        </Button>
                        <Text style={{fontSize:12, fontWeight:'500', color: 'grey', paddingTop:5}}>New Meeting</Text>
                    </View>

                    <View style={{
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <Button style={{
                            backgroundColor: 'dodgerblue',
                            borderRadius: 15,
                            height: 60,
                            width: 60,
                            alignItems: 'center',
                            alignContent: 'center',
                            justifyContent: "center"
                            
                        }}>
                            <Ionicons
                            name='add-circle'
                            size={22}
                            color='white'
                            />
                        </Button>
                        <Text style={{fontSize:12, fontWeight:'500',color: 'grey', paddingTop:5}}>Join</Text>
                    </View>

                    <View style={{
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <Button 
                            onPress={() => navigation.navigate('AddDocScreen')}
                            style={{
                                backgroundColor: 'dodgerblue',
                                borderRadius: 15,
                                height: 60,
                                width: 60,
                                alignContent: 'center',
                                alignItems: 'center',
                                justifyContent: 'center'
                                
                            }}>
                            <Ionicons
                            name='people'
                            size={23}
                            color='white'
                            />
                        </Button>
                        <Text style={{fontSize:12, fontWeight:'500',color: 'grey', paddingTop:5}}>Collaboration</Text>
                    </View>

                   <View style={{
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <Button style={{
                            margin: 0,
                            alignItems: 'center',
                            alignContent: 'center',
                            backgroundColor: 'dodgerblue',
                            borderRadius: 15,
                            height: 60,
                            width: 60,
                            justifyContent: 'center'
                            
                        }}
                        onPress={()=>{}}
                        >
                            <Ionicons
                            name='tv'
                            size={22}
                            color='white'
            
                            />
                        </Button>
                        <Text style={{fontSize:12, fontWeight:'500',color: 'grey', paddingTop:5}}>Share Screen</Text>
                    </View>

                </View>

                <View style={{
                    backgroundColor: '#343434',
                    height: '7%',
                    justifyContent: 'center',
                    borderBottomWidth: 1,
                    borderTopWidth: 1,
                    
                }}>
                    <Text style={{
                        textAlign: 'center',
                        color: 'dodgerblue'
                    }}>
                        Add a calender
                    </Text>
                </View>

                <ScrollView>
                    
                </ScrollView>
            

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#343434',
      
    },
    chat: {
        backgroundColor: 'white',
        

    }
  });

export default HomeScreen;