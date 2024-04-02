const read = async (Model,req,res) => {
    try {
        const result=await Model.findAll();

        return res.status(200).json({result})

    }catch (error) {
        return  res.status(500).json({ error: 'Failed to retrieve categories',err:error });
    }

}

const readByUser = async (Model,req,res) => {
    const user = req.params.user;
    console.log(user)
    try {
        const result=await Model.findAll({
            where: { customerEmail: user },
        })

        return res.status(200).json({result})

    }catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Failed to retrieve data' });

    }
}


const readById=async (Model,req,res)=>{
    const id=req.params.id;

    try {
        const result=await Model.findByPk(id);
        if (!result){
            return res.status(404).json({error:"Record not found"})
        }
        return res.status(200).json({result})

    }catch (error) {
        return res.status(500).json({ error: 'Failed to retrieve data' });
    }
}

module.exports={read,readByUser,readById}