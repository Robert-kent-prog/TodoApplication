import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';
import Foundation from '@expo/vector-icons/Foundation';
import Ionicons from '@expo/vector-icons/Ionicons';
import Dropdown from '../components/DropDown'; // Ensure this is wrapped in Text correctly
import SideDrawer from './SideDrawer'; // Ensure this is wrapped in Text correctly
import { TouchableOpacity } from 'react-native';

export default function Index() {
  const [selectedItem, setSelectedItem] = useState("All List"); // Default to "All List"
  const router = useRouter();

  const handleDropdownSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.check}>
            <Foundation name="check" size={24} color="#03396c" />
          </View>
          <Dropdown onSelectItem={handleDropdownSelect} />

          <TouchableOpacity style={styles.search} onPress={() => router.push("./search")}>
            <Ionicons name="search-sharp" size={24} color="#fff" />
          </TouchableOpacity>

          <SideDrawer />
        </View>

        <View style={styles.content}>
          {selectedItem === "All Lists" ? (
            <Text style={styles.content1}>Nothing to do</Text>
          ) : (
            <Text style={styles.content1}>
              List <Text style={styles.selectedText}>{selectedItem}</Text> is empty
            </Text>
          )}
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
    backgroundColor: '#fff',
    borderRadius: 50,
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
  header: {
    height: 60,
    backgroundColor: '#004a94',
    justifyContent: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Adjust for alignment of items in the header
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
  selectedText: {
    fontWeight: 'bold', // Example of styling for selected text
    color: '#005d94', // Color for selected item text
  },
});
