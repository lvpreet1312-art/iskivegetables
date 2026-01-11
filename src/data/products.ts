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
  dailyEssentials: Product[];
  bestSellers: Product[];
  readyToCook: Product[];
  timeSavers: Product[];
  //mealPacks: Product[];
  //combos: Product[];
  [key: string]: Product[]; // Allow indexing by string
}

export const products: ProductData = {
    popularCombos: [
        { id: 1, name: "Vegetable Combo", desc: "Onion, Tomato, Mince Garlic, Ginger, Green Chilli, Coriander", price: "₹149", category: "Combo", image: "https://placehold.co/320x240?text=Daily+Combo" },
        { id: 2, name: "Maggi Combo", desc: "Onion, Tomato, green chilli, Peas, Carrot, Broccoi", price: "₹199", category: "Combo", image: "https://placehold.co/320x240?text=Bachelor+Combo" },
        { id: 3, name: "Chicken Combo", desc: "Onion, Tomato, minced garlic, Green Chilli, ginger, Coriander", price: "₹249", category: "Combo", image: "https://placehold.co/320x240?text=Family+Combo" },
        { id: 4, name: "Egg Curry Combo", desc: "Onion, Tomato, minced garlic, Green Chilli, ginger, Coriander", price: "₹299", category: "Combo", image: "https://placehold.co/320x240?text=Weekend+Combo" },
        //{ id: 5, name: "Gravy Starter Combo", desc: "Everything for rich gravies", price: "₹179", category: "Combo", image: "https://placehold.co/320x240?text=Gravy+Combo" },
        //{ id: 6, name: "Stir-Fry Pack", desc: "Ready for quick stir-fries", price: "₹129", category: "Meal Pack", image: "https://placehold.co/320x240?text=Stir+Fry" },
        //{ id: 7, name: "Salad Mix", desc: "Fresh salad veggies", price: "₹99", category: "Meal Pack", image: "https://placehold.co/320x240?text=Salad+Mix" },
        //{ id: 8, name: "Soup Pack", desc: "Veggies for hearty soups", price: "₹119", category: "Meal Pack", image: "https://placehold.co/320x240?text=Soup+Pack" }
    ],
    dailyEssentials: [
        { id: 5, name: "Onion / Pyaj / Kanda", desc: " Diced ", price: "₹49", category: "Essential", image: "https://placehold.co/320x240?text=Ginger" },
        { id: 6, name: "Onion / Pyaj / Kanda", desc: " Sliced ", price: "₹29", category: "Essential", image: "https://placehold.co/320x240?text=Chilli" },
        { id: 7, name: "Onion / Pyaj / Kanda", desc: "Thin Sliced", price: "₹59", category: "Essential", image: "https://placehold.co/320x240?text=Garlic" },
        { id: 8, name: "Tomato / Tamatar", desc: "Chopped", price: "₹29", category: "Essential", image: "https://placehold.co/320x240?text=Chilli" },
        { id: 9, name: "Garlic / Lehsoon", desc: "Peeled", price: "₹49", category: "Essential", image: "https://placehold.co/320x240?text=Ginger" },
        { id: 10, name: "Garlic / Lehsoon", desc: "Cruhed", price: "₹49", category: "Essential", image: "https://placehold.co/320x240?text=Ginger" },
        { id: 11, name: "Garlic / Lehsoon", desc: "Sliced Cut", price: "₹49", category: "Essential", image: "https://placehold.co/320x240?text=Ginger" },
        { id: 12, name: "Green Chilli / Mirchi", desc: "Chopped", price: "₹29", category: "Essential", image: "https://placehold.co/320x240?text=Chilli" },
        { id: 13, name: "Green Chilli / Mirchi", desc: "Split cut", price: "₹29", category: "Essential", image: "https://placehold.co/320x240?text=Chilli" },
        { id: 14, name: "Ginger / Adrak / Aale", desc: "Sliced", price: "₹29", category: "Essential", image: "https://placehold.co/320x240?text=Chilli" },
        { id: 15, name: "Ginger / Adrak / Aale", desc: "Crushed", price: "₹29", category: "Essential", image: "https://placehold.co/320x240?text=Chilli" },
        { id: 16, name: "Ginger / Adrak / Aale", desc: "Minced", price: "₹29", category: "Essential", image: "https://placehold.co/320x240?text=Chilli" },
    ],
    bestSellers: [
        { id: 17, name: "Onion / Pyaj / Kanda", desc: " Diced ", price: "₹49", category: "Essential", image: "https://placehold.co/320x240?text=Ginger" },
        { id: 18, name: "Tomato / Tamatar", desc: "Chopped", price: "₹29", category: "Essential", image: "https://placehold.co/320x240?text=Chilli" },
        { id: 19, name: "Patato / Aloo / batata", desc: "Cubes Cut", price: "₹59", category: "Ready", image: "https://placehold.co/320x240?text=Garlic" },
        { id: 20, name: "Vegetable Combo", desc: "Onion, Tomato, Mince Garlic, Ginger, Green Chilli, Coriander", price: "₹149", category: "Combo", image: "https://placehold.co/320x240?text=Daily+Combo" },
        { id: 21, name: "Green Peas / Matar", desc: "Ready for cooking", price: "₹69", category: "Ready", image: "https://placehold.co/320x240?text=Potato" },
        { id: 22, name: "Corriander / Dhaniya", desc: "Chopped", price: "₹69", category: "Time Saver", image: "https://placehold.co/320x240?text=Potato" },
    ],
    readyToCook: [
        { id: 23, name: "Patato / Aloo / batata", desc: "Cubes Cut", price: "₹59", category: "Ready", image: "https://placehold.co/320x240?text=Garlic" },
        { id: 24, name: "Patato / Aloo/ batata", desc: "Stick Cut", price: "₹59", category: "Ready", image: "https://placehold.co/320x240?text=Garlic" },
        { id: 25, name: "Patato / Aloo/ batata", desc: "Wedge Cut / Irregular Cut", price: "₹59", category: "Ready", image: "https://placehold.co/320x240?text=Garlic" },
        { id: 26, name: "Green Peas / Matar", desc: "Ready for cooking", price: "₹69", category: "Ready", image: "https://placehold.co/320x240?text=Potato" },
        { id: 27, name: "Cauli Flower / phulgobhi", desc: "Chopped", price: "₹69", category: "Ready", image: "https://placehold.co/320x240?text=Potato" },
        { id: 28, name: "Green Capsicum / Shimla Mirch", desc: "Chopped", price: "₹69", category: "Ready", image: "https://placehold.co/320x240?text=Potato" },
        { id: 29, name: "Broccoli", desc: "chopped", price: "₹69", category: "Ready", image: "https://placehold.co/320x240?text=Potato" },
        { id: 30, name: "Lady FInger / Bhindi", desc: "Chopped", price: "₹69", category: "Ready", image: "https://placehold.co/320x240?text=Potato" },
        { id: 31, name: "Green Beans", desc: "Chopped", price: "₹69", category: "Ready", image: "https://placehold.co/320x240?text=Potato" },
        { id: 32, name: "Drumstick / Sahjan / Moringa", desc: "Ready for cooking", price: "₹69", category: "Ready", image: "https://placehold.co/320x240?text=Potato" },
        { id: 33, name: "Cabbage / Pattagobhi", desc: "Ready for cooking", price: "₹69", category: "Ready", image: "https://placehold.co/320x240?text=Potato" },
        { id: 34, name: "Spinach / Palak", desc: "Chopped", price: "₹69", category: "Ready", image: "https://placehold.co/320x240?text=Potato" },
    ],

    timeSavers: [
        { id: 35, name: "Corriander / Dhaniya", desc: "Chopped", price: "₹69", category: "Time Saver", image: "https://placehold.co/320x240?text=Potato" },
        { id: 36, name: "Fenugreek leaves / Methi", desc: "Chopped", price: "₹69", category: "Time Saver", image: "https://placehold.co/320x240?text=Potato" },
        { id: 37, name: "Mint leaves / Pudina", desc: "Chopped", price: "₹69", category: "Time Saver", image: "https://placehold.co/320x240?text=Potato" },
        { id: 38, name: "Curry leaves ", desc: "Chopped", price: "₹69", category: "Time Saver", image: "https://placehold.co/320x240?text=Potato" },

    ],
    /*mealPacks: [
        { id: 23, name: "Pav Bhaji Pack", desc: "All veggies for pav bhaji", price: "₹129", category: "Meal Pack", image: "https://placehold.co/320x240?text=Pav+Bhaji" },
        { id: 24, name: "Sambhar Pack", desc: "Ready for sambhar", price: "₹109", category: "Meal Pack", image: "https://placehold.co/320x240?text=Sambhar" },
        { id: 25, name: "Biryani Pack", desc: "Veggies for biryani", price: "₹139", category: "Meal Pack", image: "https://placehold.co/320x240?text=Biryani" }
    ],
    combos: [
        { id: 26, name: "Family Combo", desc: "For 4-5 people", price: "₹249", category: "Combo", image: "https://placehold.co/320x240?text=Family+Combo" },
        { id: 27, name: "Weekend Combo", desc: "Special weekend cooking", price: "₹299", category: "Combo", image: "https://placehold.co/320x240?text=Weekend" },
        { id: 28, name: "Quick Meals", desc: "For busy weekdays", price: "₹199", category: "Combo", image: "https://placehold.co/320x240?text=Quick+Meals" }
    ]*/
};
