import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header=({title})=>{
   // const {title}=props;
    return(
        <View>
        <View style={styles.headerstyle}>
            <Text style={styles.textstyle}>
            {title}
            </Text>
        </View>
    </View> 
    );
}

const styles=StyleSheet.create({
    headerstyle:{
        backgroundColor:"#F8F8F8",
        justifyContent:"center",
        alignItems: "center",
        height:60,
        //shadow
        shadowColor:"000",
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.2,
        elevation:2,
    },
    textstyle:{
        fontSize:20,
        color:'black',
        fontWeight:"bold",
    },
});

export default Header;