import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';


export default class Shop extends React.Component{

    render(){
        
        return(

            <View style={styles.container}>
                <Button style={styles.button} title="Next" onPress={this.onpress}/>
                <Text style={styles.title}>Profile</Text>
            </View>
        );
    }

    onpress = ()=>{

        this.props.navigation.navigate('Chests')
    }
}

const styles = StyleSheet.create({

    container:{
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },
    
    title:{

        fontSize:26
    },

    button:{

        height:'20%',
        width:'80%'

    }

})