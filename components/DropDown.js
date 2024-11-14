import React, { useState } from 'react';
import { Menu, Divider } from 'react-native-paper';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Dropdown = ({ onSelectItem }) => {
    const [visible, setVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState("All Lists");

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const handleSelect = (item) => {
        setSelectedItem(item);
        onSelectItem(item); // Use the correct prop to pass the selected item
        closeMenu();
    };

    return (
        <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
                <TouchableOpacity style={styles.menuButton} onPress={openMenu}>
                    <Text style={styles.menuButtonText}>{selectedItem}</Text>
                    <MaterialIcons name="arrow-drop-down" size={30} color="#fff" />
                </TouchableOpacity>
            }
            contentStyle={styles.menuContainer}
        >
            <TouchableOpacity onPress={() => handleSelect('All Lists')} style={styles.menuItem2}>
                <MaterialIcons name="home" size={24} color="white" />
                <Text style={styles.menuItemText}>All Lists</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSelect('Default')} style={styles.menuItem}>
                <FontAwesome6 name="list-ul" size={24} color="white" />
                <Text style={styles.menuItemText}>Default</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSelect('Personal')} style={styles.menuItem}>
                <FontAwesome6 name="list-ul" size={24} color="white" />
                <Text style={styles.menuItemText}>Personal</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSelect('Shopping')} style={styles.menuItem}>
                <FontAwesome6 name="list-ul" size={24} color="white" />
                <Text style={styles.menuItemText}>Shopping</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSelect('WishList')} style={styles.menuItem}>
                <FontAwesome6 name="list-ul" size={24} color="white" />
                <Text style={styles.menuItemText}>WishList</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSelect('Work')} style={styles.menuItem}>
                <FontAwesome6 name="list-ul" size={24} color="white" />
                <Text style={styles.menuItemText}>Work</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSelect('Finished')} style={styles.menuItem2}>
                <MaterialCommunityIcons name="checkbox-marked" size={24} color="white" />
                <Text style={styles.menuItemText}>Finished</Text>
                <Text style={styles.count}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSelect('New List')} style={styles.menuItem2}>
                <MaterialIcons name="format-list-bulleted-add" size={24} color="white" />
                <Text style={styles.menuItemText}>New List</Text>
            </TouchableOpacity>
        </Menu>
    );
};

const styles = StyleSheet.create({
    menuContainer: {
        width: 200,
        backgroundColor: '#03396b',
    },
    menuButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    menuButtonText: {
        color: 'white',
        marginRight: 10,
        fontSize: 16,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    menuItem2: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
        paddingHorizontal: 5,
    },
    menuItemText: {
        color: 'white',
        marginLeft: 10,
        fontSize: 20,
    },
    count: {
        color: 'white',
        marginLeft: 60,
        fontSize: 20,
    },
});

export default Dropdown;
