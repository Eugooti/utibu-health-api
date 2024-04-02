const crypto = require('crypto');

const register = async (Model,req,res) => {
    try {



        const { emailAddress, firstName,lastName,phoneNumber,chronicDisease1,chronicDisease2,chronicDisease3,YOB,password} = req.body;

        // Generate a salt (random bytes) and hash the password using SHA-256
        const salt = crypto.randomBytes(16).toString('hex');
        const hashedPassword =crypto.createHash('sha256').update(password + salt).digest('hex');


        const result=await Model.create({
            emailAddress, firstName,lastName,phoneNumber,chronicDisease1,chronicDisease2,chronicDisease3,YOB,password:hashedPassword,salt
        })

        return res.status(200).json({
            success: true,
            result,
            message: 'User Created Successfully',
        })

    }catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            // Handle duplicate key error (emailAddress)
            console.log(error)
            return res.status(400).json({ errors: 'User already exists with this email or phone number address' });

        }

        console.log(error)

        return res.status(500).json({
            success: false,
            result: null,
            message: 'Error while creating a record in the database',
            error: error.message,
        });
    }

}


module.exports = {  register};
