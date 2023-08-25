// GET REQUEST
function getTodos() {
    // console.log('GET Request');

    /**
     * 
    axios({
        method:'get',
        url: 'https://jsonplaceholder.typicode.com/todos',
        //ab maan lo api s 5 tk hi daat chahiye to
        params:{
            _limit:5
        }
        
    })
    ANOTHER WAY TO DO THE ABOVE SAME SHORT IS ---
     */
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res=>showOutput(res))//y function niche bna h
    .catch((err)=>console.log(err))
    
  }
  /** VAisw axios mei "Get" request By Default hota h to we even don need to write axios.get
   * infact just axios('url')
   */
  
  // POST REQUEST
  //basically sending data
  function addTodo() {
    // console.log('POST Request');
    axios.post('https://jsonplaceholder.typicode.com/todos' ,{
//hmne {} bnaya for obj in 2nd Parameter 
        title:"Hello 2nd Eazy way",
        completed:false
    }
    )
    //Same Above thing in anothor way
  /*  axios({
        method:'post',
        url: 'https://jsonplaceholder.typicode.com/todos',
        //ab maan lo api s 5 tk hi daat chahiye to
        data:{
            title:'Hi I am Learning Axios',
            completed:false
        }
        
    })*/
    
    .then(res=>showOutput(res))//y function niche bna h
    .catch((err)=>console.log(err))
  }
  
  // PUT/PATCH REQUEST
  /*
  Put request s UserID nhi aati but dusri id aa jati h aur data update bhi ho jata h
  */
  function updateTodo() {
    //update k liye hme id bhi deni hoti h ki kis obj k data change krna h k liye
   /*
    axios.put('https://jsonplaceholder.typicode.com/todos/1',{
        title:"New Updated Title BY Put aur isme userId Nhi aati h",
        completed:true
        
    })*/
    axios.patch('https://jsonplaceholder.typicode.com/todos/1',{
        title:"New Updated Title BY PAtch aur isme USer Id Bhi aati h unlike put",
        completed:true
        
    })
    
    .then(res=>showOutput(res))//y function niche bna h
    .catch((err)=>console.log(err))
//To bhai sahab kab put aur kb patch use kreein
/**
 * When a client needs to replace an existing Resource entirely, they can use PUT. 
 * When they're doing a partial update, they can 
 * use HTTP PATCH. For instance, when updating a 
 * single field of the Resource, sending the complete Resource representation
 *  can be cumbersome and uses a lot of unnecessary bandwidth.
 */
  }
  
  // DELETE REQUEST
  function removeTodo() {
    axios.delete('https://jsonplaceholder.typicode.com/todos/1')
    .then(res=>showOutput(res))//y function niche bna h
    .catch((err)=>console.log(err))
  }
  /*===================Yha SE Game h ASLI WALA--------------^^^^^^^^^^^^^^^^^^^^^^------------------------------------------------ */
  //Yha use aata h Axios.all something like promise.all jb sara request fullfill tb beta return
  // SIMULTANEOUS DATA
  function getData() {
    // console.log('Simultaneous Request');
    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/todos'),
        // axios.post("https://jsonplaceholder.typicode.com/posts")
        axios.post('https://jsonplaceholder.typicode.com/todos' ,{
//hmne {} bnaya for obj in 2nd Parameter 
        title:"Hello data simultaneausly update and post",
        completed:false
    }
    )
    ])
    // .then(res=>{
    //     console.log(res[0]);
    //     console.log(res[1]);
    //     showOutput(res[1])
    // })//y function niche bna h
    /**Upr wale ko asaani s bhi likh sakte h usinf Axios.spread y ex niche */
    .then(axios.spread((todos,posts)=>{
        showOutput(posts)
        // showOutput(todos)
    }))
    .catch((err)=>console.log(err))

  }
  
  // CUSTOM HEADERS
  function customHeaders() {
    console.log('Custom Headers');
  }
  
  // TRANSFORMING REQUESTS & RESPONSES
  function transformResponse() {
    console.log('Transform Response');
  }
  
  // ERROR HANDLING
  function errorHandling() {
    console.log('Error Handling');
  }
  
  // CANCEL TOKEN
  function cancelToken() {
    console.log('Cancel Token');
  }
  
  // INTERCEPTING REQUESTS & RESPONSES
  
  // AXIOS INSTANCES
  
  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Event listeners
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken);