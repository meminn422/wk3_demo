import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, Linking} from 'react-native';
// import albumData from '../json/AlbumData.json';
import { ScrollView } from 'react-native';

const AlbumDetail = ({album}) => {
  return (
    <ScrollView>
        <View style={styles.cardContainerStyle}>
            <View style={[styles.thumbnailContainerStyle,styles.cardSectionStyle]}>
                <Image
                    style={styles.thumbnailStyle}
                    source={{ uri: album.thumbnail_image }}
                />
                <View style={styles.headerContainerStyle}>
                    <Text>{album.title}</Text>
                    <Text>{album.artist}</Text>
                </View>
            </View>
            <View style={styles.cardSectionStyle}>
                <Image style={styles.imageStyle}
                source={{uri: album.image}}
                />
            </View>
            <View style={styles.cardSectionStyle}>
          <Pressable 
              onPress={() => Linking.openURL(album.url)}
          >
            <Image
              style={styles.imageStyle}
              source={{
                uri: album.image
              }}
            />
          </Pressable>
        </View> 
        </View> 
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainerStyle:{
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop:10
  },
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  thumbnailStyle: {
    height: 50,
    width: 50, // 正確的屬性是 width，而不是 weight
  },
  headerContainerStyle: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft:5,
    marginTop:3,
  },
  imageStyle:{
    height:300,
    width:null,
  },
  cardSectionStyle:{
    padding:5,
    backgroundColor:"#ddd",
    borderColor:"#ddd",
    borderBottomWidth:1,
  },
});

export default AlbumDetail;
