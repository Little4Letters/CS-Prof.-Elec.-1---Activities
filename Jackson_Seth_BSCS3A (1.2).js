// Create any javscript program whereas it is a...
// "SOCIAL MEDIA POPULARITY"
// with minimum of;
// 3 variables or properties,
// 3 arrays,
// 3 conditionals,
// 3 loops,
// 4 classes,
// 4 objects,
// 2 constructors,
// 5 methods,
// 2 object literals, (Configurate the usage and Analytics to summarize the platforms)
// 2 encapsulation,
// 1 abstraction,
// 2 inheritance, and
// 1 polymorphism

const systemSettings = {
  minUsageScore: 1,
  maxUsageScore: 100,
  programName: "Global's Top Social Media Performer",
};

const platformAnalytics = {
  totalPlatforms: 0,
  mostUsedPlatform: "None",
};

class SocialPlatform {
  #usageScores = [];

  constructor(platformName, monthlyActiveUsers) {
    if (new.target === SocialPlatform) {
      throw new Error(
        "Cannot instantiate abstract class 'SocialPlatform' directly.",
      );
    }
    this.platformName = platformName;
    this.monthlyActiveUsersBillion = monthlyActiveUsers;
  }

  addUsageScore(score) {
    if (
      score >= systemSettings.minUsageScore &&
      score <= systemSettings.maxUsageScore
    ) {
      this.#usageScores.push(score);
    } else {
      console.log(
        `Invalid Data! ${score} is out of scope for ${this.platformName}.`,
      );
    }
  }

  getAverageUsage() {
    if (this.#usageScores.length === 0) return 0;

    let totalScore = 0;
    for (let i = 0; i < this.#usageScores.length; i++) {
      totalScore += this.#usageScores[i];
    }
    return Number((totalScore / this.#usageScores.length).toFixed(1));
  }

  getSummary() {
    throw new Error("Abstract method must be implemented by subclasses!");
  }
}

class VideoPlatform extends SocialPlatform {
  constructor(platformName, monthlyActiveUsersBillion, avgDailyWatchMins) {
    super(platformName, monthlyActiveUsersBillion);
    this.avgDailyWatchMins = avgDailyWatchMins;
  }

  getSummary() {
    return `[Video Platform] ${this.platformName} | Active Users: ${this.monthlyActiveUsersBillion}B | Average Daily Watch: ${this.avgDailyWatchMins} mins | Usage Score: ${this.getAverageUsage()}/100`;
  }
}

class MessagingPlatform extends SocialPlatform {
  constructor(platformName, monthlyActiveUsersBillion, dailyMessagesBillion) {
    super(platformName, monthlyActiveUsersBillion);
    this.dailyMessagesBillion = dailyMessagesBillion;
  }

  getSummary() {
    return `[Messaging Platform] ${this.platformName} | Active Users: ${this.monthlyActiveUsersBillion}B | Daily Messages: ${this.dailyMessagesBillion}B | Usage Score: ${this.getAverageUsage()}/100`;
  }
}

class UsageAuditor {
  #trustRating;

  constructor(auditorName) {
    this.auditorName = auditorName;
    this.#trustRating = 95;
  }

  auditPlatform(platform, ratingScore) {
    platform.addUsageScore(ratingScore);
    this.#trustRating += 1;
    console.log(
      ` ${this.auditorName} rated ${platform.platformName} -> ${ratingScore}/100% out of 100,000 Users with different demographics amd platforms`,
    );
  }

  getTrustRating() {
    return this.#trustRating;
  }
}

//This part I made now is OBJECT INSTANTIATIONS

const platformCatalog = [];

const batchUsageScores = [92, 88, 95, 90, 85];

const targetDemographics = ["Gen Z", "Millennials", "Gen X"];

const YouTube = new VideoPlatform("YouTube", 2.7, 48);
const TikTok = new VideoPlatform("TikTok", 1.8, 52);
const WhatsApp = new MessagingPlatform("WhatsApp", 2.0, 100);
const leadAuditor = new UsageAuditor("Devs United Statistics");

platformCatalog.push(YouTube, TikTok, WhatsApp);

console.log(`=== ${systemSettings.programName} ===\n`);

// Audit every platform in the catalog so all social media are displayed.
for (let i = 0; i < platformCatalog.length; i++) {
  leadAuditor.auditPlatform(platformCatalog[i], batchUsageScores[i]);
}

TikTok.addUsageScore(94);
TikTok.addUsageScore(96);
WhatsApp.addUsageScore(82);
WhatsApp.addUsageScore(79);

console.log("\n--- Top Social Media Usage Summaries ---");

let highestScore = 0;
let catalogIndex = 0;

while (catalogIndex < platformCatalog.length) {
  const platform = platformCatalog[catalogIndex];

  console.log(platform.getSummary());

  const avgUsage = platform.getAverageUsage();

  if (avgUsage >= 90) {
    console.log(`  -> Status: Tier 1 - Dominant Global Leader`);
    console.log();
  } else if (avgUsage >= 75) {
    // CONDITIONAL #3
    console.log(`  -> Status: Tier 2 - High Engagement Platform`);
    console.log();
  } else {
    console.log(`  -> Status: Tier 3 - Moderate Usage Platform`);
    console.log();
  }

  // Update Object Literal data
  if (avgUsage > highestScore) {
    highestScore = avgUsage;
    platformAnalytics.mostUsedPlatform = platform.platformName;
  }

  catalogIndex++;
}

platformAnalytics.totalPlatforms = platformCatalog.length;

console.log("\n--- System Summary ---");
console.log();
console.log(`Total Platforms Tracked: ${platformAnalytics.totalPlatforms}`);
console.log(`Top Usage Performer: ${platformAnalytics.mostUsedPlatform}`);
console.log(
  `${leadAuditor.auditorName} Trust Score: ${leadAuditor.getTrustRating()}%`,
);
console.log();
