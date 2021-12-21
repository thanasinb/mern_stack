# Installing MERN stack

[from https://www.howtoforge.com/how-to-install-mern-stack-for-js-based-applications-on-debian-11/]<br>
```
sudo apt-get update -y
```

[from https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/]<br>
```
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
```

[for Ubuntu 20.04 (Focal)]<br>
```
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
sudo apt-get update -y
sudo apt-get install -y mongodb-org
sudo systemctl start mongod
sudo systemctl enable mongod
sudo systemctl status mongod
mongod --version

mongo
use admin
db.createUser({user: "admin" , pwd: passwordPrompt() , roles: [{ role: "userAdminAnyDatabase" , db: "admin"}]})
quit()
```

# Installing NodeJS
[from https://github.com/nodesource/distributions]
```
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
node --version
```

# Installing React.JS
[continue https://www.howtoforge.com/how-to-install-mern-stack-for-js-based-applications-on-debian-11/]<br>
[continue https://dev.to/andrewbaisden/creating-mern-stack-applications-2020-4a44]
[https://blog.logrocket.com/mern-stack-tutorial/]
[https://codedec.com/tutorials/how-to-setup-express-server-to-develop-mern-application/]

# Installing VS Code
[https://dev.to/rohidhub/top-10-vscode-extensions-for-react-57g6]

## EXTENSIONS
Auto Rename Tag
Bracket Pair Colorizer
ES7 React/Redux/GraphQL/React-Native snippets
Prettier - Code formatter
indent-rainbow
VSCode React Refactor
npm Intellisense
ESLint
Highlight Matching Tag
TabOut
GitLens
Git History
DotENV
Better comments
Remote - SSH
