// we are creating the backend for e-commerce website
/* 
things we want in our website

1. Authentication and Authority = login for cutomer and admin
   yaha authentication ka matlab hai who i am  and authorization ka matlab hai   what can i do

2. here we will use accesc token so you don't have to put password again and again
3. router = reception
   controller = waiter
    model = chef

4. ab hame auth set karna hai jisme sabse pehle hum register karenge and than login or uske baad accestoken  de denge
5. so for storing the user info we need data base and for creating data base we have to install mongoose and for api and server we need express  and to accecs token we have to install jasonwebtoken  we will also add becryptjs for decrypting the data
     brypt ka use hum karte hain kyunki jab hum apna password store karte hain database main as a string to koi bhi hacker use chura sakta hai isliye passwornd store karne se pehle use encrypt karte hain
6. first we will work on models and than controller and than routes
7. sab kuch install karne ke baad hamne ek schema bana diya or use ek module main bhi change kar diya
8. hamne server start kiya than port ke liye alag se ek file banayi kyunki port number change hota rehta hai
9. mongodb se connect kiya or uske jo URL hai use alag config wale folder main likha kyunki wo bhi baar change ho sakta hai 
10. ab agar mongodb thk se connect ho gya to init function ko call kar dengejisme saare logic likhe hai data schema bharne ke liye
11 schema main data bharne ke baad ab password ko protect karne e liye bcrypt ko load karenge and hashSync method ki madad se encrypt kar denge
12. phir hamne check kiya ki admin present hai ki nhi agar hai ti thik nhi naya create kar diya
13. we haqve created the admin user
14. postman ek too hai jiskimadad se hum api ko test kar sakye hain matlab aage chal kar jab hum restapi main post put delete call karenge tak uska path hum postman mina likh denge us path(uri) ki madad se hame data mil jaayega
15. ab hum controller folder ke andar kaam karenge
16  sabse pehle hame user ke data ko users collection ke andar store karna hai uske liye saara code likh kar model ke andar daal denge
17 we have created the model and controller 
18  ab hamne routes ke andar logic likh diya agar koi post callkarta hai specific uri ke liye to kaise use controller ke pass bhejna hai
19. ab hum routes ko server ke saath connect karenge
20. last main uri ko postman par hit karenge but error aayega kyunki postman request kar raha hai as a json but hamara application kewal js object dega isliye hame middleware ka use karna hoga
21. ab hum middele ware ka use krenge jiska kaam hota hai extra logic create karna
22. hamne middleware folder main kuch logic lagakar request ko test kiya and
23. ab hum ek or API banayenge jiski madad se hum login kar sakenge
24. iske liye hame model main koi change nhi karna just simple controller main logic likenge for signUp and routes main post call karenge
25. now we will create api's for categories
26. category ke liye hamne model taiyaar kar liya and controller bna liya or ab routes main api banayenge
27. ab hum middle ware banayenge for checking the token is present or not
28. iske liye postman main ek option hota heder naam se jisme hum extra message or info daal sakte hain
29. agar userType admin hai tabhi hum categories ko jod sakte hain nhi to nhi uske liye middle ware main logic likhenge

*/