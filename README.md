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

#4. Cài đặt .env

- npm i --save-exact dotenv@16.0.3
  Tuyệt đối không đẩy file tham số "môi trường" (.env) lên git

#5. Cài đặt nodemon auto restart khi phát hiện có file thay đổi

- npm i --save-dev nodemon@2.0.20
- Để cấu hình đươcj vào package.json. Thay node = nodemon
  "scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dev": "nodemon ./src/server.js"
  },

#6. Cấu hình static file

- app.use(express.static('public'))
