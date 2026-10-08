import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const stories = [
  {
    title: "The Quiet Hours",
    category: "FICTION  /  8 MIN READ",
    description:
      "Mara discovers that the old clock shop on her street keeps time for a very different kind of day.",
    color: "#D9E8E3",
  },
  {
    title: "Letters from Cebu",
    category: "ESSAY  /  5 MIN READ",
    description:
      "A collection of small observations about home, distance, and the people who make a place feel familiar.",
    color: "#F3E2CF",
  },
  {
    title: "A Small Atlas",
    category: "POETRY  /  3 MIN READ",
    description:
      "Brief poems mapping the corners of a city through its rain, its rooftops, and its morning markets.",
    color: "#E8E2F0",
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.intro}>
        <Text style={styles.kicker}>JESSABEL DELA CRUZ / WRITER</Text>
        <Text style={styles.heading}>Stories worth{"\n"}staying for.</Text>
        <Text style={styles.description}>
          A collection of recent work, notes, and places to begin.
        </Text>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Selected stories</Text>
        <Text style={styles.count}>03</Text>
      </View>

      {stories.map((story, index) => (
        <TouchableOpacity
          key={story.title}
          accessibilityRole="button"
          accessibilityLabel={`Read ${story.title}`}
          activeOpacity={0.75}
          onPress={() => navigation.navigate("StoryDetails", { story })}
          style={styles.storyRow}
        >
          <View style={[styles.storyNumber, { backgroundColor: story.color }]}>
            <Text style={styles.storyNumberText}>{`0${index + 1}`}</Text>
          </View>
          <View style={styles.storyText}>
            <Text style={styles.storyCategory}>{story.category}</Text>
            <Text style={styles.storyTitle}>{story.title}</Text>
          </View>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 36,
  },
  intro: {
    paddingTop: 34,
    paddingBottom: 34,
  },
  kicker: {
    color: "#52766A",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1,
  },
  heading: {
    color: "#17221F",
    fontSize: 38,
    fontWeight: "700",
    lineHeight: 43,
    marginTop: 13,
  },
  description: {
    color: "#68736F",
    fontSize: 15,
    lineHeight: 22,
    marginTop: 12,
    maxWidth: 300,
  },
  sectionHeader: {
    alignItems: "center",
    borderBottomColor: "#E4E8E5",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 12,
  },
  sectionTitle: {
    color: "#17221F",
    fontSize: 18,
    fontWeight: "700",
  },
  count: {
    color: "#89928E",
    fontSize: 12,
    fontWeight: "600",
  },
  storyRow: {
    alignItems: "center",
    borderBottomColor: "#E4E8E5",
    borderBottomWidth: 1,
    flexDirection: "row",
    minHeight: 94,
    paddingVertical: 14,
  },
  storyNumber: {
    alignItems: "center",
    borderRadius: 8,
    height: 54,
    justifyContent: "center",
    width: 54,
  },
  storyNumberText: {
    color: "#26312D",
    fontSize: 14,
    fontWeight: "700",
  },
  storyText: {
    flex: 1,
    marginLeft: 15,
  },
  storyCategory: {
    color: "#78827D",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 0.6,
  },
  storyTitle: {
    color: "#17221F",
    fontSize: 17,
    fontWeight: "600",
    marginTop: 6,
  },
  arrow: {
    color: "#82908A",
    fontSize: 26,
    marginLeft: 8,
  },
  profilePrompt: {
    alignItems: "center",
    backgroundColor: "#E9EFEC",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 26,
    paddingHorizontal: 16,
    paddingVertical: 18,
  },
  profileCopy: {
    flex: 1,
    paddingRight: 8,
  },
  profileTitle: {
    color: "#17221F",
    fontSize: 14,
    fontWeight: "700",
  },
  profileSubtitle: {
    color: "#68736F",
    fontSize: 12,
    marginTop: 4,
  },
  profileButton: {
    alignItems: "center",
    backgroundColor: "#17221F",
    borderRadius: 7,
    minWidth: 76,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  profileButtonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
  },
});
