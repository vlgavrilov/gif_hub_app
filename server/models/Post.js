

const schema = new Schema({
    date: {type: Date, default: Date.now},
    owner: {type: Types.ObjectId, ref: 'User'},
    image: {type: String, required: true},
    tag: [{ type: Types.ObjectId, ref: 'Tag' }]
})

module.exports = model('Post', schema)
