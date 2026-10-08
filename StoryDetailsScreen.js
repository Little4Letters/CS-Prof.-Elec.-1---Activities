import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function StoryDetailsScreen({ navigation, route }) {
  const { story } = route.params;

  return (
    <View style={styles.container}>
      <View style={[styles.artwork, { backgroundColor: story.color }]}>
        <Text style={styles.artworkLabel}>APERTURE / SELECTED WORK</Text>
        <Text style={styles.artworkNumber}>01</Text>
      </View>

      <Text style={styles.category}>{story.category}</Text>
      <Text style={styles.title}>{story.title}</Text>
      <Text style={styles.description}>{story.description}</Text>

      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => navigation.goBack()}
        style={styles.backButton}
        activeOpacity={0.8}
      >
        <Text style={styles.backButtonText}>‹ Back to stories</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9FAFB",
    flex: 1,
    padding: 24,
  },
  artwork: {
    borderRadius: 10,
    height: 220,
    justifyContent: "space-between",
    marginBottom: 28,
    padding: 20,
  },
  artworkLabel: {
    color: "#42544D",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1,
  },
  artworkNumber: {
    color: "#42544D",
    fontSize: 48,
    fontWeight: "700",
  },
  category: {
    color: "#52766A",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 0.8,
  },
  title: {
    color: "#17221F",
    fontSize: 30,
    fontWeight: "700",
    marginTop: 10,
  },
  description: {
    color: "#68736F",
    fontSize: 16,
    lineHeight: 25,
    marginTop: 14,
  },
  backButton: {
    alignSelf: "flex-start",
    backgroundColor: "#17221F",
    borderRadius: 8,
    marginTop: 30,
    paddingHorizontal: 18,
    paddingVertical: 13,
  },
  backButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
});
