const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    title: String,
    year: String,
    format: String,
})

mongoose.model('films', productSchema);

//Title: Blazing Saddles
//Release Year: 1974
//Format: VHS
//Stars: Mel Brooks, Clevon Little, Harvey Korman, Gene Wilder, Slim Pickens, Madeline Kahn