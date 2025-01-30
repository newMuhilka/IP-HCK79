## Bootstrapping Project
### Permulaan
- [x] npm init -y
- [x] npm i pg pg-hstore express sequelize bcrypt => install general
- [x] npm i -D nodemon sequelize-cli => install bagian development
- [x] npx sequelize-cli init => initial utk config, models, migrations, dan seeders (npx bukan npm, BACA!)
- [x] mkdir controllers views routers
- [x] touch app.js .gitignore controllers/controller.js routers/index.js
- [x] echo node_modules > .gitignore (masukan node_modules kedalam .gitignore)

### Config
- [x] configurasi database pada folder config file config.json
  - [x] ubah yang ada di property development
  - [x] username: "postgres"
  - [x] password: "postgres"
  - [x] database: <"sesuaikan soal">
  - [x] host: "localhost" (<"atau gausah diganti">)
  - [x] dialect: "postgres"
- [x] cek sekilas npx sequelize-cli --help untuk melihat command yg akan dibutuhkan. Lakukan setiap kali kebingungan menggunakan command sequelize.

### Migration
- [x] Buat database 
  - [x] template:
  ```bash
  npx sequelize-cli db:drop
  npx sequelize-cli db:create 
  ```
  (kalo lupa npx sequelize-cli help)
- [x] Buat modelnya 
  - [x] [link ref](<https://sequelize.org/docs/v6/other-topics/migrations/#creating-the-first-model-and-migration>). (Perhatikan! Nama tabel harus dlm bentuk tunggal-bhs Inggris. Jangan ada spasi setelah koma (,) di --attibutes!)

  contoh:
  ```bash
  npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
  ```
  - [x] untuk menjalankan migrasi bisa dengan
  ```bash
  npx sequelize-cli db:migrate
  ```
- [ ] Tambah kolom (bila perlu)
  - [ ] contoh:
  ```bash
  npx sequelize-cli migration:generate --name add-new-column-to-users
  ```

  [link referensi bisa dari sini](<https://sequelize.org/api/v6/class/src/dialects/abstract/query-interface.js~queryinterface#instance-method-addColumn>) atau [yang ini](<https://sequelize.org/docs/v6/other-topics/query-interface/#adding-a-column-to-a-table>)
  - [ ] jangan lupa jalankan lagi migrasinya setelah kolom di-add
  ```bash
  npx sequelize-cli db:migrate
  ```

### Seeding
- [x] Kalau sudah jadi table-nya buat seeder, contoh:
  ```bash
  npx sequelize-cli seed:generate --name seed-category
  ```
  [link ref](<https://sequelize.org/docs/v6/other-topics/migrations/#creating-the-first-seed>)

- [x] ambil data dari json
- [x] map data lalu cek ada id atau ngga, kalau ada delete el.id
- [x] tambahkan el.createdAt = el.updatedAt = new Date()
- [x] utk menjalankan seed:
  ```bash
  npx sequelize-cli db:seed:all
  ```
### Express
- [x] copy [contoh syntax ini](<https://expressjs.com/en/starter/hello-world.html>), taruh di app.js
- [x] tambahkan [body parser](<https://expressjs.com/en/5x/api.html#req.body>)
- [x] untuk routing bisa gunakan [routers](<https://expressjs.com/en/guide/routing.html>)
- [x] siapkan endpoint yang dibutuhkan pada app.js lalu controllers
