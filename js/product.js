const API__URL = "https://dummyjson.com";
const content = document.querySelector(".content");

async function fetchSingleData(api) {
  let query = new URLSearchParams(window.location.search);
  let id = query.get("id");
  //    console.log(query);
  let response = await fetch(`${api}/products/${id}`);
  response
    .json()
    .then((res) => createContent(res))
    .catch((err) => console.log(err));
}
fetchSingleData(API__URL);
function createContent(data) {
  console.log("ok");
  console.log(data);
  content.innerHTML = `
     <div class="content__img">
                    <img src="${data.images[0]}" alt="">
                    ${data.images.map(
                      (item) => ( `<img class="little" width="80" src=${item} alt=""></img>`
                    ))
                  }
                </div>
                <div class="context">
                    <h2>Havic HV G-92 Gamepad</h2>
                    <div class="rating">
                        <i class="fa-regular fa-star" style="color: #FFD43B;"></i>
                        <i class="fa-regular fa-star" style="color: #FFD43B;"></i>
                        <i class="fa-regular fa-star" style="color: #FFD43B;"></i>
                        <i class="fa-regular fa-star" style="color: #FFD43B;"></i>
                        <i class="fa-regular fa-star" style="color: #f0ece0;"></i>
                        <p>(150 Reviews)</p>
                        <p>|</p>
                        <p class="green">In Stock</p>
                    </div>
                    <h2>$192.00</h2>
                    <p>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                    <hr>
                    <h3>Colours: <div></div></h3>
                    <div class="sizes">
                        Size:
                        <div class="size">X</div>
                        <div class="size">Xl</div>
                        <div class="size">S</div>
                        <div class="size">XS</div>
                        <div class="size">M</div>
                    </div>
                    <div class="how__many">
                        <div class="plus">+
                        </div>
                        <div class="son">0</div>
                        <div class="plus">-</div>
                        <button>Buy now</button>
                        <div class="plus"><i class="fa-regular fa-heart"></i></div>
                    </div>
                    <div class="delivery">
                        <div class="free">
                            <img src="../assets/icon-delivery (1).png" alt="">
                            <div class="text">
                                <h4>Free Delivery</h3>
                                <p>Enter your postal code for Delivery Availability</p>
                            </div>
                        </div>
                        <div class="free">
                            <img src="../assets/Icon-return.png" alt="">
                            <div class="text">
                                <h4>Free Delivery</h3>
                                <p>Enter your postal code for Delivery Availability</p>
                            </div>
                        </div>
                    </div>
                </div>
    
       
    `;
}