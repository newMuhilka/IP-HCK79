# Cheat Sheet Algoritma
## Command Line
### Setup Server
1. **Buat folder project**:
   ```bash
   mkdir server
   ```

2. **Instalasi package server**:
   ```bash
   cd server
   npm init -y
   npm install express sequelize pg pg-hstore bcrypt jsonwebtoken dotenv
   ```

3. **Setup Sequelize**:
   ```bash
   npx sequelize-cli init
   ```

4. **Buat file environment**:
   Buat file `.env` dengan isi sebagai berikut:
   ```env
   DATABASE_URL= <...>
   JWT_SECRET= <jwt_secret>
   ```

5. **Buat model database**:
   Buat tiga model: User, Hero, dan Favourite.
   ```bash
   npx sequelize-cli model:generate --name User --attributes email:string,password:string
   ```

### Setup Client

1. **Buat project client**:
   ```bash
   cd ../client
   npm create vite@latest
   cd client
   npm i
   npm run dev
   ```

2. **Instalasi package client**:
   ```bash
   npm install react-router axios redux react-redux sweetalert2
   ```