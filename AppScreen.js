import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import FocusHeader from "./HeaderSec";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

export default function AppScreen() {
  const [items, setItems] = useState([
    { id: "1", title: "Plan the week", completed: false },
    { id: "2", title: "Finish Daily activities", completed: true },
  ]);
  const [inputText, setInputText] = useState("");

  const addItem = () => {
    const title = inputText.trim();

    if (!title) {
      return;
    }

    setItems((currentItems) => [
      { id: `${Date.now()}`, title, completed: false },
      ...currentItems,
    ]);
    setInputText("");
  };

  const toggleItem = (id) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  const deleteItem = (id) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  const completedCount = items.filter((item) => item.completed).length;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      <StatusBar style="light" />
      <FocusHeader completedCount={completedCount} totalCount={items.length} />
      <View style={styles.content}>
        <TaskInput
          value={inputText}
          onChangeText={setInputText}
          onAdd={addItem}
        />
        <TaskList items={items} onToggle={toggleItem} onDelete={deleteItem} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f4f1eb",
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
