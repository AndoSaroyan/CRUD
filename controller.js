const service = require('./service')

  function  register(req, res ) {

    const user = req.body;

    service.create(user);
    res.status(200).send("account created!!!");     

    };

  function  login(req, res) {

        const user = req.body;
        
        service.getUserId(user, res);
         
        };

  function updatePassword(req, res) {

      const user = req.body;  
      
      service.modifyPassword(user);

      res.status(200).send("password changed!");  
  }



  function updatePhone(req, res) {

    const user = req.body;  
    
    service.modifyPhone(user);

    res.status(200).send("Phone has changed !!!");  
}



function updateName(req, res) {

    const user = req.body;  
    
    service.modifyName(user);

    res.status(200).send("Name has changed !!!");  
}



function updateSurname(req, res) {

    const user = req.body;  
    
    service.modifySurname(user);

    res.status(200).send("Surname has changed !!!");  
}

function deleteUser (req,res) {
    const user = req.body;
     console.log(user);
    service.deleteUser(user);

    res.status(200).send("Your Account has been deleted !!!");
}


module.exports = {
    register: register,
    login: login,
    updatePassword: updatePassword,
    updateName: updateName,
    updateSurname: updateSurname,
    updatePhone: updatePhone,
    deleteUser: deleteUser
}

