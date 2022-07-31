import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { LineChart } from 'react-native-chart-kit'
import { Rect, Text as TextSVG, Svg } from 'react-native-svg';
import Scheme from './data';
const screenWidth = Dimensions.get("window").width;
import { styles } from './CSS/styles';


const Flowchart = (props) => {
    console.log("props name", props.route.params.item);

    return (
        <View>
            {/* {
                    Scheme.map((item) => {
                        return <Text style={styles.header}> some names of funds</Text>
                    })
                } */}
            <Text style={styles.header}>{props.route.params.item.name}</Text>
            <Text style={styles.cardtext}>
                {props.route.params.item.classification} {props.route.params.item.category} {props.route.params.item.riskmeter}
            </Text>

            <LineChart
                data={{
                    labels: ['25/07/2022'],

                    datasets: [
                        {
                            data: Scheme.map((item) => {
                                return item.aum
                                    // item.minimumInvestment,
                                    // item.nav
                            }),

                        },

                    ],

                }}
                renderDotContent={({ x, y }) => {
                    return (
                        <View
                            style={{
                                height: 24,
                                width: 24,
                                fontSize: 20,
                                backgroundColor: "#abc",
                                position: "absolute",
                                top: y - 36, // <--- relevant to height / width (
                                left: x - 12, // <--- width / 2
                            }}
                        >
                            <Text style={{ fontSize: 10 }}>{props.route.params.item.nav}</Text>
                        </View>
                    );
                }}
                width={Dimensions.get('window').width}
                height={250}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1}
                chartConfig={{
                    backgroundColor: 'white',
                    backgroundGradientFrom: '#fbfbfb',
                    backgroundGradientTo: '#fbfbfb',
                    decimalPlaces: 2,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,

                    style: {
                        borderRadius: 0,
                        marginLeft: 10,
                        marginRight: 10,
                        padding: 10,
                    },
                    propsForDots: {
                        r: '6',
                        strokeWidth: '0',
                        stroke: '#fbfbfb',
                    },
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 6,
                }}

            />
            <Text style={styles.chartbutton}
                onPress={() => props.navigation.navigate('CardPage')}>
                INVEST
            </Text>
        </View >
    )
};



export default Flowchart;