import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import ActionCard from "./TabBar";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      {/* Profile Info Section */}
      <View style={styles.profileSection}>
        <Image source={""} style={styles.avatar} />
        <Text style={styles.nameText}>Jessabel Dela Cruz</Text>
        <Text style={styles.bioText}>Writer | Author</Text>

        {/* Edit Button */}
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>142</Text>
          <Text style={styles.statLabel}>Projects</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>5.5k</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>1.2k</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>

      {/* Action List Section */}
      <View style={styles.actionSection}>
        <Text style={styles.sectionTitle}>Account Settings</Text>
        <ActionCard
          title="Personal Information"
          subtitle="Update your email and phone number"
        />
        <ActionCard
          title="Notifications"
          subtitle="Manage push and email alerts"
        />
        <ActionCard
          title="Security"
          subtitle="Password, 2FA, and linked accounts"
        />
        <ActionCard title="Help & Support" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 8,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111827",
  },
  profileSection: {
    alignItems: "center",
    paddingVertical: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#FFFFFF",
    marginBottom: 16,
  },
  nameText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1F2937",
  },
  bioText: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
    marginBottom: 16,
  },
  editButton: {
    backgroundColor: "#111827",
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  editButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 14,
  },
  statsContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    borderRadius: 16,
    paddingVertical: 16,
    marginBottom: 32,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  statBox: {
    flex: 1,
    alignItems: "center",
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1F2937",
  },
  statLabel: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 4,
  },
  divider: {
    width: 1,
    backgroundColor: "#E5E7EB",
  },
  actionSection: {
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
    marginLeft: 24,
    marginBottom: 16,
  },
});
