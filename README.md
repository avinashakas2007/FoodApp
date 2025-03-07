
# 🍕 **Tastee! Recipe Sharing Platform** 🍕

Welcome to **Tastee!**, where food lovers come together to share their delicious recipes, discover new dishes, and explore cuisines from all over the world. 🌍🍴

---

## 🌟 **Features**
- **Submit Your Recipe**: Share your favorite recipe with ingredients, preparation steps, and an image!
- **Discover New Recipes**: Browse through an array of recipes curated by food enthusiasts.
- **Simple & Elegant UI**: Easy-to-use interface for seamless recipe sharing and viewing.

---

## 🛠️ **Technologies Used**
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Image Handling**: Base64 encoding for image links

---

## 📥 **Getting Started**

Follow these steps to set up and run the project locally:

### 1. **Clone the Repository**

```bash
git clone https://github.com/avinashakas2007/FoodApp.git
cd FoodApp
```

### 2. **Set Up the Database**

Ensure you have **MongoDB** installed locally or use **MongoDB Atlas** for a cloud database. Import the following sample data into your database:

---

### 🍽️ **Sample `foods` Collection**:

```json
{
  "_id": {
    "$oid": "670e37545566af9628be9866"
  },
  "food": "pizza",
  "name": "Mushroom Pizza",
  "price": 780,
  "link": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMREhUTExMVFRUXGB4=="
}
```

### 🍕 **Sample `recipes` Collection**:

```json
{
  "_id": {
    "$oid": "670eaacb7cb0d53a133665fb"
  },
  "recipeName": "Classic Margherita Pizza",
  "cuisineType": "pizza",
  "ingredients": [
    "Pizza dough",
    "Tomato sauce",
    "Fresh mozzarella cheese",
    "Fresh basil",
    "Olive oil"
  ],
  "preparationSteps": "To create a delicious Classic Margherita Pizza, start by preheating your oven to 475°F. Roll out the pizza dough on a floured surface until it’s about 12 inches in diameter. Spread a generous layer of tomato sauce evenly over the dough, leaving a small border for the crust. Add slices of fresh mozzarella cheese across the surface and place the pizza in the oven. Bake for 10 to 12 minutes until the crust is golden brown. Once done, remove it, garnish with fresh basil leaves, drizzle olive oil, slice, and serve warm.",
  "photo": "/uploads/margherita-pizza.jpg",
  "authorName": "Chef Mario",
  "tag": 1
}
```

---

### 3. **Install Dependencies**

Run the following command to install the required dependencies:

```bash
npm install
```

### 4. **Start the Application**

Run the app using this command:

```bash
npm start
```

Visit `http://localhost:3000` to see the platform in action.

---

## 🎨 **Project Features**

### **1. Share Your Recipe** 🍝
- Users can submit their recipes by filling out the following fields:
  - Recipe Name
  - Cuisine Type
  - Ingredients (comma-separated)
  - Preparation Steps
  - Image Link (URL)

---

### **2. Explore Recipes** 🍽️
- Users can browse, view, and interact with the recipes, exploring detailed ingredients, preparation steps, and images of the dishes.

---

## ✨ **How to Contribute**

1. **Fork** this repository and clone it to your local machine.
2. **Create a new branch**:
   ```bash
   git checkout -b my-feature-branch
   ```
3. Make your changes and **commit**:
   ```bash
   git commit -m "Add new feature"
   ```
4. **Push** your changes:
   ```bash
   git push origin my-feature-branch
   ```
5. Open a **Pull Request** to merge your changes.

---


✨ **Enjoy cooking and sharing your recipes with the world!** ✨

---
