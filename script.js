// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here
function fetchData(url) {
  return fetch(url).then((response) => response.json());
}

function testPromiseAll(apiUrls) {
  const startTime = Date.now();
  return Promise.all(apiUrls.map(fetchData)).then(() => {
    const endTime = Date.now();
    return endTime - startTime;
  });
}

function testPromiseAny(apiUrls) {
  const startTime = Date.now();
  return Promise.any(apiUrls.map(fetchData)).then(() => {
    const endTime = Date.now();
    return endTime - startTime;
  });
}


let outputAll = document.getElementById('output-all');
let outputAny = document.getElementById('output-any');

  outputAll.innerHTML = 'Testing...';
  outputAny.innerHTML = 'Testing...';


 testPromiseAll(apiUrls)
    .then((time) => {
      outputAll.innerHTML = `${time} ms`;
    })
    .catch((error) => {
      outputAll.innerHTML = error;
    });

  testPromiseAny(apiUrls)
    .then((time) => {
      outputAny.innerHTML = `${time} ms`;
    })
    .catch((error) => {
      outputAny.innerHTML = error;
    });
