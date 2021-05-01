
// function hover() {
//     document.getElementById("myImg").src = "2.svg";
//   }

// above is from outsource




// const changeImage = (newImage, delay, doNext) => {
//     setTimeout( ()=> {
//         document.getElementById("myImg") = newImage;
//         doNext && doNext();
//     }, delay)
// }

// changeImage ("C:\Users\floyd\Desktop\web development projects\experiment\1", 1000, () => {
//     changeImage("3.svg", 1000, () =>{

//     })
// });

//above is my experiment


// 1st success

// setTimeout( () => {
//     document.getElementById("myImg").src = "2.svg";
// },2000)
// setTimeout( () => {
//     document.getElementById("myImg").src = "3.svg";
// },4000)


 
// last try and its success
// const delayChanges = (newImage, delay, doNext) => {
//     setTimeout( () => {
//         document.getElementById("myImg").src = newImage;               //this is gonna be the function set-up
//         doNext && doNext() ;
//     }, delay)
// }
 
// delayChanges ("2.svg", 2000, () => {
//     delayChanges ("3.svg", 2000, () => {
//         delayChanges ("1.svg", 2000, () => {
//             delayChanges ("2.svg", 2000, () => {
//                 delayChanges ("3.svg", 2000, () => {
//                     delayChanges ("1.svg", 2000, () => {
//                         delayChanges ("2.svg", 2000, () => {
//                             delayChanges ("3.svg", 2000, () => {
//                                 delayChanges ("1.svg", 2000, () => {
//                                     delayChanges ("2.svg", 2000, () => {
//                                         delayChanges ("3.svg", 2000, () => {
//                                             delayChanges ("1.svg", 2000, () => {
//                                                 delayChanges ("2.svg", 2000, () => {
//                                                     delayChanges ("3.svg", 2000, () => {
//                                                     })
//                                                 })
//                                             })
//                                         })
//                                     })
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// });
                                                                                //  ask royson why both  functions -if enabled- are not working





// Extra fitting  | experiment part 1

// const delayChanges = (newColor, delay, doNext) => {
//     setTimeout( () => {
//         document.getElementById("container").style.backgroundColor = newColor;               //this is gonna be the function set-up
//         doNext && doNext ();
//     }, delay)
// }
 
// delayChanges ('lightgreen', 1000, () => {
//     delayChanges ('orange', 1000, () => {
//         delayChanges ('pink', 1000, () => {
//             delayChanges ('white', 1000, () => { 
//             }) 
//         })
//     })
// });





// Extra fitting  | experiment part 2 | with async

const delayImageChanges = (newImage, delay) => {
    return new Promise((resolve, reject) => {
    setTimeout( () => {
        document.getElementById("myImg").src = newImage;       
        resolve();
    }, delay)
})
}

async function imageChange() {
    await delayImageChanges("2.svg", 3000)
    await delayImageChanges("3.svg", 3000)
    await delayImageChanges("1.svg", 3000)
}
// time to loop the above function

imageChange().then( () => imageChange().then( () => imageChange().then( () => imageChange().then( () => imageChange().then( () => imageChange().then( () => imageChange() )) ) ) ) ) 

// SUCCESS.... YEAAAAAAAAAA YEAAAAAAAAAA