const mongoose = require('./connectDB')

const productSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: 0,
        default: 0
    }
})


productSchema.virtual('test').get(function () {
    // let data = this.products.map(item => {
        //     console.log('log item',item);
        // })                     
        // console.log(data);
        console.log('vao day');
        return 12345
    })
    
    const productModel = mongoose.model('product', productSchema)   
    productModel.create({title: 'san pham B', price: 1000})
    .then(data => {
        console.log(
            data
            );
        })