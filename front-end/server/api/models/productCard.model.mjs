import mongoose from "mongoose";
const Schema = mongoose.Schema;
// import * as User from '../models/user.model.mjs'

const productCardSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: [
      "Book",
      "Clothing",
      "Food",
      "Electronics",
      "Kitchen",
      "Furniture",
      "Sporting goods",
      "Hobbies",
    ],
    required: true,
  },
  imageUrl: {
    type: [String],
    dafault: ["no image"],
  },
  user: {
    type: String, // User.username
    required: true,
  },
  district: {
    type: String,
    enum: [
      "Markt",
      "Theater",
      "Lindenplatz",
      "St. Jakob",
      "Westpark",
      "Kronenberg",
      "Hörn",
      "Ponttor",
      "Hansemannplatz",
      "Soers",
      "Jülicher Straße",
      "Kalkofen",
      "Kaiserplatz",
      "Adalbertsteinweg",
      "Panneschopp",
      "Rothe Erde",
      "Forst",
      "Frankenberger Viertel",
      "Burtscheid",
      "Marschiertor",
      "Beverau",
    ],
    default: "Markt",
    required: true,
  },
  dealType: {
    type: String,
    enum: ["sell", "buy", "freecycle"],
    default: "sell",
    required: true,
  },
  createdAt: {
    type: Date,
    dafault: Date.now,
  },
});

const ProductCard = mongoose.model("ProductCard", productCardSchema);
export default ProductCard;

export async function getAll() {
  return ProductCard.find({});
}

export async function getProductCard(id) {
  return ProductCard.findById(id);
}

export async function createCard(
  title,
  description,
  price,
  category,
  imageUrl,
  user,
  district,
  dealType
) {
  return new ProductCard({
    title,
    description,
    price,
    category,
    imageUrl,
    user,
    district,
    dealType,
    createdAt: Date.now(),
  }).save();
}

export async function updateCard(
  id,
  title,
  description,
  price,
  imageUrl,
  user,
  district,
  dealType
) {
  return ProductCard.findByIdAndUpdate(
    id,
    { title, description, price, category, imageUrl, user, district, dealType },
    { returnOriginal: false }
  );
}

export async function removeCard(id) {
  return ProductCard.findByIdAndDelete(id);
}
