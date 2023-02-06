import User from "../model/UserModel.js";
app.get('/users.csv', (req, res) => {
    User.find().toArray((err, users) => {
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename="users.csv"');
      csv.write(users, { headers: true }).pipe(res);
    });
  });