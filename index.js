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
                <div onclick="handlePopup('${singleAi.name}')"  class="card">
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

    // const res = await fetch (`https://openapi.programming-hero.com/api/ai/tool/${id}`);
    const res = await fetch (`https://openapi.programming-hero.com/api/ai/tool/01`);
    const data = await res.json();
    const PopAiData = data.data;

    showPopup (PopAiData);
}


// show popup

const showPopup = (PopAiData) => {


    // array.forEach(allAi => {

    //     allAi.forEach(singleAi =>{

    //         console.log(singleAi)
    //     });

    // });

    console.log(PopAiData);


    const overPop = document.getElementById('over-pop');

    // create popup
    overPop.innerHTML = `
        <div class="pops">
                <div class="pop-up">
                    <div class="left-card">
                        <h2>ChatGPT is an AI-powered chatbot platform that uses OpenAI's GPT technology to simulate
                            human
                            conversation.</h2>
                        <div class="mini-card">
                            <span class="basic">$10/ <br> month <br> Basic</span>
                            <span class="pro">$50/ <br> month <br> Pro</span>
                            <span class="enterprise">Contact <br> us <br> Enterprise</span>
                        </div>
                        <div class="foot">
                            <div class="left">
                                <h3>Features</h3>
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                            <div class="right">
                                <h3>Integrations</h3>
                                <ul>
                                    <li>FB Messenger</li>
                                    <li>Slack</li>
                                    <li>Telegram</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="right-card">
                        <img src="${PopAiData.image}" alt="">
                        <h2>Hi, how are you doing today?</h2>
                        <p>I'm doing well, thank you for asking. How can I assist you today?</p>
                    </div>
                </div>
            </div>
            <i onclick="closePopup()" class="fa-solid fa-xmark"></i>
    `;

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
};

