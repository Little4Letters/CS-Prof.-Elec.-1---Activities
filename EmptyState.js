import { StyleSheet, Text, View } from "react-native";

export default function EmptyState() {
  return (
    <View style={styles.emptyState}>
      <Text style={styles.emptyTitle}>Your list is clear.</Text>
      <Text style={styles.emptyText}>Add a task above to get moving.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyState: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 70,
  },
  emptyTitle: {
    color: "#202c2b",
    fontSize: 20,
    fontWeight: "800",
  },
  emptyText: {
    color: "#7f8782",
    fontSize: 14,
    marginTop: 8,
  },
});
