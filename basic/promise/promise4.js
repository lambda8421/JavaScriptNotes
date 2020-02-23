const onResolved = e => console.log('resolve , ', e );
const onRejected = e => console.log('reject , ', e );

// new Promise( ( resolve , reject ) => {
//     resolve( new Promise( ( resolve , reject ) => {
//         resolve(42);
//     } ) );
// } ).then( onResolved , onRejected );
//
// new Promise( ( resolve , reject ) => {
//     resolve( new Promise( ( resolve , reject ) => {
//         reject(42);
//     } ) );
// } ).then( onResolved , onRejected );

// new Promise( ( resolve , reject ) => {
//     reject( new Promise( ( resolve , reject ) => {
//         resolve(42);
//     } ) );
// } ).then( onResolved , onRejected );

// new Promise( ( resolve , reject ) => {
//     reject( new Promise( ( resolve , reject ) => {
//         reject(42);
//     } ) );
// } ).then( onResolved , onRejected );
