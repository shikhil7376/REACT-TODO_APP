async function asyncFunc() {
    console.log('A');
    await new Promise(resolve => {
     console.log('E')
     setTimeout(resolve, 1000)
    });
    console.log('B');
 }
 console.log('C');
 asyncFunc();
 console.log('D');