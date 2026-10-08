import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function TaskInput({ value, onChangeText, onAdd }) {
  return (
    <View style={styles.inputRow}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onAdd}
        placeholder="Add a new task"
        placeholderTextColor="#8b8f9a"
        returnKeyType="done"
        style={styles.input}
      />
      d
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Add task"
        onPress={onAdd}
        style={({ pressed }) => [styles.addButton, pressed && styles.pressed]}
      >
        <Text style={styles.addButtonText}>ADD</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  inputRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },
  input: {
    backgroundColor: "#fffdf9",
    borderColor: "#ded9cf",
    borderRadius: 14,
    borderWidth: 1,
    color: "#202c2b",
    flex: 1,
    fontSize: 16,
    height: 52,
    paddingHorizontal: 16,
  },
  addButton: {
    alignItems: "center",
    backgroundColor: "#d9694b",
    borderRadius: 14,
    height: 52,
    justifyContent: "center",
    width: 78,
  },
  addButtonText: {
    color: "#fffaf4",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1,
  },
  pressed: {
    opacity: 0.72,
  },
});
