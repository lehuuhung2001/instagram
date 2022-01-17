import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,ScrollView,TouchableOpacity ,RefreshControl} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import picinsta from './assets/1200px-Instagram_logo.svg.png';
import spider from './assets/gia-thuyet-NWH-1640483718-66.jpg';
import avatar1 from'./assets/avatar/1.jpg';
import avatar2 from'./assets/avatar/2.jpg';
import avatar3 from'./assets/avatar/3.jpg';
import avatar4 from'./assets/avatar/4.jpg';
import avatar5 from'./assets/avatar/5.jpg';
import avatar6 from'./assets/avatar/6.jpg';
import avatar7 from'./assets/avatar/7.jpg';
import avatar8 from'./assets/avatar/8.png';
import avatar9 from'./assets/avatar/9.jpg';
import avatar10 from'./assets/avatar/10.jpg';
import mc from './assets/man-city-premier-league-champions.jpg';
import barca from './assets/image1.jpg';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import React, { useState, useCallback } from 'react'

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
export default function App() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <View style={styles.container}>
    <StatusBar style = 'dark'/>
    <View>
      <Image source={picinsta} style ={{width : '35%',height: null,
      aspectRatio:1400/500,marginLeft: 18,marginTop: 52}}></Image>
      <TouchableOpacity>
      <FontAwesome name="plus-square-o" size={28} color="black" style ={{left :315,margin: -40}}/>
      </TouchableOpacity>
      <TouchableOpacity>
      <Ionicons name="ios-paper-plane-outline" size={25} color="black" style ={{left : 368, bottom: 3,margin: -40}}/>
      </TouchableOpacity>
      </View>

      <ScrollView>
      <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
      


      {/* -----------------box2------------------- */}
      <ScrollView horizontal ={true} showsHorizontalScrollIndicator={false}>
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
      


      {/* --------------------box3------------------------------ */}
      <View >
      <View style = {{flexDirection:'row'}}>
      <TouchableOpacity>
      <Image source ={avatar10} style ={styles.image2}></Image>
      </TouchableOpacity>
      <Text style = {{paddingTop:22,fontWeight:'bold'}}>tomholland</Text>
      <TouchableOpacity>
      <MaterialCommunityIcons name="dots-horizontal" size={24} color="black" style = {{marginLeft: 200,marginTop:16}}/>
      </TouchableOpacity>
      </View>
      <Image source={spider} style = {{width : '100%',height: null,aspectRatio: 1080/1400}}>
      </Image>
      <View style = {{flexDirection:'row'}}>
      <TouchableOpacity>
      <MaterialCommunityIcons name="heart-outline" size={32} color="black" style = {{marginTop: 8,marginLeft:10}}/>
      </TouchableOpacity>
      <TouchableOpacity>
      <Ionicons name="md-chatbubble-outline" size={27} color="black" style = {{marginTop: 8,marginLeft:15}}/>
      </TouchableOpacity>
      <TouchableOpacity>
      <Ionicons name="ios-paper-plane-outline" size={27} color="black" style = {{marginTop: 8,marginLeft:15}}/>
      </TouchableOpacity>
      <TouchableOpacity>
      <FontAwesome name="bookmark-o" size={24} color="black" style = {{marginTop: 8,marginLeft:210}}/>
      </TouchableOpacity>
      </View>
      <Text style = {{paddingLeft: 14,paddingTop:8,fontSize:13}}>Liked by <Text style = {{fontWeight: '700'}}>_funk_and soul </Text> 
      and <Text style = {{fontWeight: '700'}}>others</Text></Text>
      <Text style = {{fontWeight: '700',paddingLeft: 14,paddingTop:5,fontSize:13}}>UPCOMING MOVIE</Text>
      <Text style = {{fontWeight: '200',paddingLeft: 14,paddingTop:5,fontSize:13}}>View all 141 comments</Text>
      <Text style = {{fontWeight: '200',paddingLeft: 14,paddingTop:5,fontSize:13}}>15 hours ago</Text>




      <View style = {{flexDirection:'row'}}>
      <TouchableOpacity>
      <Image source ={avatar9} style ={styles.image2}></Image>
      </TouchableOpacity>
      <Text style = {{paddingTop:22,fontWeight:'bold'}}>fcbarcelona</Text>
      <TouchableOpacity>
      <MaterialCommunityIcons name="dots-horizontal" size={24} color="black" style = {{marginLeft: 200,marginTop:16}}/>
      </TouchableOpacity>
      </View>
      <Image source={barca} style = {{width : '100%',height: null,aspectRatio: 1080/1400}}>
      </Image>
      <View style = {{flexDirection:'row'}}>
      <TouchableOpacity>
      <MaterialCommunityIcons name="heart-outline" size={32} color="black" style = {{marginTop: 8,marginLeft:10}}/>
      </TouchableOpacity>
      <TouchableOpacity>
      <Ionicons name="md-chatbubble-outline" size={27} color="black" style = {{marginTop: 8,marginLeft:15}}/>
      </TouchableOpacity>
      <TouchableOpacity>
      <Ionicons name="ios-paper-plane-outline" size={27} color="black" style = {{marginTop: 8,marginLeft:15}}/>
      </TouchableOpacity>
      <TouchableOpacity>
      <FontAwesome name="bookmark-o" size={24} color="black" style = {{marginTop: 8,marginLeft:210}}/>
      </TouchableOpacity>
      </View>
      <Text style = {{paddingLeft: 14,paddingTop:8,fontSize:13}}>Liked by <Text style = {{fontWeight: '700'}}>neymarjr </Text> 
      and <Text style = {{fontWeight: '700'}}>others</Text></Text>
      <Text style = {{fontWeight: '700',paddingLeft: 14,paddingTop:5,fontSize:13}}>BARCA Dream Teen</Text>
      <Text style = {{fontWeight: '200',paddingLeft: 14,paddingTop:5,fontSize:13}}>View all 493 comments</Text>
      <Text style = {{fontWeight: '200',paddingLeft: 14,paddingTop:5,fontSize:13}}>18 hours ago</Text>




      <View style = {{flexDirection:'row'}}>
      <TouchableOpacity>
      <Image source ={avatar8} style ={styles.image2}></Image>
      </TouchableOpacity>
      <Text style = {{paddingTop:22,fontWeight:'bold'}}>mancity</Text>
      <TouchableOpacity>
      <MaterialCommunityIcons name="dots-horizontal" size={24} color="black" style = {{marginLeft: 200,marginTop:16}}/>
      </TouchableOpacity>
      </View>
      <Image source={mc} style = {{width : '100%',height: null,aspectRatio: 1080/1400}}>
      </Image>
      <View style = {{flexDirection:'row'}}>
      <TouchableOpacity>
      <MaterialCommunityIcons name="heart-outline" size={32} color="black" style = {{marginTop: 8,marginLeft:10}}/>
      </TouchableOpacity>
      <TouchableOpacity>
      <Ionicons name="md-chatbubble-outline" size={27} color="black" style = {{marginTop: 8,marginLeft:15}}/>
      </TouchableOpacity>
      <TouchableOpacity>
      <Ionicons name="ios-paper-plane-outline" size={27} color="black" style = {{marginTop: 8,marginLeft:15}}/>
      </TouchableOpacity>
      <TouchableOpacity>
      <FontAwesome name="bookmark-o" size={24} color="black" style = {{marginTop: 8,marginLeft:210}}/>
      </TouchableOpacity>
      </View>
      <Text style = {{paddingLeft: 14,paddingTop:8,fontSize:13}}>Liked by <Text style = {{fontWeight: '700'}}>kunaguero </Text> 
      and <Text style = {{fontWeight: '700'}}>others</Text></Text>
      <Text style = {{fontWeight: '700',paddingLeft: 14,paddingTop:5,fontSize:13}}>THE BLUE CITY</Text>
      <Text style = {{fontWeight: '200',paddingLeft: 14,paddingTop:5,fontSize:13}}>View all 389 comments</Text>
      <Text style = {{fontWeight: '200',paddingLeft: 14,paddingTop:5,fontSize:13}}>1 days ago</Text>



      
      
      </View>
      </ScrollView>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  box2: {
    backgroundColor:'blue',
  },
  image1:{
    borderRadius: 100,
    width:68,
    height:68,
    marginHorizontal: 10
    
  },
  image2:{
    borderRadius: 100,
    width:40,
    height:40,
    marginHorizontal: 10,
    marginVertical: 10,
  }
});
