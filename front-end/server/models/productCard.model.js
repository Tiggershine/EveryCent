import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  }
);
 

const productCardSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String },
    user: { type: userSchema, required: true },
    district: { type: String, enum: ['Markt', 'Theater', 'Lindenplatz', 'St. Jakob', 'Westpark', 'Kronenberg', 'Hörn', 'Ponttor', 'Hansemannplatz', 'Soers', 'Jülicher Straße', 'Kalkofen', 'Kaiserplatz', 'Adalbertsteinweg', 'Panneschopp', 'Rothe Erde', 'Forst', 'Frankenberger Viertel', 'Brtscheid', 'Marschiertor', 'Beverau' ], default: 'Markt', required: true },
    dealType: { type: String, enum: ['sell', 'buy', 'freecycle'], default: 'sell', required: true },
    contact: { type: String, required: true },
    createdAt: { type: Date, dafault: Date.now }
  }
);

export const productCard = mongoose.model('productCard', productCardSchema);

export async function getAll() {
  return productCard.find({});
}

export async function getProductCard(id) {
  return productCard.findById(id);
}


export async function createCard(title, description, imageUrl, user, district, dealType, contact) {
  return new productCard({
    title,
    description,
    imageUrl,
    user,
    district,
    dealType,
    contact
  }).save();
}

export async function updateCard(id, title, description, imageUrl, user, district, dealType, contact) {
  return productCard.findByIdAndUpdate(id, {title, description, imageUrl, user, district, dealType, contact}, { returnOriginal: false});
}

export async function removeCard(id) {
  return productCard.findByIdAndDelete(id);
}
