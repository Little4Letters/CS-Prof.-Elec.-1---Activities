import { FlatList, StyleSheet } from "react-native";
import EmptyState from "./EmptyState";
import TaskItem from "./TaskItem";

export default function TaskList({ items, onToggle, onDelete }) {
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContent}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={<EmptyState />}
      renderItem={({ item, index }) => (
        <TaskItem
          item={item}
          isFirst={index === 0}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContent: {
    paddingBottom: 28,
    paddingTop: 18,
  },
});
