import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import crypto from 'crypto';
import config from '../config'
const Schema = mongoose.Schema;

function encrypt(password){
  if (password.length < 6) return password;
  else {
    const cipher = crypto.createCipher('aes-256-cbc', config.SERVER_ADMIN_PASSWORD_SECRET);
    let encrypted = cipher.update(password, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  }
}
function decrypt(password){
  if (password.length < 6 ||password === null || typeof password === 'undefined') {return password;}
  const decipher = crypto.createDecipher('aes-256-cbc', config.SERVER_ADMIN_PASSWORD_SECRET);
  let decrypted = decipher.update(password,'hex','utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

const adminSchema = new Schema({
  username: {
    type: 'String',
    trim: true,
    required: [true, 'Username must be provided.'],
    minlength: [4, 'Username must contains 4 character or more.'],
    maxlength: [20, 'Username must contains less than 20 characters.'],
    unique: true,
  },
  password: {
    type: 'String',
    trim: true,
    required: [true, 'Password must be provided.'],
    minlength: [6, 'Password must contains 6 character or more.'],
    // maxlength: [20, 'Password must contains less than 20 characters.'],
    get: decrypt,
    set: encrypt
  },
  role: { type: Schema.Types.ObjectId, ref: 'Role', required: [true, 'Role must be provided.'] },
  active: { type: Boolean, default: true },
  dateCreated: { type: Date, default: Date.now },
});
adminSchema.plugin(uniqueValidator, { message: 'This {PATH} has been taken.' });

adminSchema.statics = {
  get(id, cb) {
    return this.findById({ _id: id }).select('-password').populate('role', 'name').exec(cb);
  },
  getAll(cb) {
    return this.find({}).select('-password').populate('role', 'name').exec(cb);
  },
  add(obj, cb) {
    return this.create(obj, cb);
  },
  put(id, obj, cb) {
    const updateObj = {};
    for (const o in obj) {
      updateObj[o] = obj[o];
    }
    return this.findOneAndUpdate(
      { _id: id },
      updateObj,
      {
        upsert: true,
        runValidators: true,
        setDefaultsOnInsert: true,
        context: 'query',
      }
      ).exec(cb);
  },
  deactive(id, cb) {
    return this.findOneAndUpdate({ _id: id }, { active: false }).exec(cb);
  },
  reactive(id, cb) {
    return this.findOneAndUpdate({ _id: id }, { active: true }).exec(cb);
  },
  delete(id, cb) {
    return this.findOneAndDelete({ _id: id }).exec(cb);
  },
  authenticate(admin, cb) {
    return this.findOne({ $or: [{ username: admin.username }, { _id: admin.id }], password: admin.password})
      .populate('role', 'name')
      .exec(cb);
  }
};

export default mongoose.model('Admin', adminSchema);