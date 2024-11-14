import React, { useState } from 'react';
import { Menu, Divider } from 'react-native-paper';
import AntDesign from '@expo/vector-icons/AntDesign';  // Importing AntDesign icons
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'; // Import TouchableOpacity and Text
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';

const Dropdown = () => {
    const [visible, setVisible] = useState(false);

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    return (
        <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
                <TouchableOpacity style={styles.menuButton} onPress={openMenu}>
                    <Entypo name="dots-three-vertical" size={24} color="#fff" />
                </TouchableOpacity>
            }
            contentStyle={styles.menuContainer} // Apply custom styles for width and background
        >
            {/* Menu items with icons */}
            <Menu.Item
                onPress={() => { console.log('Option 1 clicked'); closeMenu(); }}
                title="Task Lists"
                titleStyle={styles.menuItemTitle} // Change title color to white
            />
            <Menu.Item
                onPress={() => { console.log('Option 2 clicked'); closeMenu(); }}
                title="Add in Batch Mode"
                titleStyle={styles.menuItemTitle} // Change title color to white
            />
            <Menu.Item
                onPress={() => { console.log('Option 3 clicked'); closeMenu(); }}
                title="Remove Ads"
                titleStyle={styles.menuItemTitle} // Change title color to white
            />
            <Menu.Item
                onPress={() => { console.log('Option 4 clicked'); closeMenu(); }}
                title="More Apps"
                titleStyle={styles.menuItemTitle} // Change title color to white
            />
            <Menu.Item
                onPress={() => { console.log('Option 5 clicked'); closeMenu(); }}
                title="Send feedback"
                titleStyle={styles.menuItemTitle} // Change title color to white
            />
            <Menu.Item
                onPress={() => { console.log('Option 6 clicked'); closeMenu(); }}
                title="Follow us"
                titleStyle={styles.menuItemTitle} // Change title color to white
            />
            <Menu.Item
                onPress={() => { console.log('Option 6 clicked'); closeMenu(); }}
                title="Invite friends to the app"
                titleStyle={styles.menuItemTitle} // Change title color to white
            />
            <Menu.Item
                onPress={() => { console.log('Option 6 clicked'); closeMenu(); }}
                title="Settings"
                titleStyle={styles.menuItemTitle} // Change title color to white
            />
        </Menu>
    );
};

// Custom styles for the menu
const styles = StyleSheet.create({
    menuContainer: {
        width: 200, // Set the width of the dropdown
        backgroundColor: '#4c6db2',
        marginLeft: 100,
    },
    menuButton: {
        flexDirection: 'row', // Align icon and text horizontally
        alignItems: 'center', // Center icon and text vertically
        padding: 10, // Add some padding for the button
    },
    menuItemTitle: {
        color: 'white',
        fontSize: 16,
    },
});

export default Dropdown;
