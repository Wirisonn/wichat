
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import JoinFirstScreen from './screens/JoinFirstScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import { NavigationContainer } from '@react-navigation/native';
import JoinMeetingScreen from './screens/JoinMeetingScreen';
import SettingScreen from './screens/SettingScreen';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ChatScreen from './screens/ChatScreen';
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import AccountScreen from './screens/AccountScreen';
import { Ionicons } from "@expo/vector-icons";
import AddChatScreen from './screens/AddChatScreen';
import MainChatScreen from './screens/MainChatScreen';
import ChatRoom from './screens/ChatRoom';
import AddDocScreen from './screens/AddDocScreen';
import ChatSettings from './screens/ChatSettings';
import DocScreen from './screens/DocScreen';




const Stack = createStackNavigator();
const TabNavigator = createMaterialBottomTabNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01
  }
}

const TabStack = () => {
  return (
    <TabNavigator.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                let iconColor;
                
    
                if (route.name === 'Home') {
                    iconName = focused
                    ? 'videocam-outline'
                    : 'videocam-outline';
                } 
                else if (route.name === 'Chats') {
                    iconName = focused ? 'chatbox-ellipses-outline' : 'chatbox-ellipses-outline';
                }
                else if (route.name === 'Contacts'){
                    iconName = focused ? 'people-circle-outline' : 'people-circle-outline';
                }
                else if (route.name === 'Account'){
                    iconName = focused ? 'person-circle-outline' : 'person-circle-outline';
                    iconColor = focused ? 'black' : 'white';
                }
    
                
                return <Ionicons name={iconName} size={20} color={'white'} />;
                },
                
                
            })}
            barStyle={{
                backgroundColor: 'black',
                height:100,
            }}
            shifting={true}
            activeColor={'white'}
            inactiveColor={'#343434'}
            
            
            >
            <TabNavigator.Screen name="Home" component={HomeScreen} />
            <TabNavigator.Screen name="Chats" component={ChatScreen} />
            <TabNavigator.Screen name="Contacts" component={ContactScreen} />
            <TabNavigator.Screen name="Account" component={AccountScreen} />
            </TabNavigator.Navigator>
  )
}


const AppStack = () => {
  return(
    <Stack.Navigator 
    screenOptions={{
      cardStyle: {flex: 1},
      headerShown: false,
      gestureEnabled: false,
      cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
      }}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} headerMode={false}/>
      <Stack.Screen name="JoinFirstScreen" component={JoinFirstScreen}/>
      <Stack.Screen name="SignupScreen" component={SignupScreen}/>
      <Stack.Screen name="HomeScreen" component={TabStack}/>
      <Stack.Screen name="SigninScreen" component={SigninScreen}/>
      <Stack.Screen name="JoinMeetingScreen" component={JoinMeetingScreen}/>
      <Stack.Screen name="SettingScreen" component={SettingScreen}/>
      <Stack.Screen name="AddChatScreen" component={AddChatScreen}/>
      <Stack.Screen name="ChatScreen" component={ChatScreen}/>
      <Stack.Screen name="MainChatScreen" component={MainChatScreen}/>
      <Stack.Screen name="ChatRoom" component={ChatRoom}/>
      <Stack.Screen name="AddDocScreen" component={AddDocScreen}/>
      <Stack.Screen name="ChatSettings" component={ChatSettings}/>
      <Stack.Screen name="DocScreen" component={DocScreen}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <AppStack/>
    </NavigationContainer>
  );
}

