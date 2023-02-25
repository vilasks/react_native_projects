import { ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'

export default function ElevatedCards(): JSX.Element {
    const isDarkMode = useColorScheme() === "dark";
    return (
        <View>
            <Text style={isDarkMode ? styles.headingTextWhite : styles.headingTextBlack}>Elevated Cards</Text>
            <ScrollView style={styles.container} horizontal={true}>
                <View>
                    <View style={[styles.card, styles.cardElevated, styles.cardRed]}>
                        <Text style={isDarkMode ? styles.headingTextWhite : styles.headingTextBlack}>Card</Text>
                    </View>
                </View>
                <View>
                    <View style={[styles.card, styles.cardElevated, styles.cardRed]}>
                        <Text style={isDarkMode ? styles.headingTextWhite : styles.headingTextBlack}>Card</Text>
                    </View>
                </View>
                <View>
                    <View style={[styles.card, styles.cardElevated, styles.cardRed]}>
                        <Text style={isDarkMode ? styles.headingTextWhite : styles.headingTextBlack}>Card</Text>
                    </View>
                </View>
                <View>
                    <View style={[styles.card, styles.cardElevated, styles.cardRed]}>
                        <Text style={isDarkMode ? styles.headingTextWhite : styles.headingTextBlack}>Card</Text>
                    </View>
                </View>
                <View>
                    <View style={[styles.card, styles.cardElevated, styles.cardRed]}>
                        <Text style={isDarkMode ? styles.headingTextWhite : styles.headingTextBlack}>Card</Text>
                    </View>
                </View>
                <View>
                    <View style={[styles.card, styles.cardElevated, styles.cardRed]}>
                        <Text style={isDarkMode ? styles.headingTextWhite : styles.headingTextBlack}>Card</Text>
                    </View>
                </View>
                <View>
                    <View style={[styles.card, styles.cardElevated, styles.cardRed]}>
                        <Text style={isDarkMode ? styles.headingTextWhite : styles.headingTextBlack}>Card</Text>
                    </View>
                </View>
                <View>
                    <View style={[styles.card, styles.cardElevated, styles.cardRed]}>
                        <Text style={isDarkMode ? styles.headingTextWhite : styles.headingTextBlack}>Card</Text>
                    </View>
                </View>
                <View>
                    <View style={[styles.card, styles.cardElevated, styles.cardRed]}>
                        <Text style={isDarkMode ? styles.headingTextWhite : styles.headingTextBlack}>Card</Text>
                    </View>
                </View>
                <View>
                    <View style={[styles.card, styles.cardElevated, styles.cardRed]}>
                        <Text style={isDarkMode ? styles.headingTextWhite : styles.headingTextBlack}>Card</Text>
                    </View>
                </View>
                <View>
                    <View style={[styles.card, styles.cardElevated, styles.cardRed]}>
                        <Text style={isDarkMode ? styles.headingTextWhite : styles.headingTextBlack}>Card</Text>
                    </View>
                </View>
                <View >
                    <View style={[styles.card, styles.cardElevated, styles.cardRed]}>
                        <Text style={isDarkMode ? styles.headingTextWhite : styles.headingTextBlack}>Card</Text>
                    </View>
                </View>
            </ScrollView>
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

    },
    card: {
        width: 100,
        height: 100,
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        margin: 5,
    },

    cardElevated: {

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