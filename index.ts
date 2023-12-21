import  express from "express";
import  authRouter  from  "./src/auth/auth_controller/routes/auth_routes";
import  profileRouter  from  "./profile/profile_routes";
const app = express();

app.use(express.json());

app.use(authRouter);
app.use(profileRouter);
app.listen(3000,()=>{
    console.log("Connected");
    
})

