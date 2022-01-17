import React from 'react'
import { StyleSheet, Text, View,ScrollView,TouchableOpacity,Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import avatar1 from'./assets/avatar/1.jpg';
import avatar2 from'./assets/avatar/2.jpg';
import avatar3 from'./assets/avatar/3.jpg';
import avatar4 from'./assets/avatar/4.jpg';
import avatar5 from'./assets/avatar/5.jpg';
import avatar6 from'./assets/avatar/6.jpg';
import avatar7 from'./assets/avatar/7.jpg';
export default function Story() {
    return (
        ScrollView horizontal ={true} showsHorizontalScrollIndicator={false}>
      <TouchableOpacity>
      <Image style ={styles.image1} source ={avatar1}/>
      <MaterialCommunityIcons name="plus-circle" size={28} color="#2e89ff" style = {{position: 'absolute',left:53,bottom: 20}}/>
      <Text style ={{textAlign: 'center',fontSize:12,paddingTop:8}}>Your Story</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Image style ={styles.image1} source ={avatar2}/>
      <Text style ={{textAlign: 'center',fontSize:12,paddingTop:8}}>Messi</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Image style ={styles.image1} source ={avatar3}/>
      <Text style ={{textAlign: 'center',fontSize:12,paddingTop:8}}>C.Ronaldo</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Image style ={styles.image1} source ={avatar4}/>
      <Text style ={{textAlign: 'center',fontSize:12,paddingTop:8}}>Citynow</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Image style ={styles.image1} source ={avatar5}/>
      <Text style ={{textAlign: 'center',fontSize:12,paddingTop:8}}>Jackie</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Image style ={styles.image1} source ={avatar6}/>
      <Text style ={{textAlign: 'center',fontSize:12,paddingTop:8}}>Long Luu</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Image style ={styles.image1} source ={avatar7}/>
      <Text style ={{textAlign: 'center',fontSize:12,paddingTop:8}}>Đại Lộc</Text>
      </TouchableOpacity>
      </ScrollView>
      
    )
}

const styles = StyleSheet.create({
    image1:{
        borderRadius: 100,
        width:68,
        height:68,
        marginHorizontal: 10
        
      },
})



