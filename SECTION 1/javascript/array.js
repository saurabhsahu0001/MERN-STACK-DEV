const myarr = [234,`good`,true,console.log];
    console.log(myarr)
    console.log(typeof myarr)
    console.log(Array.isArray(myarr));
    console.log(myarr.length);
    const movies = [`badnews`,`avengers`, `hulk`,`stree`,`kill`];

    // indexing

    console.log(movies[2]);
    console.log(movies[4]);
    console.log(movies.at(4));
    movies[4] = `deadpool`
    console.log(movies)

    // slicing
    console.log( movies.slice(1,3));
    console.log( movies.slice(-2)); 
    console.log( movies.slice(-2,50)); 


    // adding and removing element push add in last ,unshift element add in starting

     movies.push(`prestige`)
    console.log(movies);
    movies.unshift(`the dark knight`); 
    console.log(movies);
    movies.pop();   //remove from end   
    movies.shift(); // remove from the  starting
    console.log(movies);


    //movies.splice(2,2);// where to start , to how many we hhave to delete
    console.log(movies);
    // movies.splice(2,2,`kalki`,`spiderman`);// where to start , to how many we have to delete andweite the names  to replace
    
    console.log(movies);
    // movies.splice(2,2,`kalki`,`spiderman`,`abc`);
    console.log(movies);
    movies.splice(1,0,`batman`)//insert batman at index one

    console.log(movies);   




    







