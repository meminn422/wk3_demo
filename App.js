import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList'; // 導入 AlbumList 元件
import albumData from './src/json/AlbumData.json';

export default function App() {
  return(
    <SafeAreaView style={styles.backgroundstyle}>
      <StatusBar />
      <Header title={albumData.albumTitle} />
      <AlbumList album={albumData.albumList} />
    </SafeAreaView>
  ); 
}

const styles=StyleSheet.create({
  backgroundstyle:{
    flex:1,
    backgroundColor:"#060C20",
  },
});

