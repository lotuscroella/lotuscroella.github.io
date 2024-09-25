// Function to add 'show' class to each feature with a delay
function revealFeatures() {
    const features = document.querySelectorAll('.feature-item');
    const windowHeight = window.innerHeight;

    features.forEach((feature, index) => {
        const revealTop = feature.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {  // Adjust threshold as needed
            setTimeout(() => {
                feature.classList.add('show');
            }, index * 200);  // Add a 200ms delay between each feature's reveal
        }
    });
}

// Event listener for scroll to trigger the reveal animation
window.addEventListener('scroll', revealFeatures);

// Trigger reveal on page load for any already visible features
window.addEventListener('load', revealFeatures);
