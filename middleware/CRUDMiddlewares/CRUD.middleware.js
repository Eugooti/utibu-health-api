const {create,createMany}=require('./create')
const {read,readById,readByUser}=require('./read')
const {update}=require('./update')
const {remove}=require('./delete')

const CRUDMethods = (model) => {
  const methods={}

    methods.create=async (req, res) => {
      await create(model,req,res)
    }

    methods.createMany=async (req,res)=>{
      await createMany(model,req,res)
    }

    methods.read=async (req, res) => {
      await read(model,req,res)
    }

    methods.readById=async (req, res) => {
      await readById(model,req,res)
    }

    methods.readByUser=async (req, res) => {
      await readByUser(model,req,res)
    }

    methods.update=async (req, res) => {
      await update(model,req,res)
    }

    methods.delete=async (req, res) => {
      await remove(model,req,res)
    }

    return methods;

}

module.exports = {CRUDMethods};