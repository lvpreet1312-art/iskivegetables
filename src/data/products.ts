export interface Product {
  id: number;
  name: string;
  desc: string;
  price: string;
  category: string;
  image: string;
}

export interface ProductData {
  popularCombos: Product[];
  bestSellers: Product[];
  timeSavers: Product[];
  dailyEssentials: Product[];
  readyToCook: Product[];
  mealPacks: Product[];
  combos: Product[];
  [key: string]: Product[]; // Allow indexing by string
}

export const products: ProductData = {
    popularCombos: [
        { id: 1, name: "Daily Cooking Combo", desc: "Onion, Tomato, Garlic, Ginger, Green Chilli", price: "₹149", category: "Combo", image: "https://placehold.co/320x240?text=Daily+Combo" },
        { id: 2, name: "Bachelor Combo", desc: "Perfect for quick meals with all essentials", price: "₹199", category: "Combo", image: "https://placehold.co/320x240?text=Bachelor+Combo" },
        { id: 3, name: "Family Combo", desc: "All veggies for family meals", price: "₹249", category: "Combo", image: "https://placehold.co/320x240?text=Family+Combo" },
        { id: 4, name: "Weekend Veg Combo", desc: "Special veggies for weekend cooking", price: "₹299", category: "Combo", image: "https://placehold.co/320x240?text=Weekend+Combo" },
        { id: 5, name: "Gravy Starter Combo", desc: "Everything for rich gravies", price: "₹179", category: "Combo", image: "https://placehold.co/320x240?text=Gravy+Combo" },
        { id: 6, name: "Stir-Fry Pack", desc: "Ready for quick stir-fries", price: "₹129", category: "Meal Pack", image: "https://placehold.co/320x240?text=Stir+Fry" },
        { id: 7, name: "Salad Mix", desc: "Fresh salad veggies", price: "₹99", category: "Meal Pack", image: "https://placehold.co/320x240?text=Salad+Mix" },
        { id: 8, name: "Soup Pack", desc: "Veggies for hearty soups", price: "₹119", category: "Meal Pack", image: "https://placehold.co/320x240?text=Soup+Pack" }
    ],
    bestSellers: [
        { id: 9, name: "Chopped Onion", desc: "Freshly chopped, ready to use", price: "₹49", category: "Essential", image: "https://placehold.co/320x240?text=Onion" },
        { id: 10, name: "Chopped Tomato", desc: "Perfect for curries", price: "₹59", category: "Essential", image: "https://placehold.co/320x240?text=Tomato" },
        { id: 11, name: "Onion-Tomato Base", desc: "Ready for gravies", price: "₹69", category: "Time Saver", image: "https://placehold.co/320x240?text=Base" },
        { id: 12, name: "Ginger-Garlic Paste", desc: "Freshly made daily", price: "₹39", category: "Time Saver", image: "https://placehold.co/320x240?text=Paste" },
        { id: 13, name: "Daily Veg Combo", desc: "All daily essentials", price: "₹149", category: "Combo", image: "https://placehold.co/320x240?text=Daily+Veg" }
    ],
    timeSavers: [
        { id: 14, name: "Peeled Garlic", desc: "Ready to use", price: "₹59", category: "Time Saver", image: "https://placehold.co/320x240?text=Garlic" },
        { id: 15, name: "Chopped Green Chilli", desc: "Pre-measured", price: "₹29", category: "Time Saver", image: "https://placehold.co/320x240?text=Chilli" },
        { id: 16, name: "Ready Curry Base", desc: "Just add main ingredient", price: "₹79", category: "Time Saver", image: "https://placehold.co/320x240?text=Curry+Base" }
    ],
    dailyEssentials: [
        { id: 17, name: "Peeled Garlic", desc: "Ready to use", price: "₹59", category: "Essential", image: "https://placehold.co/320x240?text=Garlic" },
        { id: 18, name: "Chopped Ginger", desc: "Freshly chopped", price: "₹49", category: "Essential", image: "https://placehold.co/320x240?text=Ginger" },
        { id: 19, name: "Green Chilli", desc: "Chopped or whole", price: "₹29", category: "Essential", image: "https://placehold.co/320x240?text=Chilli" }
    ],
    readyToCook: [
        { id: 20, name: "Chopped Potato", desc: "Ready for cooking", price: "₹69", category: "Ready", image: "https://placehold.co/320x240?text=Potato" },
        { id: 21, name: "Mixed Veg", desc: "Sabzi cut", price: "₹89", category: "Ready", image: "https://placehold.co/320x240?text=Mixed+Veg" },
        { id: 22, name: "Chopped Capsicum", desc: "For stir-fries", price: "₹79", category: "Ready", image: "https://placehold.co/320x240?text=Capsicum" }
    ],
    mealPacks: [
        { id: 23, name: "Pav Bhaji Pack", desc: "All veggies for pav bhaji", price: "₹129", category: "Meal Pack", image: "https://placehold.co/320x240?text=Pav+Bhaji" },
        { id: 24, name: "Sambhar Pack", desc: "Ready for sambhar", price: "₹109", category: "Meal Pack", image: "https://placehold.co/320x240?text=Sambhar" },
        { id: 25, name: "Biryani Pack", desc: "Veggies for biryani", price: "₹139", category: "Meal Pack", image: "https://placehold.co/320x240?text=Biryani" }
    ],
    combos: [
        { id: 26, name: "Family Combo", desc: "For 4-5 people", price: "₹249", category: "Combo", image: "https://placehold.co/320x240?text=Family+Combo" },
        { id: 27, name: "Weekend Combo", desc: "Special weekend cooking", price: "₹299", category: "Combo", image: "https://placehold.co/320x240?text=Weekend" },
        { id: 28, name: "Quick Meals", desc: "For busy weekdays", price: "₹199", category: "Combo", image: "https://placehold.co/320x240?text=Quick+Meals" }
    ]
};
