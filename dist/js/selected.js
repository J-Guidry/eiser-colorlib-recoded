new SlimSelect({
    select: '.p-sort',
});

new SlimSelect({
    select: '.p-show',
});

const slider = document.getElementById("price-slider");
const output = document.getElementById("price");
output.textContent += slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.textContent = "$ " + this.value;
}
