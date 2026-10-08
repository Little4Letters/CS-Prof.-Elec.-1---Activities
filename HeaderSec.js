import { StyleSheet, Text, View } from "react-native";

export default function FocusHeader({ completedCount, totalCount }) {
  const progress = totalCount
    ? `${(completedCount / totalCount) * 100}%`
    : "0%";

  return (
    <View style={styles.header}>
      <Text style={styles.eyebrow}>TODAY'S FOCUS</Text>
      <Text style={styles.title}>Make space for what matters.</Text>
      <Text style={styles.subtitle}>
        Keep small tasks visible, then clear them one by one.
      </Text>
      <View style={styles.progressRow}>
        <Text style={styles.progressLabel}>{completedCount} completed</Text>
        <Text style={styles.progressTotal}>{totalCount} total</Text>
      </View>
      <View style={styles.progressTrack}>
        <View style={[styles.progressFill, { width: progress }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#202c2b",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingBottom: 28,
    paddingHorizontal: 24,
    paddingTop: 68,
  },
  eyebrow: {
    color: "#f2b36d",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 2,
    marginBottom: 14,
  },
  title: {
    color: "#f8f6f0",
    fontSize: 32,
    fontWeight: "800",
    lineHeight: 37,
    maxWidth: 320,
  },
  subtitle: {
    color: "#b7c0bb",
    fontSize: 15,
    lineHeight: 22,
    marginTop: 12,
    maxWidth: 310,
  },
  progressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 28,
  },
  progressLabel: {
    color: "#f8f6f0",
    fontSize: 13,
    fontWeight: "700",
  },
  progressTotal: {
    color: "#87938d",
    fontSize: 13,
  },
  progressTrack: {
    backgroundColor: "#3a4947",
    borderRadius: 4,
    height: 7,
    marginTop: 10,
    overflow: "hidden",
  },
  progressFill: {
    backgroundColor: "#f2b36d",
    borderRadius: 4,
    height: "100%",
  },
});
