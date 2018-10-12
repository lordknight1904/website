import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
// import crypto from 'crypto';
// import config from '../config'
const Schema = mongoose.Schema;

const personSchema = new Schema({
  graduated: { type: Boolean, default: false },
  name: {
    type: 'String',
    trim: true,
    required: [true, 'Name must be provided.'],
    minlength: [1, 'Name must be provided'],
    maxlength: [20, 'Name must contains less than 20 characters.'],
  },
  field: {
    type: 'String',
    trim: true,
    maxlength: [50, 'Research field must contains less than 50 characters.'],
  },
  email: {
    type: 'String',
    trim: true,
    maxlength: [40, 'Email must contains less than 40 characters.'],
  },
  title: {
    type: 'String',
    trim: true,
    maxlength: [40, 'Title must contains less than 40 characters.'],
  },
  occupation: {
    type: 'String',
    trim: true,
    maxlength: [40, 'Occupation must contains less than 40 characters.'],
  },
  year: {
    type: 'String',
    trim: true,
    maxlength: [10, 'Year must contains less than 10 characters.'],
  },
  address: {
    type: 'String',
    trim: true,
    maxlength: [200, 'Address must contains less than 200 characters.'],
  },
  imagePath: { type: 'String', trim: true },
  profilePage: { type: 'String', trim: true },
  dateCreated: { type: Date, default: Date.now },
});
personSchema.plugin(uniqueValidator, { message: 'This {PATH} has been taken.' });

personSchema.statics = {
  getPersonType(graduated, cb) {
    return this.find({ graduated: graduated === '1' }).sort('dateCreated').exec(cb);
  },
  get(id, cb) {
    return this.findById({ _id: id }).exec(cb);
  },
  getAll(cb) {
    return this.find({}).exec(cb);
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
  active(id, cb) {
    return this.findOneAndUpdate({ _id: id }, { active: true }).exec(cb);
  },
  delete(id, cb) {
    return this.findOneAndDelete({ _id: id }).exec(cb);
  },
};

export default mongoose.model('Person', personSchema);