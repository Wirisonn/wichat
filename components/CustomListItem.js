import React, { useLayoutEffect, useState } from 'react';
import { Avatar, ListItem } from 'react-native-elements';
import { collection } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { query, orderBy, onSnapshot } from 'firebase/firestore';


function CustomListItem({id, chatName, enterChat}) {

    const [chatMessages, setChatMessages] = useState([]);

    useLayoutEffect(() => {
        const collectionRef = collection(db, 'chats', id, 'messages');
        const q = query(collectionRef, orderBy('timestamp', 'desc'));
        const unsubscribe = onSnapshot(q, snapshot => {
            setChatMessages(
              snapshot.docs.map((doc) => doc.data())
            )
          });
          return unsubscribe;
    },);


    return (

        <ListItem key={id} onPress={() => enterChat(id, chatName)} bottomDivider>
            <Avatar
                rounded
                source ={{
                    uri: 
                        chatMessages?.[0]?.photoURL ||
                        "https://cdn.vectorstock.com/i/preview-2x/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.webp"
                }}
            />
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: '700'}}>
                    {chatName}
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode= 'tail'>
                    {chatMessages?.[0]?.displayName} : {chatMessages?.[0]?.message}
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    );
}

export default CustomListItem;