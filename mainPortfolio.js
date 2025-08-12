// NavBar
document.addEventListener("DOMContentLoaded", () => {
    // Load the navbar.html file
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            // Insert the navbar HTML into the placeholder div
            document.querySelector(".navbar").innerHTML = data;

        })
        .catch(error => console.error("Error loading navbar:", error));
});





// Graphics
const pixelImages = [
    "Pics/PixelApple.png",
    "Pics/PixelBackdrop.png",
    "Pics/PixelBanana.png",
    "Pics/PixelBench.png",
    "Pics/PixelBike.png",
    "Pics/PixelBin.png",
    "Pics/PixelBook.png",
    "Pics/PixelBottle.png",
    "Pics/PixelBread.png",
    "Pics/PixelBus.png",
    "Pics/PixelCar.png",
    "Pics/PixelCloud2.png",
    "Pics/PixelFloor.png",
    "Pics/PixelGooseFly1.png",
    "Pics/PixelgooseStand.png",
    "Pics/PixelGreggsBag.png",
    "Pics/PixelHeart.png",
    "Pics/PixelLaptop.png",
    "Pics/PixelPaper.png",
    "Pics/PixelPicnicBench.png",
    "Pics/PixelSandwichPacket.png",
    "Pics/PixelYorcup.png",
    "Pics/PixelGecko1.png",
    "Pics/PixelGecko2.png",
    "Pics/PixelSpider.png",
];
const pixelDescriptions = [
    "Apple for Goose on the Loose",
    "Backdrop for Goose on the Loose",
    "Banana for Goose on the Loose",
    "Bench for Goose on the Loose",
    "Bike for Goose on the Loose",
    "Bin for Goose on the Loose",
    "Book for Goose on the Loose",
    "Bottle for Goose on the Loose",
    "Bread for Goose on the Loose",
    "Bus for Goose on the Loose",
    "Car for Goose on the Loose",
    "Cloud for Goose on the Loose",
    "Floor for Goose on the Loose",
    "Goose (flying frame) for Goose on the Loose",
    "Goose (standing position) for Goose on the Loose",
    "Greggs Bag for Goose on the Loose",
    "Heart for Goose on the Loose",
    "Laptop for Goose on the Loose",
    "Paper for Goose on the Loose",
    "Picnic Bench for Goose on the Loose",
    "Sandwich Packet for Goose on the Loose",
    "'YorCup' for Goose on the Loose",
    "Sand-coloured Gecko for 1st year University Project",
    "Green Gecko for 1st year University Project",
    "Spiderfor 1st year University Project",
];

const blenderImages = [
    "Pics/BlenderBBAnemone.png",
    "Pics/BlenderBBBranchedFinger.png",
    "Pics/BlenderBBBubble.png",
    "Pics/BlenderBBCoralGrouper.png",
    "Pics/BlenderBBParrotFish.png",
    "Pics/BlenderBBSeagrass.png",
    "Pics/BlenderBBSeawhip.png",
    "Pics/BlenderBBStaghorn.png",
    "Pics/BlenderBBTuna.png",
    "Pics/BlenderBBTurtle.png",
    "Pics/BlenderGPBench.png",
    "Pics/BlenderGPBook.png",
    "Pics/BlenderGPBookshelf.png",
    "Pics/BlenderGPBoxClosed.png",
    "Pics/BlenderGPBoxOpen.png",
    "Pics/BlenderGPBush.png",
    "Pics/BlenderGPChest.png",
    "Pics/BlenderGPFence.png",
    "Pics/BlenderGPGoose.png",
    "Pics/BlenderGPTable.png",
    "Pics/BlenderGPWall.png",
    "Pics/BlenderGPWizardHat.png",
];
const blenderDescriptions = [
    "Anemone Coral for Biome Balance",
    "Branched Finger Coral for Biome Balance",
    "Bubble Coral for Biome Balance",
    "Coral Grouper for Biome Balance",
    "Parrot Fish for Biome Balance",
    "Seagrass for Biome Balance",
    "Seawhip Coral for Biome Balance",
    "Staghorn Coral for Biome Balance",
    "Tuna for Biome Balance",
    "Turtle for Biome Balance",
    "Bench for Anatidie",
    "Book for Anatidie",
    "Bookshelf for Anatidie",
    "Closed Box for Anatidie",
    "Open Box for Anatidie",
    "Bush for Anatidie",
    "Chest for Anatidie",
    "Fence for Anatidie",
    "Goose for Anatidie",
    "Table for Anatidie",
    "Brick Wall for Anatidie",
    "Wizard Hat for Anatidie",
];

let currentPixelIndex = 0;
let currentBlenderIndex = 0;

const imgElementPixel = document.getElementById('carouselPixelImage');
const descriptionPixel = document.getElementById('pixelCaption')
const prevButtonPixel = document.getElementById('prevButtonPixel');
const nextButtonPixel = document.getElementById('nextButtonPixel');

const imgElementBlender = document.getElementById('carouselBlenderImage');
const descriptionBlender = document.getElementById('blenderCaption')
const prevButtonBlender = document.getElementById('prevButtonBlender');
const nextButtonBlender = document.getElementById('nextButtonBlender');

function updatePixel() {
    imgElementPixel.src = pixelImages[currentPixelIndex];
    descriptionPixel.textContent = pixelDescriptions[currentPixelIndex];
}
function updateBlender() {
    imgElementBlender.src = blenderImages[currentBlenderIndex];
    descriptionBlender.textContent = blenderDescriptions[currentBlenderIndex];
}

prevButtonPixel.addEventListener('click', () => {
    currentPixelIndex = (currentPixelIndex - 1 + pixelImages.length) % pixelImages.length;
    updatePixel();
});
nextButtonPixel.addEventListener('click', () => {
    currentPixelIndex = (currentPixelIndex + 1) % pixelImages.length;
    updatePixel();
});

prevButtonBlender.addEventListener('click', () => {
    currentBlenderIndex = (currentBlenderIndex - 1 + blenderImages.length) % blenderImages.length;
    updateBlender();
});
nextButtonBlender.addEventListener('click', () => {
    currentBlenderIndex = (currentBlenderIndex + 1) % blenderImages.length;
    updateBlender();
});

// Initialize with first image
updatePixel();
updateBlender();
