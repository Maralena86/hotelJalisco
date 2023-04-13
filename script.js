const hamburguer =document.querySelector(".hamburguer");
const navMenu = document.querySelector(".menu");
hamburguer.addEventListener('click', ()=>{
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
})
let travels = []
function Travel(img, texte, link){
    this.img = img
    this.texte = texte
    this.link = link

}
const travel1 = new Travel("images/travel_cocora.webp", "Valle del Cocora", "https://www.google.com/maps/dir/Cra.+20+%2321-30,+Armenia,+Quind%C3%ADo,+Colombie/Valle+de+Cocora,+Km+11+V%C3%ADa+al+Valle+del+Cocora+Salento,+Salento,+Quind%C3%ADo,+Colombie/@4.5962528,-75.6183713,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x8e38f5af2446c84d:0xf892707f7302fef5!2m2!1d-75.676553!2d4.5354685!1m5!1m1!1s0x8e38924a03c5355b:0x8d19427653a3da27!2m2!1d-75.48907!2d4.637712!3e0");
const travel2 = new Travel("images/paque_cafe.jpg", "Parque del café", "https://www.google.com/maps/dir/Parque+del+Café/Cra.+20+%2321-30,+Armenia,+Quind%C3%ADo,+Colombie/@4.5395004,-75.736202,14.03z/data=!4m14!4m13!1m5!1m1!1s0x8e385ef825fa221d:0xd35336082b9ca116!2m2!1d-75.7706481!2d4.5402799!1m5!1m1!1s0x8e38f5af2446c84d:0xf892707f7302fef5!2m2!1d-75.676553!2d4.5354685!3e0" );
const travel3 = new Travel("images/panaca.jpg", "Panaca", "https://www.google.com/maps/dir/Cra.+20+%2321-30,+Armenia,+Quind%C3%ADo,+Colombie/Panaca,+V%C3%ADa+A+Panaca,+Quimbaya,+Quind%C3%ADo,+Colombie/@4.5765813,-75.7823124,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x8e38f5af2446c84d:0xf892707f7302fef5!2m2!1d-75.676553!2d4.5354685!1m5!1m1!1s0x8e38673751bb2a3b:0x74601b4c8ed5a28f!2m2!1d-75.8186979!2d4.607683!3e0")

travels.push(travel1, travel2, travel3)

travels.forEach( travel=>{
    const travelContainer = document.querySelector(".travel-container");
    const divTravel = document.createElement("div");
    divTravel.classList ="flex-col-center"
    const imgTravel = document.createElement("img");
    imgTravel.src = travel.img
    const texteTravel = document.createElement("p");
    texteTravel.innerHTML= travel.texte
    const linkTravel = document.createElement("a");
    linkTravel.classList = "btn btn-second"
    linkTravel.innerText = "ACCESO DESDE EL HOTEL"
    linkTravel.href = travel.link

travelContainer.append(divTravel);
divTravel.append(imgTravel, texteTravel, linkTravel);
}

)



