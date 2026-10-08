const appName = "SmartSpend Budget Tracker";
const monthlyBudgetLimit = 3500;
const defaultCurrency = "Philipines Peso (PHP)";
const savingsGoalPercentage = 0.2;
const highExpenseThreshold = 150;
const fiscalYear = 2026;
const maxCategories = 12;
const statusApproved = "APPROVED";
const statusFlagged = "FLAGGED";
const supportEmail = "helpsupport@smartspend.com";
let currentBalance = 5200;
let totalExpensesLogged = 0;
let activeMonth = "October";
let transactionCounter = 5001;
let isBudgetAlertEnabled = true;
let selectedPaymentMode = "Debit Card";
let recurringBillsCount = 4;
let emergencyFundContribution = 250;
let lastSyncTime = Date.now();
let systemNotice = "All accounts synced";

const formatCurrency = (amount, symbol) => `${symbol} ${amount.toFixed(2)}`;

const calculateSavings = (income, rate) => income * rate;

const isHighExpense = (amount) => amount >= highExpenseThreshold;

const generateAlertMessage = (category, amount) =>
  `Alert: Increase of spending being detected in ${category} of Php ${amount}!`;

const buildTransactionLabel = (title, cost) =>
  `Expense: ${title} - $${cost.toFixed(2)}`;

const initialExpenses = [
  {
    id: 1,
    title: "Supermarket Groceries",
    amount: 165,
    category: "Food",
    isEssential: true,
  },
  {
    id: 2,
    title: "Electricity & Water Bill",
    amount: 120,
    category: "Utilities",
    isEssential: true,
  },
  {
    id: 3,
    title: "Streaming Subscription",
    amount: 18,
    category: "Entertainment",
    isEssential: false,
  },
  {
    id: 4,
    title: "Art Supplies",
    amount: 35,
    category: "Hobbies",
    isEssential: false,
  },
];

const recurringExpenses = [
  {
    id: 5,
    title: "Apartment Rent",
    amount: 1200,
    category: "Housing",
    isEssential: true,
  },
  {
    id: 6,
    title: "Gym Membership",
    amount: 55,
    category: "Health",
    isEssential: false,
  },
];

const userAccount = {
  name: "Christian Iwag Tocayon",
  tier: "ISO",
  billingAddress: {
    street: "Rueda Street",
    city: "Calbayog City",
    country: "Philippines",
  },

  banking: {
    institution: {
      name: "Landbank Philippines",
    },
  },
};

const latestReceipt = {
  id: transactionCounter,
  merchant: "Super Metro",
  amount: 175.5,
  category: "Food",
};

const allExpenses = [...initialExpenses, ...recurringExpenses];

const essentialExpenses = allExpenses.filter((item) => item.isEssential);

const highCostExpenses = allExpenses.filter((item) =>
  isHighExpense(item.amount),
);

const essentialTags = essentialExpenses.map(
  (item) =>
    `Essential! ${item.title}: ${formatCurrency(item.amount, defaultCurrency)}`,
);

const detailedExpenseReports = allExpenses.map(
  (item) =>
    `${item.title} categorized under ${item.category} (${formatCurrency(item.amount, defaultCurrency)})`,
);

const expenseLedgerDisplay = [
  " Monthly Essential Expenses ",
  ...essentialTags,
  " End of Ledger ",
];

const updatedUserProfile = {
  ...userAccount,
  lastSync: lastSyncTime,
  isActive: true,
};

const finalizedTransaction = {
  ...latestReceipt,
  paymentStatus: statusApproved,
  settledMonth: activeMonth,
};

const primaryCategories = ["Housing", "Groceries", "Utilities", "Savings"];
const [categoryOne, categoryTwo, categoryThree] = primaryCategories;

const [firstEssentialItem, secondEssentialItem] = essentialTags;

const weeklyTotals = [310, 450, 290, 520];
const [weekOneTotal, weekTwoTotal, ...remainingWeeks] = weeklyTotals;

const { id: receiptId, merchant, amount: receiptAmount } = latestReceipt;

const {
  title: leadTitle,
  amount: leadAmount,
  category: leadCategory,
} = allExpenses[0];

const { street, city, country } = userAccount.billingAddress;

const bankingAuditInfo = {
  accountHolder: userAccount?.name,
  bankName: userAccount?.banking?.institution?.name ?? "Direct Debit",
  routingNumber:
    userAccount?.banking?.institution?.routingCode ?? "Not Required",
};

const terminalVerification = {
  merchantName: latestReceipt?.merchant,
  hardwareSerial:
    latestReceipt?.terminal?.hardware?.serialCode ?? "Virtual Gateway",
  operatorId: latestReceipt?.terminal?.operator?.id ?? "Self-Checkout",
};

totalExpensesLogged += receiptAmount;
currentBalance -= receiptAmount;

console.log();
console.log(`Welcome to ${appName}! Support contact: ${supportEmail}`);

console.log(`Top essential bills tracked: 1) "${firstEssentialItem}"`);
console.log(`2) "${secondEssentialItem}".`);

console.log();
console.log(`Billing address verified: ${street}, ${city}, ${country}.`);

console.log(
  `Transaction #${receiptId} logged at ${merchant} for ${formatCurrency(receiptAmount, defaultCurrency)}.`,
);

console.log();
console.log(
  `System Status: ${systemNotice}. Active balance for ${activeMonth} ${fiscalYear}: Php ${currentBalance.toFixed(2)}.`,
);
console.log();

const justNoBrackets = (obj, indent = "  ") => {
  const formatKey = (key) => {
    const labels = {
      lastSync: "Sync Status",
      isActive: "Active",
    };

    const label = labels[key] ?? key.replace(/([a-z])([A-Z])/g, "$1 $2");
    return label.charAt(0).toUpperCase() + label.slice(1);
  };

  if (Array.isArray(obj)) {
    return obj
      .map((item) =>
        typeof item === "object" && item !== null
          ? justNoBrackets(item, indent)
          : `${indent}${item}`,
      )
      .join("\n");
  }
  return Object.entries(obj)
    .map(([key, value]) => {
      if (typeof value === "object" && value !== null) {
        return `${indent}${formatKey(key)}:\n${justNoBrackets(value, indent + "  ")}`;
      }
      return `${indent}${formatKey(key)}: ${value}`;
    })
    .join("\n");
};

console.log(generateAlertMessage(leadCategory, leadAmount));
console.log("Updated User Profile:", justNoBrackets(updatedUserProfile));
console.log("Banking Audit:", justNoBrackets(bankingAuditInfo));
console.log("Terminal Verification:", justNoBrackets(terminalVerification));
console.log("Ledger Display:", justNoBrackets(expenseLedgerDisplay));
