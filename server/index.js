require("dotenv").config();
const express = require("express");
const massive = require("massive");
const aws = require('aws-sdk');
const authController = require("./authController");
const postController = require("./postController")
const session = require("express-session");
const userController = require("./userController");
const commentController = require('./commentController');

const app = express();

const {
    SERVER_PORT,
    CONNECTION_STRING,
    SESSION_SECRET,
} = process.env;

const {
    S3_BUCKET,
    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY
} = process.env

app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 48},
    secret: SESSION_SECRET
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then((db) => {
    app.set("db", db);
    console.log("DB Connected")
})

app.use(express.json())
app.use( express.static( `${__dirname}/../build` ) );

//Auth Endpoints
app.get('/api/user/', authController.getUser)
app.post('/api/register/', authController.register)
app.post('/api/login', authController.login)
app.get('/api/logout/', authController.logout)

//Post Endpoints
app.get('/api/post/', postController.getAllArt)
app.get('/api/art/:id', postController.getUserArt)
app.get('/api/post/:id', postController.getArtById)
app.post('/api/newPost/', postController.addArt)
app.delete('/api/deletePost/:id', postController.deleteArt)
app.put('/api/edit/:id', postController.updateArt)

//Comment Endpoints
app.get('/api/comment/:id', commentController.getCommentsById)
app.get('/api/comments/:id', commentController.getPostComments)
app.post('/api/addComment/', commentController.addComment)
app.delete('/api/deleteComment/:id', commentController.deleteComment)
app.put('/api/editComment/:id', commentController.updateComment)

//User Endpoints
app.get('/api/profile/:id', userController.getUserInfo)

//AWS Endpoint
app.post('/addImage/:id', postController.image)
app.get('/api/signs3', (req, res) => {

    aws.config = {
      region: 'us-west-1',
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY
    }
    
    const s3 = new aws.S3({signatureVersion: "v4"});
    const fileName = req.query['file-name'];
    const fileType = req.query['file-type'];
    const s3Params = {
      Bucket: S3_BUCKET,
      Key: fileName,
      Expires: 60,
      ContentType: fileType,
      ACL: 'public-read'
    };
  
    s3.getSignedUrl('putObject', s3Params, (err, data) => {
      if(err){
        console.log(err);
        return res.end();
      }
      const returnData = {
        signedRequest: data,
        url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
      };
  
      return res.send(returnData)
    });
});
// app.post('')


app.listen(SERVER_PORT, () => {
    console.log(`Bro, is it working? ${SERVER_PORT}`)
})