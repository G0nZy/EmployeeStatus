const inquirer = require('inquirer')
const cTable = require('inquirer');


        const connection = require('./gear/settings.js');


       
    const selection = () => {
            inquirer.prompt({

                    name:'choice',
                    type:'list', //choice
                    message: 'pick an option will ya',
                        choices: [ 
                        'All Employees',
                        'Employees by Dept',
                        'Add Employee',
                        'Remove Employee',
                        'View all roles',
                        'Add a Role',
                        'Remove a Role',
                        'View Departments',
                        'Add Dept',
                        'Remove Dept'
                        ]
            }) 
    .then(function (res){
                
            let choose = res.choice
            if(choose === 'All Employees'){
                allEmp()
            }

            if(choose === 'Employees by Dept'){
                empDep()
            }

            if(choose === 'Add Employee'){
                addEmp()
            }

            if(choose === 'Remove Employee'){
                remEmp()
            }

            if(choose === 'View all roles'){
                viewRole()
            }

            if(choose === 'Add a Role'){
                addRole()
            }

            if(choose === 'Remove a Role'){
                remRole()
            }

            if(choose === 'View Departments'){
                viewDep()
            }

            if(choose === 'Add Dept'){
                addDep()
            }

            if(choose === 'Remove Dept'){
                remDep()
            }

    })
    }


                selection();
            
    const allEmp = () => {
        inquirer.prompt([{
            name: 'dep',
            type: 'input',
            message: 'What is your Dept Name ?'

        }])

                console.log( '\n ${input.dep} was succesfully added !')

                selection()

            }


            const empDep = () => {
                    connection.query('Which Dept ?', function (err,results){
                        if (err) throw err;

                        inquirer.prompt([{

                                name:'dep',
                                type:'list',
                                message:'Which Dept ?',

                                choices:()=> {
                                    let choiceSel=[];
                                    (results.forEach(e => {
                                        choiceSel.push(e.name)
                                    }))
                                        return choiceSel;
                                }
                        }])

                    })
                
                
                
                
                    const addEmp = () =>{


                                inquirer.prompt([{

                                            name:'name',
                                            type:'input',
                                            message: 'Whats their name ?'

                                }])
                                connection.query ('Ready to go?', {name: answer.name}, function (err){
                                    if (err) throw err;
                                        console.log('\n ${answer.name} has been succesffully added !');
                                })


                    }
                

                    const remEmp= () =>{



                                connection.query ('Select an employee', function (err, results){
                                        if (err) throw err;
                                        inquirer.prompt([{

                                                name:'emp',
                                                type:'list',
                                                message:'Which employee are you removing?',
                                                choices:() => {
                                                    let choiceSel=[];
                                                    (results.forEach(obj=> {
                                                        choiceSel.push('${obj.name}')
                                                    }))
                                                    return choiceSel;
                                                }
                                        }])

                                    .then(function (answer){
                                        connection.query('Remove employee ?' function (err){
                                            if (err) throw err;
                                            console.log('\n ${name} has been removed.')
                                            selection()
                                        })
                                    })


                                })

                    }




                
                
                    
        
                    }