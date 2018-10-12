import mongoose from 'mongoose';
// import autoIncrement from 'mongoose-auto-increment';
import uniqueValidator from 'mongoose-unique-validator';
// import crypto from 'crypto';
// import config from '../config'
const Schema = mongoose.Schema;

const classSchema = new Schema({
  published: { type: 'String', default: '0' },
  type: {
    type: 'String',
    trim: true,
    required: [true, 'type code must be provided.'],
  },
  name: {
    type: 'String',
    trim: true,
    required: [true, 'Name must be provided.'],
    minlength: [1, 'Name must be provided'],
    maxlength: [500, 'Name must contains less than 500 characters.'],
  },
  detail: {
    type: 'String',
    trim: true,
    default: '',
  },
  authors: [
    {
      type: 'String',
      trim: true,
      minlength: [1, 'Author name must be provided'],
      maxlength: [100, 'Author name must contains less than 100 characters.'],
    }
  ],
  submittedTo: {
    type: 'String',
    trim: true,
    required: [true, 'Name of conference/journal must be provided.'],
    minlength: [1, 'Name of conference/journal must be provided'],
    maxlength: [500, 'Name of conference/journal must contains less than 500 characters.'],
  },
  pdfPath: { type: 'String', default: '' },
  filePath: { type: 'String', default: '' },
  dateCreated: { type: Date, default: Date.now },
});
classSchema.plugin(uniqueValidator, { message: 'This {PATH} has been taken.' });

classSchema.statics = {
  get(id, cb) {
    return this.findById({ _id: id }).exec(cb);
  },
  getPaperType(type, cb) {
    return this.find({ type }).sort('-dateCreated').exec(cb);
  },
  getAll(cb) {
    return this.find({}).sort('-dateCreated').exec(cb);
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
// classSchema.plugin(autoIncrement.plugin, { model: 'Paper', field: 'id' });
export default mongoose.model('Paper', classSchema);