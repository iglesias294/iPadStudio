import React from "react";
import { Button, Input } from 'react-native-elements'

import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { Actions } from "react-native-router-flux";

let servers = [
    {
        nickName: '',
        address: '',
        port: ''
    }
]

const Home = () => (
    <View style={styles.container}>
        <Text>Welcome to iPad Studio Proof of Concept</Text>

        <Input
            placeholder='URL or IP Address'
        />
        <Input
            placeholder='Port'
        />

        <Button
            title="Connect to Code"
            onPress={_ => Actions.jump('code')}
        />


    </View>
)
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});