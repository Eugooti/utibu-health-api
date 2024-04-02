const create = async (Model,req,res) => {
    try {
        const result=await Model.create(req.body)

        return res.status(200).json({
            success: true,
            result,
            message: 'Successfully Created a record in the database',
        })

    }catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            // Handle duplicate key error (emailAddress)
            return res.status(400).json({ error: 'User already exists with this email address' });
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

const createMany = async (Model, req, res) => {
    try {
        const data = req.body;

        // Check if request body is an array
        if (!Array.isArray(data)) {
            return res.status(400).json({ error: 'Request body must be an array' });
        }

        // Create records in the database
        const result = await Model.bulkCreate(data);

        return res.status(200).json({
            success: true,
            result,
            message: 'Successfully created records in the database',
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            result: null,
            message: 'Error while creating records in the database',
            error: error.message,
        });
    }
};



module.exports={create, createMany};