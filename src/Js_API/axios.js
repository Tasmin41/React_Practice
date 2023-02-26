//axios is a js library
//it helps to make request from browser(plain js/vue/react)

//very easy to use
//it returns promise
//throws error brilliantly
//no need to set header cause axios is intelligent

//axios(config)
//axios(url ,config)


//axios returns response object-data,status

console.clear();

const makeRequest = async(config)=>{
    return await axios(config)
}


const getData = ()=>{
    makeRequest("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.log(err);
    })
} 
getData();
const createData = ()=>{
    makeRequest({
        url:"https://jsonplaceholder.typicode.com/posts",
        method: 'POST',
        data: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),

    })
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.log(err);
    })
} 
createData();
const updateData = ()=>{
makeRequest({
        url:"https://jsonplaceholder.typicode.com/posts/1",
        method: 'PUT',
        data: JSON.stringify({
            id:1,
          title: 'fooma',
          body: 'barma',
          userId: 1,
        }),

    })
    .then((res)=>console.log(res.data))
    .catch((err)=>console.log(err))
} 
updateData();
// axios
// .put("https://jsonplaceholder.typicode.com/posts/1",{
//     body: JSON.stringify({
//         id:1,
//       title: 'foora',
//       body: 'baram',
//       userId: 1,
//     }),

// })
// .then((res)=>console.log(res.data))
// .catch((err)=>console.log(err))
