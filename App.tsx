import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>



        <View style={{flex:1,backgroundColor:'purple'}}>
          <view style={styles.box}/>
      <View style={styles.square}/>
      <View style={styles.square1}/>
      <View style={styles.square2}/>


    
       
          
    </View>      
    
          </>
    //Kısa olan  Stylesdan tanımlanan örnek(ekranda küçük kare olarak yansıyor)
    //Background color ile başlayan ise Viewin kendi içinde tanımlananlar
  );
}


//İki yöntem var,biri Parametlerli(boyut,renk vs.) Stylesdan tanımlamak. Diğeri ise View komutunun içine tanımlamak. Stylesin içine tanımlarsan daha çok alan kaplıyor ama sonuç daha basit alıyorsun. İkisini aynı anda yaparsan çelişiyor. 
//Yönleri hala tam yapamıyorum
//Farklı stil yapıcaksan ilk önce const stylesdan tanımla
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  
  
  box: {
    backgroundColor: "#99ccff",
  padding: 200,
  height: 50,
  width: 50,
  position: 'absolute',
  flexDirection: 'row',
  right: 25,
  left: 620,
  top: 170,

  
  },

  

  square: {
    backgroundColor: "#7cb48f",
  padding: 60,
  height: 20,
  width: 20,
  position: 'absolute',
  right: 15,
  left: 780,
  top: 170,

  
  },

  square1: {
    backgroundColor: "#cc6600",

  padding: 60,
  height: 20,
  width: 20,
  position: 'absolute',
  right: 15,
  left: 780,
  top: 340,

  
  },

  square2: {
    backgroundColor: "#009900",


  padding: 60,
  height: 20,
  width: 20,
  position: 'absolute',
  right: 15,
  left: 780,
  top: 500,

  
  },

  

});

  
