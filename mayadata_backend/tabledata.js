import mongoose from 'mongoose'

// defining schema 
const mayadataSchema = mongoose.Schema({
    meetingName: String,
    noOfPeopleAttending: String,
    date: String,
    startTime: String,
    endTime: String,
})

export default mongoose.model('tablecontents', mayadataSchema)