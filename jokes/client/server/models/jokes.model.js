const mongoose = require("mongoose")



const JokesSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            required: [true, "Setup required"],
            minLength: [5, "Setup must be at least 5 characters"]
        },
        punchline: {
            type: String,
            required: [true, "Punchline required"],
            minLength: [5, "Punchline must be at least 5 characters"]
        }

},{timestamps:true})

const Jokes = mongoose.model('Jokes', JokesSchema);
module.exports = Jokes;