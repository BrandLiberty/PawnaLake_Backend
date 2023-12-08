import User from "../models/User.js";
import { contactMailer} from "../mailer/contactMailer.js";

export const contact =async(req, res) => {
    console.log('API : /contact',req.body);
    try {
        const { fname,lname,email,phone,message } = req?.body

        if (!email && !fname && !phone && !message) {
            console.log('LOG : Info not found or incomplete')
            return res.status(400).json({
                message: "Info is incomplete"
            })
        }

        User.create({ name : fname +' '+(lname|| ''), email, phone, message })
            .then(user => {
                console.log('INFO : User Created Successfully')
                contactMailer(user)
                return res.status(200).json({
                    message: 'Contact Created Successfully',
                    data: user
                })
            })
            .catch(err => {
                console.log('ERROR : Unable to create user', err)
                return res.status(500).json({
                    message: "Internal srver error"
                })
            })
    } catch (error) {
        console.log('ERROR : ', err)
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}
