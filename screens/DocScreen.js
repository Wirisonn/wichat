import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, View, Text } from 'react-native';
import QuillEditor, { QuillToolbar } from 'react-native-cn-quill';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SimpleLineIcons } from '@expo/vector-icons';





function DocScreen({navigation}) {
  const _editor = React.createRef();
  const back = () => {
    navigation.goBack()
}

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar style="auto" />
      <View style={styles.header}>

            <TouchableOpacity activeOpacity={0.5} onPress={back}>
            <Text style={styles.cancelTitle}>Cancel</Text>
            </TouchableOpacity>

            <Text style={styles.title}>Documents</Text>

            <TouchableOpacity activeOpacity={0.5} onPress={{}}>
            <SimpleLineIcons name='plus' size={24} color= 'white' style={{padding: 10}}/>
            </TouchableOpacity>
        </View>
      <QuillEditor
        style={styles.editor}
        ref={_editor}
        initialHtml="<h1>Your Collaborative Document</h1>"
      />
      <QuillToolbar editor={_editor} options="full" theme="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingVertical: 10,
  },
  root: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'dodgerblue',
  },
  editor: {
    flex: 1,
    padding: 0,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 30,
    marginVertical: 5,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#343434',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    margin: 10
  },
  cancelTitle: {
    color: 'white',
    fontSize: 15,
    paddingTop: 15,
    paddingLeft: 5
},
title: {
    color: 'white',
    padding: 15,
    fontSize: 15,
    alignSelf: 'center',
    fontWeight: 'bold'

  },
});

export default DocScreen;