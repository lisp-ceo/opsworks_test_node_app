Example Node App
================

Use ( on Ubuntu, Unix friends can play along at home ):

- ```sudo su ```
- ```npm install && npm start ```
- Then, in a new terminal: ```curl -s localhost | grep -i "<p>"```

Caveats:

- AWS will only traffic on ports 22, 80, 443 when accessed directly. Load Balancer required for use of other ports.
- Main JS entry file needs to be server.js
- As usual, wheel priveledges required to bind to reserved ports. Do not execute as sudo. Execute as priveledged user.

References:

- http://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-node.html
- http://docs.aws.amazon.com/opsworks/latest/userguide/layers-server-nodejs.html
- http://stackoverflow.com/questions/15596751/how-to-deploy-nodejs-on-aws-with-opsworks
- http://stackoverflow.com/questions/14986794/has-anyone-been-successful-deploying-a-node-express-app-with-amazon-opsworks
