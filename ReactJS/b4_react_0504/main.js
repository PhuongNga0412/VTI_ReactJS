// setTimeout(() => {
//     console.log(1);
// }, 3000);
// console.log(2);

// function builtTable(){
//     setTimeout(function name(params) => {
//         $('tbody').empty();
//         initEmployees();
//         employees.forEcach(function(item){
//             $('tbody').append(
//                 '<tr>'+
//                 '<td>'+item.name+'</td>'
//                 '<td>'+item.department+'</td>'
//                 '<td>'+item.phone+'</td>'
//                 '<td>''+
//                 '<a class="edit" title="Edit" data-toggle="tooltip" onclick="openUpdateModal('+item.id+'')></a>'
//                 '</tr>'
//             )
//         })
//     });
// }function getListEmployees(){
//     $.get("https://See")
// }

function A(a, b, B) {
    const c = a + b;
    B(c);
}
function B(c) {
    console.log("C", c);
}
A(10, 20, B);

// const apiCall = fetch(
//     "https://5f854efbc29abd00161905ac.mockapi.io/user/login/user"
// );
// console.log("api call", apiCall);
// apiCall.then(successFunction, rejectFunction);
// function successFunction(response){
//     return
// }

// const apiCall = fetch(
//     "https://5f854efbc29abd00161905ac.mockapi.io/user/login/user"
// )
//     .then((response) => response.json())
//     .then((data) => console.log("data", data))
//     .catch((err) => console.log("err", err))
//     .finally(() => console.log("finally"));

// async function callApi() {
//     const result = await fetch(
//         "https://5f854efbc29abd00161905ac.mockapi.io/user/login/user"
//     );
//     const finalData = await result.json();
//     console.log("finalData", finalData);
// }
// callApi();

// const apiUser = fetch(
//     "https://5f854efbc29abd00161905ac.mockapi.io/user/login/user/3"
// )
//     .then((response) => response.json())
//     .then((data) => console.log("data", data))
//     .catch((err) => console.log("err", err))
//     .finally(() => console.log("finally"));

// function checkEmail(Email,checkCallback){
//     setTimeout(()=>{

// if(email=false)
//     })
// }

const arr = [
    "https://5f854efbc29abd00161905ac.mockapi.io/user/login/user/1",
    "https://5f854efbc29abd00161905ac.mockapi.io/user/login/user/2",
    "https://5f854efbc29abd00161905ac.mockapi.io/user/login/user/3",
    "https://5f854efbc29abd00161905ac.mockapi.io/user/login/user/4",
    "https://5f854efbc29abd00161905ac.mockapi.io/user/login/user/5",
];
let results = [];
async function callArrayApi() {
    for (let index = 0; index < arr; index++) {
        try {
            const data = await fetch(arr[index]);
            const result = await data.json();
            results.push(result);
        } catch (err) {
            continue;
        }
    }
}
callArrayApi();
console.log("result", results);
