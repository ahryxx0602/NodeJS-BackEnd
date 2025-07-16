# NodeJS-BackEnd

NodeJS-Backendd

#1.

- npm init //Tạo ra các file package.json

#2. Cài đặt thư viện

- npm install <package_name>@<version>

#Sử dụng Expess.

- npm i --save-exact express@4.18.2

#3. Cài đặt template engines

- Sử dụng template Engine là EJS

- npm i --save-exact ejs@3.1.8

- Phải nói cho express biét sử dụng view engines ấy ở đâu

//config template engine at server.js
app.set("views", "./src/views/");
app.set("view engine", "ejs");
