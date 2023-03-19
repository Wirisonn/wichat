import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, View, SafeAreaView, Pressable } from 'react-native';

function JoinFirstScreen(props) {
    return (
        <SafeAreaView>
            <View style={{
                backgroundColor: '#343434',
                flexDirection: 'row',
                padding: 10
            }}>
                <Pressable>
                    <Text>Cancel</Text>
                </Pressable>

                <Text>
                    Sign In
                </Text>

                <Ionicons
                name='ellipsis-horizontal'
                size={25}
                color='white'
                />

            </View>
        </SafeAreaView>
    );
}

export default JoinFirstScreen;