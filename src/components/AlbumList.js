import React from "react";
import { FlatList } from "react-native";
import AlbumDetail from "./AlbumDetail";

const AlbumList = ({ album }) => {
  const renderItem = ({ item }) => <AlbumDetail album={item} />;
  return (
    <FlatList
      data={album} 
      renderItem={renderItem}
      keyExtractor={item => item.title}
    />    
  );  
}

export default AlbumList;