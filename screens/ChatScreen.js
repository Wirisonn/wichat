import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import CustomListItem from '../components/CustomListItem';
import {AntDesign, SimpleLineIcons} from '@expo/vector-icons';
import { db } from '../firebaseConfig';
import { doc, Firestore } from 'firebase/firestore';
import { 
  collection,
  addDoc,
  orderBy,
  query, 
} from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';
import { GiftedChat } from 'react-native-gifted-chat';


function ChatScreen({navigation}) {

  const [chats, setChats] = useState([]);

  const AddChat = () =>{
    navigation.navigate('AddChatScreen')
  }

  useEffect(() => {
    const collectionRef = collection(db, 'chats');
    const q = query(collectionRef);

    const unsubscribe = onSnapshot(q, snapshot => {
      setChats(
        snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        }))
      )
    });
    return () => unsubscribe;
  }, []);

    const enterChat = (id, chatName) => {
      navigation.navigate('MainChatScreen', {
        id,
        chatName
      });
    }
  
    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>

            <TouchableOpacity activeOpacity={0.5}>
              <AntDesign name='camerao' size={24} color= 'white' style={{padding: 10}}/>
            </TouchableOpacity>

            <Text style={styles.title}>WiChats</Text>

            <TouchableOpacity activeOpacity={0.5} onPress={AddChat}>
              <SimpleLineIcons name='pencil' size={24} color= 'white' style={{padding: 10}}/>
            </TouchableOpacity>
          </View>
          
          <ScrollView style={{height: '100%', backgroundColor: '#343434'}}>
            {chats.map(({id, data: { chatName }}) => (
              <CustomListItem key={id} id={id} chatName={chatName} enterChat={enterChat}/>
            ))}
          </ScrollView>
          
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'dodgerblue',
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
    backgroundColor: 'dodgerblue',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})


export default ChatScreen;