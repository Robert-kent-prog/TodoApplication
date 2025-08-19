## To-Do Mobile Application  

### **Overview**  
A React Native-based mobile application designed to help users manage their tasks efficiently. The app provides an intuitive interface with features like task categorization, search functionality, and a side drawer for navigation. This project is currently under development and will soon be available on the Google Play Store.  

### **Features**  
- **Task Management**: Add, view, and delete tasks.  
- **Categorization**: Organize tasks into different lists (e.g., "Work," "Personal").  
- **Search Functionality**: Quickly find tasks using the search feature.  
- **Side Drawer Navigation**: Access app settings and options easily.  
- **Responsive Design**: Optimized for both Android and iOS devices.
   
---

### **Technologies**  
- **React Native**: For building the cross-platform mobile application.  
- **Expo**: For simplifying the development process and enabling easy access to native features.  
- **react-native-paper**: For UI components and theming.  
- **Vector Icons**: For customizable icons (@expo/vector-icons).  
- **JavaScript**: Programming language used for development.  

---

### **Code Overview**  
#### **Header Section**  
- Contains a check icon, dropdown menu for selecting task lists, and a search button.  
- The `DropDown` component allows users to switch between different task lists.  
- The `SideDrawer` component provides navigation options.  

---

#### **Content Section**  
- Displays a message based on the selected task list:  
  - If "All Lists" is selected, it shows "Nothing to do."  
  - Otherwise, it indicates that the selected list is empty.  

#### **Styling**  
- Uses `StyleSheet.create` to define reusable styles for the app's components.
  
---

### **Setup Instructions**  
#### **Install Node.js and Expo CLI**  
Ensure you have Node.js installed. Install Expo CLI globally:  
```bash
npm install -g expo-cli
```
#### **Clone the Repository**

```bash
git clone https://github.com/your-repo-url/todo-app.git
cd todo-app
```

#### **Install Dependencies** 
```bash
npm install
```
#### **Clone the Repository** Run the Application
**Start the development server**:
```bash
npm start
```
Use the Expo Go app on your device or emulator to scan the QR code and run the app.

#### **Future Plans** 
 - **Categorization**:Task Creation and Editing: Allow users to add and edit tasks.
 - **Persistent Storage**: Save tasks locally using AsyncStorage or integrate with a backend database.
 - **Push Notifications**: Notify users about upcoming tasks.
 - **Google Play Store Release**: Publish the app after completing development and testing.

---

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Suggestions and improvements are always welcome!

---

## License

This project is licensed under the **MIT License**. Feel free to use, modify, and distribute the code as needed.

---

## Contact

For any questions or feedback, feel free to reach out:

- **Email:** robertmuendo828@gmail.com  
- **GitHub:** [@Robert-kent-prog](https://github.com/Robert-kent-prog)
