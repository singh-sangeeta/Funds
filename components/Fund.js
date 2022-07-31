import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator, Button, FlatList, StyleSheet, TouchableOpacity,
    Text, View, TextInput, Image,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import Scheme from './data';
import axios from 'axios';
import { styles } from './CSS/styles.js';

const Funds = (props) => {
    const navigation = useNavigation();
    const [isLoading, setLoading] = useState(false);
    const [schemesinfo, setSchemesInfo] = useState([]);


    // useEffect(() => {

    //     fetch("https://apimocha.com/truemind/schemes",{
    //         method:'GET',
    //         Headers:{
    //             "Connection":"close"

    //         }
    //     })
    //     .then((response) => response.json())
    //     .then((responseJson) => {
    //         setSchemesInfo(responseJson.schemesinfo)
    //     }).catch((error) => {
    //         alert('error')
    //     })
    //     console.log("YFVCUIFEHF", schemes)

    // }, [])



    return (
        <>
            <View style={styles.container}>
                {isLoading ? (
                    <ActivityIndicator />
                ) : (
                    <View>
                        <Text style={styles.title}>MUTUAL FUNDS LISTS</Text>
                        <FlatList
                            data={Scheme}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <View style={styles.renderitemstyle} >
                                    <View style={styles.rendercard} >
                                        <View style={styles.rendertextview} >
                                            <Text style={styles.cardheading}
                                                onPress={() => props.navigation.navigate('Flowchart', {item:item})}>
                                                {item.name}
                                            </Text>
                                            <Text style={styles.cardtext}>
                                                ({item.classification}    {item.category}     {item.riskmeter})</Text>
                                        </View>
                                        <View style={styles.buttonview}>
                                            <Text style={styles.button} >
                                                INVEST
                                            </Text></View>
                                    </View>
                                </View>
                            )} />

                    </View>

                )
                }
            </View >
        </>
    )
};

export default Funds;
