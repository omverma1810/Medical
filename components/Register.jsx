import { View, Text , Image , TouchableOpacity , TextInput } from 'react-native'
import React from 'react'

const Register = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#2151A0',height: '100%',display: 'flex',}}>
        <View style={{display:'flex',justifyContent:'center',alignItems:'center' , flex:1 , gap:60}}>
            <View>
                <Image source={require('../assets/person2.png')} style={{height: 200, width:200}} />
            </View>
            <View style={{paddingHorizontal:30, gap:20 , width:'100%'}}>
                <Text style={{color:'white' , textAlign:'flex-start' , fontSize:20 , fontWeight:700}}>Register Here</Text>
                <View style={[{ paddingHorizontal:10 , gap:10}]}>
                    <View style={[{}]}>
                        <Text style={[{fontSize: 15 , fontWeight: 600 , color:'white'}]}>Phone Number / Username</Text>
                            <TextInput
                               style={[{height:40 , marginTop:5, borderWidth:0.8 , fontSize:10 , padding:10 , backgroundColor: 'white' , borderRadius:5}]}
                               placeholder='Enter Phone Number / Username'
                        />
                    </View>
                    <View style={[{}]}>
                        <Text style={[{fontSize: 15 , fontWeight: 600 , color:'white'}]}>Password</Text>
                            <TextInput
                               style={[{height:40 , marginTop:5, borderWidth:0.8 , fontSize:10 , padding:10 , backgroundColor: 'white' , borderRadius:5}]}
                               placeholder='Enter Password'
                        />
                    </View>
                    <View style={[{}]}>
                        <Text style={[{fontSize: 15 , fontWeight: 600 , color:'white'}]}>Confirm Password</Text>
                            <TextInput
                               style={[{height:40 , marginTop:5, borderWidth:0.8 , fontSize:10 , padding:10 , backgroundColor: 'white' , borderRadius:5}]}
                               placeholder='Confirm Password'
                        />
                    </View>
                </View>

            </View>
            <View style={{gap:30}}>
                <TouchableOpacity onPress={() => navigation.navigate('HomeStack')} style={[{ backgroundColor: "#174c70" , height: 43 , width: 301 , borderRadius: 50, alignItems: 'center', justifyContent:'center', display:'flex' }]}>
                    <Text style={[{ color: "white" , fontSize: 15 , fontFamily: 'poppins', fontWeight:600 }]}>Register</Text>
                </TouchableOpacity>

                
                

            </View>
        </View>
      
    </View>
  )
}

export default Register