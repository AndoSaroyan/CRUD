const express = require('express');
const controller = require('./controller');

const router = express.Router();
const app = express();

app.use(express.json());

router.post('/register', controller.register);
router.get('/login', controller.login);
router.put('/modifyPassword', controller.updatePassword);
router.put('/modifyPhone', controller.updatePhone);
router.put('/modifyName', controller.updateName);
router.put('/modifySurname', controller.updateSurname);
router.delete('/deleteUser',controller.deleteUser);



app.use(router); 
app.listen(3000,function(err){
 
    if(err) throw err;
    console.log("Listening on Port 3000");
})
