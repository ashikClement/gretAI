let landingPage = 1;

document.getElementById('continueButton').addEventListener('click', () => {
    landingPage++;

    // Update dialogue and image for the each landing page
    if (landingPage == 2) {
        document.getElementById('dialogue').textContent = `“Oh right, my consciousness
        got programmed into this website...”`;
        document.getElementById('gretaImage').src = `greta_character_design/greta character design 15.png`;
    } else if (landingPage == 3) {
        document.getElementById('dialogue').textContent = `“This website should be from the year 2024”`;
        document.getElementById('gretaImage').src = `greta_character_design/greta character design 11.png`;
    } else if (landingPage == 4) {
        document.getElementById('dialogue').textContent = `“But if I'm here, I must make the most of it. Hello there...person. I suppose I should introduce myself. I'm Greta Thunberg, or at least a digital version of her, here to continue my mission even beyond the constraints of mortal life and time itself.” `;
        document.getElementById('gretaImage').src = `greta_character_design/greta character design 10.png`;
    } else if (landingPage == 5) {
        document.getElementById('dialogue').textContent = `“You might be wondering why you're suddenly face to face with a virtual version of me. Well, it's because the climate crisis doesn't stop, even after I'm gone. My purpose remains the same: to raise awareness about the urgent need for action to combat climate change.”`;
        document.getElementById('gretaImage').src = `greta_character_design/greta character design 2.png`;
    } else {
        // Redirect to sign up page after the fifth landing page
        window.location.href = 'sign_up.html';
    }
});



