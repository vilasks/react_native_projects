import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'

export default function ContactList() {
    const users = [
        {
            image: "https://randomuser.me/api/portraits/med/men/75.jpg",
            name: "vilas",
            title: "full stack developer",
            age: 20
        },
        {
            image: "https://randomuser.me/api/portraits/med/men/75.jpg",
            name: "vilas",
            title: "full stack developer",
            age: 20
        },
        {
            image: "https://randomuser.me/api/portraits/med/men/75.jpg",
            name: "vilas",
            title: "full stack developer",
            age: 20
        }
    ]
    return (
        <View>
            <Text>Contact List</Text>
            <ScrollView scrollEnabled={false}>
                {users.map((user, i) => {
                    return (
                        <View key={i}>
                            <Image style={{ height: 200 }} source={
                                { uri: user.image }
                            } />
                            <Text>{user.name}</Text>
                            <Text>{user.title}</Text>
                            <Text>{user.age}</Text>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

})