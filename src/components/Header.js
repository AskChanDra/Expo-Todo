import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function Header(props) {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#e1e1e1',
        padding: 15,

    },
    headerTitle:{
        marginTop: 40,
        textAlign: 'center',
        fontSize: 20,
    }
})