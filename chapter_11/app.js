// //dates & times
// const now = new Date();
// console.log(now);
// console.log(typeof now);

// console.log('getFullYear:', now.getFullYear());
// console.log('getMonth:', now.getMonth());
// console.log('getDate:', now.getDate());
// console.log('getDay:', now.getDay());
// console.log('getHours:', now.getHours());
// console.log('getMinutes:', now.getMinutes());
// console.log('getSeconds:', now.getSeconds());
// console.log('getMilliseconds:', now.getMilliseconds());
// console.log('getTime:', now.getTime());

// // timestamps
// console.log('timestamp:', now.getTime());

// // date strings
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());

//timestamps
// const before = new Date("February 1 2019 7:30:59");
// const now = new Date();

// console.log("Before:", before.getTime());

// const diff = now.getTime() - before.getTime();
// console.log("Difference in ms:", diff);

// const mins = Math.round(diff / 1000 / 60);
// const hours = Math.round(mins / 60);
// const days = Math.round(hours / 24);

// console.log(`The blog was created ${mins} minutes ago`);
// console.log(`The blog was created ${hours} hours ago`);
// console.log(`The blog was created ${days} days ago`);

// //converting timestamps into date objects
// const timestamp = 1677629398000;
// console.log(new Date(timestamp));

// //building a digital clock

// const clock = document.querySelector(".clock");

// const tick = () => {
//   const now = new Date();

//   const hour = now.getHours();

//   const mins = now.getMinutes();
//   const secs = now.getSeconds();

//   const html = `
//   <span>${hour}</span> :
//     <span>${mins}</span> :
//     <span>${secs}</span>`;

//   clock.innerHTML = html;
// };
// setInterval(tick, 1000);

const now = new Date();

// console.log(dateFns.isToday(now));

// formatting options
console.log(dateFns.format(now, "yyyy"));
console.log(dateFns.format(now, "MMM"));
console.log(dateFns.format(now, "dd"));
// console.log(dateFns.format(now, "Do"));
console.log(dateFns.format(now, "yy/mm/dd"));
console.log(dateFns.format(now, "hh:mm:ss a"));
console.log(dateFns.format(now, "dd  MM yyyy"));

//comparing dates
const before = new Date("February 1 2019 7:30:59");
// console.log(dateFns.distanceInWords(now, before, { addSuffix: true })); former version
console.log(dateFns.formatDistance(now, before, { addSuffix: true }));
