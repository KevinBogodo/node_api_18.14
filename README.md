<h2>This is the structure of the node api, This in order to allow the developer to save time on the implementation of a new project (node & mysql)</h2>

<p><i>
List of dependencies : <br/>
    - Express version: ^4.18.2 <br/>
    - Sequelize version: ^6.32.0 <br/>
    - mariadb version: ^3.1.2 <br/>
    - jsonwebtoken version: ^9.0.0 <br/>
    - body-parser version: ^1.20.2 <br/>
    - bcrypt version: ^5.1.0 <br/>
    - cors version: ^2.8.5 <br/>
    - morgan version: ^1.10.0 (For Dev) <br/> 
    - nodemon version: ^2.0.22 (For Dev, Remove package on production) <br/>

</i></p><br/>
<h3>  Database set-up after create</h3>
<p>we use Sequelize-cli (commande to add: <b>npm install sequelize-cli -g</b> ) </p>
<i> step to use : <br/>
    1- Move to database folder in terminal and use <b>'sequelize init'</b></br>
    2- Create Migration buy usin : <b>'sequelize migration:create --name tableName'</b></br>
    3- To migrate we use <b>'sequelize db:migrate'</b></br>
</i>
</br>
<u><b>Note:</u></b> You can change database configuration in file 'database/config/config.js'
<br/>
<br/>
<br/>


Although this project is completely free for use, I appreciate any support!
