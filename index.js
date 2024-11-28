const aiData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    // const ai = data
    console.log(data);
}

aiData();








// add card 

const cardSection = document.getElementById('card-section');
