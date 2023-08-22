const express = require('express')
const app = express()
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')

mongoose.connect('mongodb://127.0.0.1:27017/blogs', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { 
  console.log('Connected to database!');
app.listen(3000)

}).catch((err) => {
  console.error('Error connecting to database:', err);
});

// register view engine
app.set('view engine','ejs')




// creating middleware
app.use((req,res,next)=>{
    console.log('New Request made:');
    console.log('host:', req.hostname);
    console.log('path:',req.path);
    console.log('method:',req.method)
    next()
})

//middleware use to accept form data 
app.use(express.urlencoded({ extended: true }));
 

//routes
app.get('/',(req,res)=>{
    res.redirect('/blogs')
})
app.get('/about',(req,res)=>{
   res.render('about',{ title:'About'})
})


// blog routes
app.use('/blogs',blogRoutes)

// 404 page Always place on the bottom
app.use((req,res)=>{
    res.status(404).render('404',{ title:'404'})
})