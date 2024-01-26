import React, { useState } from 'react';
import { Button, Image, View, StyleSheet } from 'react-native';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';


const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  };
  
  handleCameraLaunch = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };
  
  launchCamera(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        // Process the captured image
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        console.log(imageUri);
      }
    });
  }

  return (
    <View style={styles.btn}>
     {selectedImage && (
          <Image
            source={{ uri: selectedImage }}
            style={{
               flex: 1,
               margin: 0,
              }
          }
            resizeMode="contain"
          />
    )}
    <View >
      <Button style={styles.btn1} title="Choose from Device" onPress={openImagePicker} />
    </View>
    <View style={styles.btn2}>
      <Button title="Open Camera" onPress={handleCameraLaunch} />
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    alignContent: "center",
    gap: 8,
    alignSelf: "center",
    justifyContent: "center",
    textAlign: 'left',
    padding: '1px',
    
    
},
  btn1: {
    backgroundColor: 'red',
    
},
  btn2: {

    
}
});


export default App;
