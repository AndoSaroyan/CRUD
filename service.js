let mysql = require('mysql')

let con = mysql.createConnection({
    host: "localhost",
    user: "Client",
    password: "Password123!@#",
    database: "MyDataBase"
  });

con.connect(function(err) {
    if (err) {
        throw err;
    };
    console.log("Successfully  Connected To DataBAse !!!");
  });

  function getUserId (user,res)
 {        
       con.query(`SELECT Id FROM Users WHERE Email='${user.Email}' AND Password='${user.Password}' `,(err, rows, field) => {
        if (err) throw err;
      
        if(rows.length > 0 ){
           
          res.status(200).send(rows[0]);}
               
        else {
          res.status(401).send("Invalid Email/Password !!!");}
                     
      })
 }  
 

function modifyPhone(user){
    
    con.query(`UPDATE Users SET Phone='${user.Phone}' WHERE Email = '${user.Email}';`,(err,rows,fields)=> {
        if(err) throw err;
       
        console.log('Phone has Changed');
         console.log(rows);
    })
}




function modifyName(user){
    
    con.query(`UPDATE Users SET Name='${user.Name}' WHERE Email = '${user.Email}';`,(err,rows,fields)=> {
        if(err) throw err;
       
        console.log('Name has Changed');
         console.log(rows);
    })
}



function modifySurname(user){
    
    con.query(`UPDATE Users SET Surname='${user.Surname}' WHERE Email = '${user.Email}';`,(err,rows,fields)=> {
        if(err) throw err;
       
        console.log('Surname has Changed');
         console.log(rows);
    })
}





function modifyPassword(user){
    
    con.query(`UPDATE Users SET Password='${user.Password}' WHERE Email = '${user.Email}';`,(err,rows,fields)=> {
        if(err) throw err;
       
        console.log('Password has Changed');
    })
}




function deleteUser(user){
    con.query(`DELETE FROM Users WHERE Email='${user.Email}' AND Password='${user.Password}';`,(err,row,field) =>{
        if(err) throw err;
        console.log("User Has Been Deleted");
    });
}






function create (user){
    con.query(`INSERT INTO Users (Name,Surname,Email,Phone,Password) VALUES('${user.Name}','${user.Surname}','${user.Email}','${user.Phone}','${user.Password}')`,(err,row,field) =>{
        if(err) throw err;
        console.log("Record Inserted");
        console.log(row);
    })
}


module.exports = {
    create : create,
    deleteUser : deleteUser,
    modifyName : modifyName,
    modifySurname : modifySurname,
    modifyPhone : modifyPhone,
    modifyPassword : modifyPassword,
    getUserId : getUserId
}