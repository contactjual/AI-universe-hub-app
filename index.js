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

    array.forEach(allAi => {

        allAi.forEach(singleAi => {

            // console.log(singleAi.features);

            // add card 
            const cardSection = document.getElementById('card-section');

            const creatDiv = document.createElement('div');

            creatDiv.innerHTML = `
                <div onclick="handlePopup('${singleAi.id}')"  class="card">
                    <div class="features">
                        <img src="${singleAi.image}"
                            alt="">
                        <h2>Features</h2>
                        <p>1. ${singleAi.features[0]}</p>
                        <p>2. ${singleAi.features[1]}</p>
                        <p>3. ${singleAi.features[2]}</p>
                    </div>
                    <hr>
                    <div class="foot">
                        <div class="name-date">
                            <h2>${singleAi.name}</h2>
                            <i class="fa-solid fa-calendar-days"></i>
                            <span>${singleAi.published_in}</span>
                        </div>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
            `;

            cardSection.appendChild(creatDiv);


            // showPopup(singleAi);

        });

    });
}

// console.log(singleAi)

aiData();


const handlePopup = async (id) => {

    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
    // const res = await fetch (`https://openapi.programming-hero.com/api/ai/tool/02`);
    const data = await res.json();
    const PopAiData = data.data;

    showPopup(PopAiData);
}


// show popup

const showPopup = (PopAiData) => {


    // array.forEach(allAi => {

    //     allAi.forEach(singleAi =>{

    //         console.log(singleAi)
    //     });

    // })

    console.log(PopAiData);

    console.log(PopAiData.features[1].feature_name);

    // console.log(PopAiData.pricing[1].price)




    const overPop = document.getElementById('over-pop');

    // create popup
    overPop.innerHTML = `
        <div class="pops">
                <div class="pop-up">
                    <div class="left-card">
                        <h2>${PopAiData.description}</h2>
                        <div class="mini-card">
                            <span class="basic">${PopAiData.pricing[0].price} <br> ${PopAiData.pricing[0].plan} </span>
                            <span class="pro"> ${PopAiData.pricing[1].price} <br> ${PopAiData.pricing[1].plan} </span>
                            <span class="enterprise"> ${PopAiData.pricing[2].price} <br> ${PopAiData.pricing[2].plan} </span>
                        </div>
                        <div class="foot">
                            <div class="left">
                                <h3>Features</h3>
                                <ul>
                                    <li>${PopAiData.features[1].feature_name}</li>
                                    <li>${PopAiData.features[2].feature_name}</li>
                                    <li>${PopAiData.features[3].feature_name}</li>
                                </ul>
                            </div>
                            <div class="right">
                                <h3>Integrations</h3>
                                <ul>
                                    <li>${PopAiData.integrations[0]}</li>
                                    <li>${PopAiData.integrations[1]}</li>
                                    <li>${PopAiData.integrations[2]}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="right-card">
                        <img src="${PopAiData.image_link[0]}" alt="">
                        <h2>${PopAiData.input_output_examples[0].input}</h2>
                        <p>${PopAiData.input_output_examples[0].output}</p>
                    </div>
                </div>
            </div>
            <i onclick="closePopup()" class="fa-solid fa-xmark"></i>
    `;

    overPop.style.display = 'flex';

    // const blockAll = document.getElementById('block-all');
    // blockAll.classList = ('block');



    // add more

    // Position the popup near the clicked card
    const cardPosition = cardElement.getBoundingClientRect();
    overPop.style.display = 'flex';
    overPop.style.position = 'absolute';
    overPop.style.top = `${cardPosition.top + window.scrollY}px`;
    overPop.style.left = `${cardPosition.left + window.scrollX}px`;

    // Add the blocked effect on the background
    document.body.classList.add('blocked');

}



// close popup

const closePopup = () => {
    const overPop = document.getElementById('over-pop');
    overPop.style.display = 'none';

    // const blockAll = document.getElementById('block-all');
    // blockAll.remove.classList = ('block');
};


