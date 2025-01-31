import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider as PaperProvider, Searchbar } from 'react-native-paper';
import { useRouter } from 'expo-router';
import Foundation from '@expo/vector-icons/Foundation';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native';

export default function Index() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <PaperProvider>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.check} onPress={() => router.back()}>
                        <FontAwesome5 name="arrow-left" size={24} color="white" />
                    </TouchableOpacity>

                    <View style={styles.check1}>
                        <Searchbar
                            placeholder="Search"
                            onChangeText={setSearchQuery}
                            value={searchQuery}
                            style={styles.searchbar} // Custom styling for the Searchbar
                            placeholderTextColor="white" // Change placeholder text color
                            inputStyle={styles.searchInput} // Custom input text style
                            icon={({ size, color }) => (
                                <Ionicons name="search" size={size} color="white" /> // Use "search" instead of "ios-search"
                            )}
                        />
                    </View>
                </View>
            </View>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#03396c',
    },
    check: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
    },
    check1: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        width: 200,
        alignSelf: 'center'
    },
    header: {
        height: 60,
        backgroundColor: '#004a94',
        justifyContent: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start', // Adjust for alignment of items in the header
        borderBottomWidth: 1,
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content1: {
        color: "#fff",
        fontSize: 20,
    },
    searchbar: {
        backgroundColor: '#004a94', // Change the background color of the search bar
        borderRadius: 20, // Rounded corners
        paddingHorizontal: 10,
    },
    searchInput: {
        color: 'white', // Change the text color inside the search bar
        fontSize: 16, // Change the font size of the text
    },
});
