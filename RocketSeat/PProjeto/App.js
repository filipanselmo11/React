import React from 'react';
import { Image ,StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';

import logo from './assets/logo.png';

import * as ImagePicker from 'expo-image-picker';

import * as Sharing from 'expo-sharing';

import uploadToAnonymousFilesAsync from 'anonymous-files';


export default function App() {

  let [selectedImage, setSelectedImage] = React.useState(null);


  let openImagePickerAsync = async () => {
    let permisionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if(permisionResult.granted === false) {
      alert('Permissão para usar a camera, é requirida');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    
    if(pickerResult.cancelled === true) {
      return;
    }

    if(Platform.OS === 'web') {
      let remoteUri = await uploadToAnonymousFilesAsync(pickerResult.uri);
      setSelectedImage({ localUri: pickerResult.uri, remoteUri });
    } else {
      setSelectedImage({ localUri: pickerResult.uri, remoteUri: null });
    }

  };

  let openShareDialogAsync = async() => {
    if(!(await Sharing.isAvailableAsync())) {
      alert(`A imagem está disponivel para compartilhamento: ${selectedImage.remoteUri}`);
      return;
    }

    Sharing.shareAsync(selectedImage.remoteUri || selectedImage.localUri);
  };

  if(selectedImage !== null) {
  return (
    <View style={styles.container}>

      <Image source={{uri: 'https://i.imgur.com/TkIrScD.png'}} style={styles.logo}/>
      <Text style={styles.instrucoes}>
        Compartilhe sua foto, com seus amigos
      </Text>

      <TouchableOpacity
      onPress={openShareDialogAsync}
      style={styles.botao}>

        <Text style={styles.botaoTexto}>
          Share this photo
        </Text>
      </TouchableOpacity>

    </View>
    );

  } 

  return (

    <View style={styles.container}>
      {}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },

  instrucoes: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
  
  botao: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
  },

  botaoTexto: {
    fontSize: 20,
    color: '#fff',
  },
});
