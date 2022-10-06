class Pojistenec {
  constructor() {
    this.zaznamy = [];

    this.jmenoInput = document.getElementById("jmeno");
    this.prijmeniInput = document.getElementById("prijmeni");
    this.vekInput = document.getElementById("vek");
    this.telefonInput = document.getElementById("telefon");

    this.ulozitButton = document.getElementById("submit");
    this.vypisElement = document.getElementById("vypisZaznamy");
    this.nastavUdalosti();
  /*   this.nasetujZaznam(); */
/*     this.body=document.querySelector("body") */
  }

  nastavUdalosti() {
    this.ulozitButton.onclick = () => {
      const zaznam = new Zaznam(
        this.jmenoInput.value,
        this.prijmeniInput.value,
        this.vekInput.value,
        this.telefonInput.value
      );
      this.zaznamy.push(zaznam);
      this.vypisZaznamy();
      this.nasetujZaznam();
    };
  }

  vypisZaznamy() {
    this.vypisElement.innerHTML = "";
    for (let i = 0; i < this.zaznamy.length; i++) {
      const zaznam = this.zaznamy[i];
    
  
    this.vypisElement.innerHTML +=  `<h3>${zaznam.jmeno} ${zaznam.prijmeni} </h3><h5>Vek:${zaznam.vek}  </br> 
    Telefoni cislo:${zaznam.telefon}</h5><HR size=2 width="80%" align="left" noshade color=", "grey">`;
/*    this.vypisElement.appendChild(zaznamA)
/*  */   /* this.vypisElement.appendChild(nadpis) */
   
    }
  }
  nasetujZaznam(){
    this.jmenoInput.value="";
        this.prijmeniInput.value="";
        this.vekInput.value="";
        this.telefonInput.value="";
  };
}
/* let nadpis = document.createElement("h3")
nadpis.innerHTML =/* this.vypisElement.innerHTML   `<h3>${zaznam.jmeno} ${zaznam.prijmeni} </h3></br><h4>Vek:${zaznam.vek}  </br> Telefoni cislo:${zaznam.telefon}</h4>`;
  this.vypisElement.appendChild(zaznamA)
  this.vypisElement.appendChild(nadpis) */