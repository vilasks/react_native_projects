import { View, Linking, Text, StyleSheet, useColorScheme, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'

export default function FancyCard(): JSX.Element {
    const isDarkMode = useColorScheme() === "dark";
    function OpenLink(url: string) {
        Linking.openURL(url)
    }
    return (
        <View>
            <Text style={isDarkMode ? styles.hw : styles.hb}>Trending Places</Text>
            <View style={[styles.card]}>
                <Image source={{
                    uri: "https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }}
                    style={styles.image}
                />
                <View style={styles.caption}>
                    <Text style={styles.title}>Sun And Tree</Text>
                    <Text style={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ducimus aperiam quas, nihil, incidunt id necessitatibus doloribus labore modi accusantium iure alias non sed? Inventore officia cumque commodi sit voluptate?</Text>
                    <View style={styles.container}>
                        <Button title='Read More' onPress={() => OpenLink("https://www.google.com")} />
                        <TouchableOpacity >
                            <Text>12 Days ago</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    hb: {
        color: "#000000",
        fontSize: 24
    },
    hw: {
        color: "#ffffff",
        fontSize: 24
    },
    card: {
        padding: 5
    },

    image: {
        // width: 200,
        height: 200
    },

    title: {
        fontSize: 20,
        color: "#00002f"
    },

    desc: {
        color: "#00012f"
    },

    timeStamp: {
        textAlign: "right",
        marginTop: 10
    },

    caption: {
        flex: 1,
    },

    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    }
})