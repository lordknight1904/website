import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
// import crypto from 'crypto';
// import config from '../config'
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  active: { type: Boolean, default: true },
  code: {
    type: 'String',
    trim: true,
    required: [true, 'Course code must be provided.'],
    minlength: [1, 'Course code must be provided'],
    maxlength: [100, 'Course code must contains less than 100 characters.'],
  },
  alias: {
    type: 'String',
    trim: true,
    minlength: [1, 'Alias code must be provided'],
    maxlength: [100, 'Alias code must contains less than 100 characters.'],
  },
  name: {
    type: 'String',
    trim: true,
    required: [true, 'Name must be provided.'],
    minlength: [1, 'Name must be provided'],
    maxlength: [100, 'Name must contains less than 100 characters.'],
  },
  time: {
    type: 'String',
    trim: true,
    minlength: [1, 'Time stamp must be provided'],
    maxlength: [20, 'Time stamp must contains less than 20 characters.'],
  },
  teachingAssistants: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
  teachingTime: {
    type: 'String',
    trim: true,
    maxlength: [1000, 'Teaching time must contains less than 1000 characters.'],
  },
  preference: [
    {
      type: 'String',
      trim: true,
      maxlength: [1000, 'Text book must contains less than 1000 characters.'],
    }
  ],
  textbook: [
    {
      type: 'String',
      trim: true,
      maxlength: [1000, 'Text book must contains less than 1000 characters.'],
    }
  ],
  materials: [
    {
      name: {
        type: 'String',
        trim: true,
        maxlength: [200, 'Material name must contains less than 200 characters.'],
      },
      filePath: {
        type: 'String',
        trim: true,
        maxlength: [200, 'Material name must contains less than 200 characters.'],
      },
      solutionPath: {
        type: 'String',
        trim: true,
        maxlength: [200, 'Material name must contains less than 200 characters.'],
      },
    }
  ],
  dateCreated: { type: Date, default: Date.now },
});
courseSchema.plugin(uniqueValidator, { message: 'This {PATH} has been taken.' });

courseSchema.statics = {
  get(alias, cb) {
    return this.findOne({ alias }).populate('teachingAssistants', 'name email address').exec(cb);
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

export default mongoose.model('Course', courseSchema);