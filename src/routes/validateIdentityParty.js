/ Simple Hello World in Node.js /
const {Router}=require('express');
const router=Router();
//RUC examples: "1790011674001"=Juridico,"1760001550001"=Publicos,"1710034065001"=Identidad;
var a,b,c,d,e;
let validar;
var text1,text2,text3,text4,text5;
//routes
router.get('/MS/PAR/Party/RSPartyUtilityFunction/v1/validateIdentityParty',(req,res)=>{
var IdentifierType=req.query.IdentifierType;
var identifierId=req.query.identifierId;
IdentifierType=IdentifierType.toUpperCase();
if(IdentifierType=="RUC"){

    if(identifierId.length!=13){validar="Insert the correct type of identification.";}
    else if(identifierId.includes(" ")===true){validar="The RUC must not contain spaces";}
    else if(isNaN(identifierId)===true){validar="The RUC number must not contain any letters";}
    else if(parseInt(identifierId.substring(0,2))<01 || parseInt(identifierId.substring(0,2)>24)){validar=console.log("The RUC is incorrct. The first 2 digits are not permited");}
    else if(identifierId.substring(10,13)!="001"){validar='The RUC is incorrect. The last 3 digits must be 001'}
    else if(parseInt(identifierId.substring(2,3))<6){                     
        if(parseInt(identifierId.substring(0,1)*2)>=10){
            text1=parseInt(identifierId.substring(0,1)*2);
            a=parseInt(text1.toString()[0])+parseInt(text1.toString()[1]);
            
        }else{
            a=parseInt(identifierId.substring(0,1))*2+parseInt(identifierId.substring(1,2))*1
            
        }
        if(parseInt(identifierId.substring(2,3))*2>=10){
            text2=parseInt(identifierId.substring(2,3)*2);
            b=parseInt(text2.toString()[0])+parseInt(text2.toString()[1]);
        }else{
            b=parseInt(identifierId.substring(2,3))*2+parseInt(identifierId.substring(3,4))*1
             
        }
        if(parseInt(identifierId.substring(4,5))*2>=10){
            text3=parseInt(identifierId.substring(4,5)*2);
            c=parseInt(text3.toString()[0])+parseInt(text3.toString()[1]);
        }else{
            c=parseInt(identifierId.substring(4,5))*2+parseInt(identifierId.substring(5,6))*1
             
        }
        if(parseInt(identifierId.substring(6,7))*2>=10){
            text4=parseInt(identifierId.substring(6,7)*2);
            d=parseInt(text4.toString()[0])+parseInt(text4.toString()[1]);
        }else{
            d=parseInt(identifierId.substring(6,7))*2+parseInt(identifierId.substring(7,8))*1
             
        }
        if(parseInt(identifierId.substring(8,9))*2>=10){
            text5=parseInt((identifierId.substring(8,9))*2);
            e=parseInt(text5.toString()[0])+parseInt(text5.toString()[1]);
        }else{
            e=parseInt(identifierId.substring(8,9))*2
        }
        console.log(10-((a+b+c+d+e)%10));
        if(parseInt(identifierId.substring(9,10))==10-((a+b+c+d+e)%10)){
                validar=("Operation Successfully Executed");
            }else{
                validar=("Not valid identification. Verifying digit is incorrect");
            } 
        }
    else if (parseInt(identifierId.substring(2,3))==9){
                if(parseInt(identifierId.substring(9,10))==11-(
                    parseInt(identifierId.substring(0,1))*4+
                    parseInt(identifierId.substring(1,2))*3+
                    parseInt(identifierId.substring(2,3))*2+
                    parseInt(identifierId.substring(3,4))*7+
                    parseInt(identifierId.substring(4,5))*6+
                    parseInt(identifierId.substring(5,6))*5+
                    parseInt(identifierId.substring(6,7))*4+
                    parseInt(identifierId.substring(7,8))*3+
                    parseInt(identifierId.substring(8,9))*2)%11){
                    validar=("operation Succesfully Executed");
                }else{
                    validar=("Not valid identification. Verifying digit is incorrect for LA SOCIEDAD PRIVADA and EXTRANJEROS SIN CEDULA'");
                }
    }else if (parseInt(identifierId.substring(2,3))==6){
                if(parseInt(identifierId.substring(8,9))==11-(
                    parseInt(identifierId.substring(0,1))*3+
                    parseInt(identifierId.substring(1,2))*2+
                    parseInt(identifierId.substring(2,3))*7+
                    parseInt(identifierId.substring(3,4))*6+
                    parseInt(identifierId.substring(4,5))*5+
                    parseInt(identifierId.substring(5,6))*4+
                    parseInt(identifierId.substring(6,7))*3+
                    parseInt(identifierId.substring(7,8))*2)%11){
                    validar=("Operation Succesfully Executed");
                }else{
                    validar=("Not valid identification. Verifying digit is incorrect for LA SOCIEDAD PUBLICA'");
                }
            }

                 
          
    }else{
        validar="Insert a RUC identification number";
    }
    const data = {"message": validar};
    res.json(data);
});
module.exports=router;