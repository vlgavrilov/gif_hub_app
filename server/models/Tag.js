
const schema = new Schema({
    text: {type: String, required: true},
    tag: [{ type: Types.ObjectId, ref: 'Tag' }]
})

module.exports = model('Tag', schema)
