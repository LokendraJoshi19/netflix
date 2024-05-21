import express from 'express';
const app=express();

// to make app understood json
app.use(express.json());

// routes
app.get('/say-hello',(req, res)=>{
    return res.status (200).send('Hello');
});

let movieList=[];
// add movie
app.post('/movie/add',(req,res)=>{
    // extract new movie from req.body
    const newMovie =req.body;

    // add new movie to movieList
    movieList.push(newMovie);

    // send response 
    return res.status(200).send({message:`Movie is added successfully.`});
});

// get movies
app.get ('/movie/list',(req,res)=>{
    return res.status(200).send({message:`success`,movies:movieList});
});

// delete a movie



// network port and server
const PORT =8001;
app.listen(PORT,()=>{
    console.log(`App is listening on port${PORT}`);
});