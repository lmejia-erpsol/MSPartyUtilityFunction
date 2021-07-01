const{Router}=require('express');
const router=Router();


//routes
router.get('/test',(req,res)=>{
    const data={
        "name":"Fazt",
        "website":"faztweb.com"
    }
    res.send({data});
});

module.exports=router;