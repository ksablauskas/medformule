let servestatic = require('serve-static')
let path = require('path')
let express = require('express')
let port = process.env.PORT || 3000;
let app = express();
if(process.env.NODE_ENV === 'production'){
    app.use(servestatic(path.join(path.resolve(), 'dist')));
}
app.listen(port, () => {console.log("API server started on "+app.get('port'));});

// let router = express.Router();
// // router.get("/",  );

// app.use("/", router);
// // router.use((req, res, next) => {
// //     res.setHeader('Content-Type', 'application/json');
// //     next();
// // }   