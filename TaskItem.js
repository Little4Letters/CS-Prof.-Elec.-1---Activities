import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

export default function TaskItem({ item, isFirst, onToggle, onDelete }) {
  return (
    <View style={[styles.itemRow, isFirst && styles.firstItem]}>
      <TouchableOpacity
        accessibilityRole="checkbox"
        accessibilityState={{ checked: item.completed }}
        accessibilityLabel={`Mark ${item.title} as ${item.completed ? "incomplete" : "complete"}`}
        onPress={() => onToggle(item.id)}
        style={[styles.checkbox, item.completed && styles.checkboxCompleted]}
      >
        {item.completed && <Text style={styles.checkmark}>x</Text>}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onToggle(item.id)}
        style={styles.itemTextArea}
      >
        <Text
          style={[
            styles.itemTitle,
            item.completed && styles.itemTitleCompleted,
          ]}
        >
          {item.title}
        </Text>
        <Text style={styles.itemStatus}>
          {item.completed ? "COMPLETED" : "IN PROGRESS"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        accessibilityRole="button"
        accessibilityLabel={`Delete ${item.title}`}
        onPress={() => onDelete(item.id)}
        style={({ pressed }) => [
          styles.deleteButton,
          pressed && styles.pressed,
        ]}
      >
        <Text style={styles.deleteText}>DELETE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemRow: {
    alignItems: "center",
    backgroundColor: "#fffdf9",
    borderRadius: 18,
    flexDirection: "row",
    marginTop: 12,
    minHeight: 78,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  firstItem: {
    marginTop: 0,
  },
  checkbox: {
    alignItems: "center",
    borderColor: "#aab2aa",
    borderRadius: 9,
    borderWidth: 2,
    height: 24,
    justifyContent: "center",
    marginRight: 12,
    width: 24,
  },
  checkboxCompleted: {
    backgroundColor: "#2f7d69",
    borderColor: "#2f7d69",
  },
  checkmark: {
    color: "#fffdf9",
    fontSize: 16,
    fontWeight: "800",
  },
  itemTextArea: {
    flex: 1,
    justifyContent: "center",
  },
  itemTitle: {
    color: "#202c2b",
    fontSize: 16,
    fontWeight: "700",
  },
  itemTitleCompleted: {
    color: "#89918b",
    textDecorationLine: "line-through",
  },
  itemStatus: {
    color: "#9a9f9b",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
    marginTop: 5,
  },
  deleteButton: {
    paddingHorizontal: 6,
    paddingVertical: 10,
  },
  deleteText: {
    color: "#c45e48",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 0.6,
  },
  pressed: {
    opacity: 0.72,
  },
});
