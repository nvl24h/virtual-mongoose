const mongoose = require('./connectDB')

const userSchema = mongoose.Schema({
    email: String
  });
  // Create a virtual property `domain` that's computed from `email`.
  userSchema.virtual('domain').get(function() {
    console.log('vao day');
    return this.email.slice(this.email.indexOf('@') + 1);
  });
  const User = mongoose.model('User', userSchema);
  
User.create({ email: 'test@gmail.com' })
.then((result) => {
    console.log(result.domain);
}).catch((err) => {
    
});