//웹서버
let express = require('express');
let app = express();  //웹서버 구동 패키지 

//app서버
let router = require('./router/main')(app);
let port = process.env.PORT || 3000;

//app 서버 /views, public지정되어있어 해당 경로를 기준으로 소스 가져옴
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

//웹서버
let server = app.listen(port, function(){
    console.log("Express server has started on port "+ port)
});
