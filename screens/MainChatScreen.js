import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { Avatar } from 'react-native-elements';
import { ScrollView, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { auth, db } from '../firebaseConfig';
import { addDoc, Firestore, doc, setDoc, orderBy } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { query, onSnapshot } from 'firebase/firestore';
import { serverTimestamp } from 'firebase/firestore';
import ChatSettings from './ChatSettings';



function MainChatScreen({navigation, route}) {

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    const back = () => {
        navigation.goBack()
    }

    const sendMessage = () => {
        Keyboard.dismiss();
        
        const current = new Date();
        const time = current.toLocaleTimeString("en-US");
        

        addDoc( collection(db, 'chats', route.params.id, 'messages'),{
            timestamp: serverTimestamp(),
            message: input,
            displayName: auth.currentUser.displayName,
            email: auth.currentUser.email,
            photoURL: auth.currentUser.photoURL
        });

        
        this.textInput.clear();
        console.log('sharp');
    };

    useLayoutEffect(() => {
        const collectionRef = collection(db, 'chats', route.params.id, 'messages');
        const q = query(collectionRef, orderBy('timestamp', 'asc'));
        const unsubscribe = onSnapshot(q, snapshot => {
            setMessages(
              snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
              }))
            )
          });
          return unsubscribe;
    }, [route]);

    return (

        <SafeAreaView style={styles.container}>
        <View style={styles.header}>

            <TouchableOpacity activeOpacity={0.5} onPress={back}>
                <AntDesign name='arrowleft' size={24} color='black' style={{ paddingTop:10}}/>
            </TouchableOpacity>

            <View style={{flexDirection: 'column', alignItems: 'center'}}>
                
                <Avatar 
                rounded
                source={{
                    uri:
                    "https://cdn.vectorstock.com/i/preview-2x/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.webp"
                }}
                />
                <Text style={styles.title}>{route.params.chatName}</Text>
            </View>
           
            <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate(ChatSettings)}>
            <AntDesign name='upload' size={22} color='black' style={{ paddingTop:10}}/>
            </TouchableOpacity>
        </View>
        <KeyboardAvoidingView 
            behavior= {Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.kcontainer}
            keyboardVerticalOffset={20}
        >   
            
            <>
            
                <ScrollView contentContainerStyle={{paddingTop:15}}>

                    {messages.map(({id, data}) =>
                    data.email === auth.currentUser.email ? (
                        <View key={id} style={styles.receiver}>
                            <Avatar 
                            position='absolute'
                            bottom={-15}
                            right={-5}
                            rounded
                            source={{
                                uri: "https://cdn.vectorstock.com/i/preview-2x/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.webp"
                            }}/>
                            <Text style={styles.receiverText}>{data.message}</Text>
                        </View>
                    ): (
                        <View key={id} style={styles.sender}>
                            <Avatar
                             position='absolute'
                             bottom={-15}
                             right={-5}
                             rounded
                             source={{
                                 uri: "https://cdn.vectorstock.com/i/preview-2x/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.webp"
                             }}/>
                            <Text style={styles.senderText}>{data.message}</Text>
                        </View>
                    )
                    )}

                </ScrollView>
                <View style={styles.footer}>
                    <TextInput
                        ref={input => { this.textInput = input }}
                        onSubmitEditing={sendMessage}
                        placeholder='WiMessage'
                        style={styles.textInput}
                        onChangeText={(text) => setInput(text)}
                    />
                    <TouchableOpacity onPress={sendMessage} activeOpacity={0.5}>
                        <Ionicons name='send' size={24} color='orange'/>
                    </TouchableOpacity>
                </View>
            </>
           
        </KeyboardAvoidingView>

    </SafeAreaView>
    );
}

export default MainChatScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'dodgerblue',
        flex:1
        
      },
      receiver: {
          padding: 15,
          backgroundColor: '#ECECEC',
          alignSelf: 'flex-end',
          borderRadius: 20,
          marginBottom: 20,
          marginRight: 15,
          maxWidth: '80%',
          position: 'relative'
      },
      sender: {
        padding: 15,
        backgroundColor: 'orange',
        alignSelf: 'flex-start',
        borderRadius: 20,
        marginBottom: 20,
        marginLeft: 15,
        maxWidth: '80%',
        position: 'relative'
    },
      title: {
        color: 'black',
        fontSize: 15,
        alignSelf: 'center',
        fontWeight: 'bold'
    
      },
      header: {
        backgroundColor: '#ECECEC',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        padding:10,
        marginLeft: 5,
        marginRight:5
      },
      cancelTitle: {
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold',
          paddingTop: 10,
          paddingLeft: 5
    },
    kcontainer: {
        flex: 1
    },
    footer: {
        backgroundColor: 'dodgerblue',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding: 15
    },

    textInput: {
        bottom: 0,
        height: 40,
        flex: 1, 
        marginRight: 15,
        borderColor: 'transparent',
        backgroundColor: '#ECECEC',
        borderWidth: 1,
        padding: 10,
        color: 'grey',
        borderRadius: 30
    }

});