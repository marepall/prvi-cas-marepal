let osoba={ 
ime:'Darko',
prezime:'Darkovic',
godiste:2000,
pozdrav:function(){console.log (`Zdravo, ja sam ${this.ime} ${this.prezime}.Imam ${2022 - this.godiste} godina.`)}







};



// osoba.godiste;

// // console.log (typeof osoba);
// osoba.godiste = 1990;


// osoba.pozdrav = function () {console.log ('zdravo');};
// osoba.pozdrav();
osoba.visina = 175;
console.log(Object.entries(osoba));