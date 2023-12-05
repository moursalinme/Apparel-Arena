const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
  name : {
    type : String, 
    unique : [true, 'Product name must be unique.'],
    required: [true, 'Product must have a name.'], 
  },

  category : {
    type : String, 
    enum: {
      values : ['tShirt', 'Pant', 'Jersey'],
      message : 'Product must be one of these provided category.'
    },
    required : [true, 'Select a Product Category.'],
  },

  price : {
    type: Number, 
    required : [true, 'A product must have price.'],
    min : [1, 'Price must be greater than 0.'],
  },

  discount : {
    type : Number, 
    default : 0,
    min: [0, 'Discount must be at lest 0%.'],
    max : 100, 
  },

  rating : {
    type : Number, 
    min : [0, 'Rating can not be less than 0.'],
    max : [5, 'Rating can not be greater than 5.'],
    default : 0, 
  },

  shop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'shop',
  }

  // quantity & sizes,
  // Shop Name
  // Reviews.
  // Images or Designs.

}, {
  toJSON : { virtuals : true }
});

productSchema.virtual('priceAfterDiscount')
  .get(function() {
    return this.price - (this.price * (this.discount / 100));
  });

const Product = mongoose.model('product', productSchema);
module.exports = Product;

