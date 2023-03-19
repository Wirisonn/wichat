import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatScreen from './ChatScreen';
import HomeScreen from './HomeScreen';
import ContactScreen from './ContactScreen';
import AccountScreen from './AccountScreen';
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';



const TabNavigator = createMaterialBottomTabNavigator();
   





export default function HomeScreenTab(props) {
    return (
        <NavigationContainer independent={false}>
           
      </NavigationContainer>
        
    );
}
