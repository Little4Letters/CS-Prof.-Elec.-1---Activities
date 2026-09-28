// Create a JS Program with minimim of 3 each

// Project name - Jackson_SethBSCS3A

// Variables (3)

let personName = "Shainna Dawn Artezuela";
let trRole = "Registered Nurse";
let rgRating = 90;
let ttlScore = 0;
let avgSkill = 0;
let proficientSkills = 0;
let dvlSkills = 0;

// 3 Arrays to present for the output

let skills = 
[ "Medication Administration",
    "Advanced Life Support",
    "Routine Procedures",
    "Medical Technology",
    "Patient Safety & Infection Control"
];

let skillRate = 
[   95,
    92,
    94,
    91,
    94
];

let skillRemarks = [];

// For Loop 1 out 3 po
for (let i = 0; i < skillRate.length; i++) 
    {
        ttlScore += skillRate[i];
    }

    avgSkill = ttlScore / skillRate.length;

    console.log();
    console.log("Nurse " + personName + ", RN as " + trRole);
    console.log();
    console.log("Overall attained Skill of the degree: " + avgSkill.toFixed(1) + "/100");
    console.log();

let statusBe;

// Conditional Statement 1/3 for the Rating itself kay performance base
if (avgSkill >= 90) 
{
    statusBe = "Top Tier Nurse";
} else if (avgSkill >= rgRating) 
{
    statusBe = "Qualified Development";
} else 
{
    statusBe = "Under Review";
}

console.log();
console.log("Evaluation Rating: " + statusBe);
console.log();

// For loop 2 out of 3
for (let i = 0; i < skills.length; i++)
{
    // Conditional 2.3
    if (skillRate[i] >= rgRating)
    {
        proficientSkills++;
    } else 
    {
        dvlSkills++;
    }
}

console.log();
console.log("Profienct Skills Rating: " + proficientSkills);
console.log("Skills for further Growth: " + dvlSkills);

// For Loop 3 out of 3
for (let i = 0; i < skillRate.length; i++)
    {
        // Conditional 3/3
        if (skillRate[1] >= 90)
        {
            skillRemarks.push(skills[i] + "Expert")
        } else if (skillRate[i] > rgRating)
        {
            skillRemarks.push(skills[i] + "Proficient");
        } else 
        {
            skillRemarks.push(skills[i] + "Developing");
        }
    } 
console.log();
console.log("Skill Assessment Rating: " + skillRemarks.join(" | "));