import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'

export default function FlatCards(): JSX.Element {
    const isDarkMode = useColorScheme() === "dark";
    return (
        <View>
            <Text style={isDarkMode ? styles.headingTextWhite : styles.headingTextBlack}>Flat Cards</Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardRed]}>
                    <Text style={isDarkMode ? styles.headingTextWhite : styles.headingTextBlack}>Card</Text>
                </View>
                <View style={[styles.card, styles.cardGreen]}>
                    <Text style={isDarkMode ? styles.headingTextWhite : styles.headingTextBlack}>Card</Text>
                </View>
                <View style={[styles.card, styles.cardBlue]}>
                    <Text style={isDarkMode ? styles.headingTextWhite : styles.headingTextBlack}>Card</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingTextWhite: {
        fontSize: 24,
        color: "#ffffff"
    },
    headingTextBlack: {
        fontSize: 24,
        color: "#000000"
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        columnGap: 5
    },
    card: {
        width: 100,
        height: 100,
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    cardRed: {
        backgroundColor: "#ff0000"
    },
    cardBlue: {
        backgroundColor: "#0000ff"
    },
    cardGreen: {
        backgroundColor: "#00ff00"
    }
})