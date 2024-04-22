import { View, Text , TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react';
import Icons1 from '@expo/vector-icons/Feather'
import { Checkbox } from '@ant-design/react-native';
import {Picker} from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
const HomeScreen = ({navigation}) => {
    const [image, setImage] = useState(null);
    const [showDeleteIcon, setShowDeleteIcon] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const deleteImage = () => {
    // Function to handle image deletion
    setImage(null);
    setShowDeleteIcon(false);
  };
  const [checked, setChecked] = useState([]);

  const onChange = (checkedValues) => {
    setChecked(checkedValues);
  };
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <View style={{backgroundColor: '#2151A0',height: '100%',display: 'flex',}}>
        <View style={{display:'flex',justifyContent:'center',alignItems:'center' , flex:1 , gap:30 , width:'100%'}}>
            <Text style={{alignItems:'flex-start', fontSize:15, fontWeight:600, color:'white'}}>Upload Image Here</Text>
            <TouchableOpacity
                onPress={pickImage}
                style={{
                    height: 200,
                    width: 210,
                    backgroundColor: 'white',
                    borderRadius: 11,
                    position: 'relative',
                }}
            >
                {image ? (
                    <View style={{ flex: 1 }}>
                        <Image source={{ uri: image }} style={{ flex: 1, borderRadius: 11 }} />
                        <TouchableOpacity
                            onPress={deleteImage}
                            style={{ position: 'absolute', top: '50%', left: '50%', marginTop: -16, marginLeft: -16 }}
                        >
                            <Icons1 name="trash-2" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                ) : (
                    <Icons1 style={{ position: 'absolute', top: '50%', left: '50%', marginTop: -16, marginLeft: -16 }} name="plus" size={32} color="#777777" />
                )}
            </TouchableOpacity>

            <View style={{width:'100%' , paddingHorizontal:20}}>
                <View style={{display:'flex', backgroundColor:'white', borderRadius:5}}>
                    <Picker
                        selectedValue={selectedOption}
                        onValueChange={(itemValue, itemIndex) => setSelectedOption(itemValue)}
                        
                    >
                    <Picker.Item label={selectedOption ? selectedOption : 'Select modal'} value={null} />
                    <Picker.Item label="Option 1" value="Option 1" />
                    <Picker.Item label="Option 2" value="Option 2" />
                    <Picker.Item label="Option 3" value="Option 3" />
                    <Picker.Item label="Option 4" value="Option 4" />
                    <Picker.Item label="Option 5" value="Option 5" />
                    <Picker.Item label="Option 6" value="Option 6" />
                    <Picker.Item label="Option 7" value="Option 7" />
                    <Picker.Item label="Option 8" value="Option 8" />

                    </Picker>
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Result')} style={[{ backgroundColor: "#174c70" , height: 43 , width: 301 , borderRadius: 50, alignItems: 'center', justifyContent:'center', display:'flex' }]}>
                    <Text style={[{ color: "white" , fontSize: 15 , fontFamily: 'poppins', fontWeight:600 }]}>Predict</Text>
            </TouchableOpacity>

            
            

        </View>
        
    </View>
    
    
  )
}

export default HomeScreen