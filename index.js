const aiData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    const ai = data.data;

    const array = Object.values(ai)

    // console.log(ai)
    // console.log(array)

    displayAiInfo(array);

}




// display ai info 
const displayAiInfo = (array) => {

    array.forEach(singleAi => {
        console.log(singleAi);
    
        // add card 
    
        const cardSection = document.getElementById('card-section');
    
        cardSection.innerHTML = `
            <div onclick="showPopup()"  class="card">
                <div class="features">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_1j5EelHEOtoLagpQtbwPZdrztpEQL0sJLA&s"
                        alt="">
                    <h2>Features</h2>
                    <p>1. Natural language processing</p>
                    <p>2. Contextual understanding</p>
                    <p>3. Text generation</p>
                </div>
                <hr>
                <div class="foot">
                    <div class="name-date">
                        <h2>${singleAi[0].name}</h2>
                        <i class="fa-solid fa-calendar-days"></i>
                        <span>11/01/2022</span>
                    </div>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
            </div>
        `;
    });
}
    


aiData();




// show popup

const showPopup = () => {
    const overPop = document.getElementById('over-pop');
    overPop.style.display = 'flex';

    // const blockAll = document.getElementById('block-all');
    // blockAll.classList = ('block');
}



// close popup

const closePopup = () => {
    const overPop = document.getElementById('over-pop');
    overPop.style.display = 'none';

    // const blockAll = document.getElementById('block-all');
    // blockAll.remove.classList = ('block');
}
