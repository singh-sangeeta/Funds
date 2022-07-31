import React from "react";
import CalendarIcon from "react-calendar-icon";
import { View, Text, TextInput, } from "react-native";
import { styles } from "./CSS/styles";


const CardPage = () => {
    return (
        <View>
        
            <Text style={styles.header}> Enter Installment  Amount</Text>
            <TextInput style={styles.input}>₹   </TextInput>
            {/* <CalendarIcon date={new Date()} /> */}


            <Text style={styles.cardbutton}>
                INVEST Now
            </Text>
        </View>
    )
}
export default CardPage;