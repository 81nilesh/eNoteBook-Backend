// mongodb + srv://ankitchoudhary8120:<password>@merndatabase.ovvii4i.mongodb.net/

import { connect } from 'mongoose'

const connectToMongo = async () => {
    try {
        await connect('mongodb + srv://ankitchoudhary8120:89Ch@ndu@merndatabase.ovvii4i.mongodb.net/')
        console.log("*** Database connected Successfully ***")
    } catch (error) {
        console.log(error)
    }
}

export default connectToMongo;