const express=require("express")
const routerCreator=express.Router()
const mainController=require("../controller/CRUDcontroller")
// here we create rout for the controrler 
routerCreator.route('/sendDataWetherData').get(mainController.sendWether)



module.exports=routerCreator