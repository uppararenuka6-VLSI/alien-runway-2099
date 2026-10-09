
function findStyle() {
    const occasion = document.getElementById("occasion").value;
    const style = document.getElementById("style").value;
    const result = document.getElementById("result");

    if (occasion === "" || style === "") {
        result.innerHTML = `
            <h2>⚠️ STYLE SCAN INCOMPLETE</h2>
            <p>Choose your occasion and fashion vibe first, alien.</p>
        `;
        return;
    }

    const outfits = {
        college: {
            traditional: "Try a kurti, straight-fit pants, comfortable flats, and small earrings.",
            western: "Try wide-leg jeans, a graphic tee, sneakers, and a denim jacket.",
            minimal: "Try a plain shirt, neutral trousers, clean sneakers, and simple accessories."
        },
        party: {
            traditional: "Try a festive kurta set or an elegant traditional outfit with statement accessories.",
            western: "Try a statement top, tailored trousers or jeans, and your favourite boots or sneakers.",
            minimal: "Try a monochrome outfit, sleek accessories, and a clean, coordinated look."
        },
        casual: {
            traditional: "Try a printed kurti, relaxed pants, sandals, and colourful accessories.",
            western: "Try an oversized tee, relaxed-fit jeans, and comfortable sneakers.",
            minimal: "Try a neutral tee, relaxed trousers, and simple everyday accessories."
        }
    };

    const occasionName =
        occasion.charAt(0).toUpperCase() + occasion.slice(1);

    const styleName =
        style.charAt(0).toUpperCase() + style.slice(1);

    const recommendation = outfits[occasion][style];

    // Show the college western image for this matching selection
    
const imageFiles = {
    college: {
        traditional: "college-traditional.jpg",
        western: "college-western.png",
        minimal: "college-minimal.jpg"
    },
    party: {
        traditional: "party-traditional.jpg",
        western: "party-western.jpg",
        minimal: "party-minimal.jpg"
    },
    casual: {
        traditional: "casual-traditional.jpg",
        western: "casual-western.jpg",
        minimal: "casual-minimal.jpg"
    }
};

const imageName = imageFiles[occasion][style];

const imageHTML = `
    <img
        src="./images/${imageName}"
        alt="${occasionName} ${styleName} outfit inspiration"
        width="300"
        style="display:block; max-width:100%; height:auto; margin:20px auto;"
        onerror="this.alt='Image not found. Check the filename in your images folder.'"
    >
`;


    result.innerHTML = `
        <h2>✦ ALIEN STYLE SCAN COMPLETE ✦</h2>
        <p>OCCASION: ${occasionName}</p>
        <p>STYLE DNA: ${styleName}</p>
        <p>YOUR OUTFIT TRANSMISSION:</p>
        <p>${recommendation}</p>
        ${imageHTML}
        <p>✧ YOUR VIBE. YOUR RULES. ✧</p>
    `;
}
