const cors = require ("cors");
const express = require ("express");
const stripe = require ("stripe")("sk_test_51MgNFHSFC4YjFhyDZuJumHIlHF0WEOqbtDZSr7SI1XXeweNBDHG4RDCgPapaiWFjrcHPwptPPsQEJ5E24BeygPeR00weOimXeS");
const { v4:uuidv4 } = require ('uuid');
const app = express();
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
  res.send("Welcome to react website");
});

app.post('/checkout',async (req,res)=>{
 let error;
 let status;
 try {
  const {product,token} = req.body;
  const customer = await stripe.customers.create({
    email:token.email,
    source:token.id
  })
  const key = uuidv4();
  const charge =await stripe.charges.create(
    {
      amount:product.Price * 100,
      currency:"usd",
      customer:customer.id,
      receipt_email:token.email,
      description:'All product description here',
      shipping:{
        name:token.card.name,
        address:{line1:token.card.address_line1,
                line2:token.card.address_line2,
                city:token.card.address_city,
                country:token.card.address_country,
                postal_code:token.card.address_zip}

      }
    },

    {idempotencyKey:key})
    status ="success";
 } catch (error) {
  console.log(error);
  status ="error";
 }
 res.json({status});
})
app.listen(8080,() =>{
  console.log('you are app is running on port no 8080');
});