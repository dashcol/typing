//Create you project here from scratch
const moviesList = [
    { movieName: "Flash", price: 7 },
    { movieName: "Spiderman", price: 5 },
    { movieName: "Batman", price: 4 },
  ];
// Use moviesList array for displaing the Name in the dropdown menu


 const selectMovie=document.querySelector("#selectMovie")

 moviesList.forEach(movie=>{
  const option=document.createElement("option");
  option.textContent=movie.movieName;
  option.value=movie.price
  selectMovie.appendChild(option);
 })
 const movieName=document.querySelector("#movieName")

 selectMovie.addEventListener('change', function(event) {
    const selectedIndex = event.target.selectedIndex;
    const selectedMovie = moviesList[selectedIndex];
    
    // Update movie name and price on the page
    document.getElementById('movieName').textContent = selectedMovie.movieName;
    document.getElementById('moviePrice').textContent = selectedMovie.price;
});

//Add eventLister to each unoccupied seat
const seat=document.querySelectorAll(".seat:not(.occupied)");
let seattotal=0
seat.forEach(seats => {
  seats.addEventListener('click', () => {
    seats.classList.toggle('selected');
               seattotal++;
    updateSelectedSeats();
    updateTotalPrice();


    const seatT=document.getElementById('numberOfSeat');
    seatT.textContent=seattotal;
  })
  });





  function updateSelectedSeats() {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    const selectedSeatsHolder = document.getElementById('selectedSeatsHolder');
  
    if (selectedSeats.length > 0) {
      let selectedSeatsText = '';
      selectedSeats.forEach((seat, index) => {
        selectedSeatsText += `Seat ${index + 1}, `;
      });
      selectedSeatsHolder.innerHTML = selectedSeatsText.slice(0, -2); 
    } else {
      selectedSeatsHolder.innerHTML = '<span class="noSelected">No Seat Selected</span>';
    }
  }

  function updateTotalPrice() {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    const totalPriceElement = document.getElementById('totalPrice');
    const moviePrice = parseFloat(document.getElementById('moviePrice').textContent.slice(2)); 
    const totalPrice = selectedSeats.length * moviePrice;
    totalPriceElement.textContent = `$ ${totalPrice}`;
   

  }  