// const fido = {
//     name: "Fido",
//     weight: 40,
//     breed: "mixed",
//     loves: ["walks", "fetching balls"],
//     bark: function() {
//         alert("Woof Woof");
//     }
// };

// fido.bark();

// var movie1 = {
//     title: "Stardust",
//     rating: "5 Stars",
//     showtimes: ["5pm", "7pm", "11pm"],
//     genre: "Amazing",
//     getNextShowing: function() {
//         let now = new Date().getTime();
//         for (let i = 0; i < this.showtimes.length; i++) {
//             let showtime = getTimeFromString(this.showtimes[i]);
//             if ((showtime - now) > 0) {
//                 return "Next showing of " + this.title + " is " + this.showtimes[i];
//             }
//         }
//         return null;
//     }
    
// };

// var movie2 = {
//     showtimes: ["3pm", "5pm", "9pm"],
//     title: "Plan 9 from Outer Space",
//     rating: "3 Stars",
//     genre: "Cult Classic",
//     getNextShowing: function() {
//         let now = new Date().getTime();
//         for (let i = 0; i < this.showtimes.length; i++) {
//             let showtime = getTimeFromString(this.showtimes[i]);
//             if ((showtime - now) > 0) {
//                 return "Next showing of " + this.title + " is " + this.showtimes[i];
//             }
//         }
//         return null;
//     }
// };

// function getNextShowing(movie) {
//     const now = new Date().getTime();

//     for (let i = 0; i < movie.showtimes.length; i++) {
//         const showtime = getTimeFromString(movie.showtimes[i]);
//         if ((showtime - now) > 0) {
//             return "Nexty showing of " + movie.title + " is " + movie.showtimes[i];
//         }
//     }
//     return null;
// }

// function getTimeFromString(timeString) {
//     const theTime = new Date();
//     const time = timeString.match(/(\d+)(?::(\d\d))?\s*(p?)/);
//     theTime.setHours( parseInt(time[1]) + (time[3] ? 12 : 0) );
//     theTime.setMinutes( parseInt(time[2]) || 0 );
//     return theTime.getTime();
// }

// let nextShowing = movie1.getNextShowing();
// alert(nextShowing);
// nextShowing = movie2.getNextShowing();
// alert(nextShowing);


function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function() {
        if (this.weight > 25) {
            alert(this.name + " says Woof!");
        } else {
            alert(this.name + " says Yip!");
        }
    };
}

const fido = new Dog("Fido", "Mixed", 38);
const tiny = new Dog("Tiny", "Chawalla", 8);
const clifford = new Dog("Clifford", "Bloodhound", 65);

fido.bark();
tiny.bark();
clifford.bark();


