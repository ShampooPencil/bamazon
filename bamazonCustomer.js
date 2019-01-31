
const inquirer = require('inquirer');
const mysql = require('mysql');
//require('console.table');
const Connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'bamazon'
});
Connection.connect(function(err){
    if(err)
    console.log(err)
else
    console.table(res);
displayProducts();
}) //is a err first callback
console.log("testing");
const displayProducts = function(){
    Connection.query('SELECT * FROM products', function(err, res){
        if(err)
            console.log(err)
        else
            console.table(res);
    })
}
//inquirer.prompt([
    //     {
    //         name: 'my_name',
    //         type: 'input',
    //         message: 'What is your name: '
    //     }, 
    // {
    //     name: 'icecream_Y_N',
    //     type: 'confirm',
    //     message: 'Do you like Icecream'
    // }]).then(answers => {  //=> same as wrote 'function' shortcut or shorthand of function
    //                 console.log("Your name is:"+answers.my_name);
    //                 console.log("Do you like Icecream? " + answers.icecream_Y_N);

    //         });



// Challenge #1: Customer View (Minimum Requirement)


// Create a MySQL Database called bamazon.
// Then create a Table inside of that database called products.
// The products table should have each of the following columns:



// item_id (unique id for each product)
// product_name (Name of product)
// department_name
// price (cost to customer)
// stock_quantity (how much of the product is available in stores)
//checked/finished****************************


// Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).

// Then create a Node application called bamazonCustomer.js. Running this application will 
//first display all of the items available for sale. Include the ids, names, and prices of
// products for sale.

// The app should then prompt users with two messages.

// The first should ask them the ID of the product they would like to buy.
// The second message should ask how many units of the product they would like to buy.

// Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

// If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.

// However, if your store does have enough of the product, you should fulfill the customer's order.

// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.





