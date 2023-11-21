const mongoose = require('./connectDB')
const UserModel = require('./user')
const productModel = require('./products')

const cartSchema = new mongoose.Schema ({
    idUser : {
        type : String,
        ref : 'user'
    },
    products : [{
        idProduct : {
            type : String,
            ref : 'product'
        },
        quantity : Number
    }]
})

cartSchema.virtual('totalSP').get(function() {
    // let data = this.products.map(item => {
    //     let money = item.idProduct.price * item.quantity
    //     console.log('123',money);
    //     let {idProduct, quantity} = item
    //     return {
    //         idProduct, quantity, money
    //     }
    // })

    // let totalMoney = data.reduce((total, item) => {
    //     return total += item.money
    // }, 0)

    // return {
    //     danhsachSP: data,
    //     totalMoney: totalMoney
    // }

    return 30
})


const CartModel = mongoose.model('cart', cartSchema)

CartModel.find({}).populate('products.idProduct')
.then(data=>{
    console.log(data[1].totalSP)
})
.catch(error => {
    console.error(error);
});