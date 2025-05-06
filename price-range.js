document.addEventListener('DOMContentLoaded', function() {
  var priceSlider = document.getElementById('price-slider');
  var minPriceDisplay = document.getElementById('min-price');
  var maxPriceDisplay = document.getElementById('max-price');
  
  // Create slider with range $0-$2000
  noUiSlider.create(priceSlider, {
    start: [500, 1500], // Default starting values
    connect: true, // Shows colored connection between handles
    step: 10, // Increment by $10
    range: {
      'min': 0,
      'max': 2000
    },
    // Format prices with dollar sign
    format: {
      to: function(value) {
        return '$' + Math.round(value);
      },
      from: function(value) {
        return Number(value.replace('$', ''));
      }
    }
  });
  
  // Update displayed prices when handles are moved
  priceSlider.noUiSlider.on('update', function(values, handle) {
    minPriceDisplay.textContent = values[0];
    maxPriceDisplay.textContent = values[1];
  });
  
  // Optional: Add some animation when handles are moved
  priceSlider.noUiSlider.on('slide', function() {
    minPriceDisplay.style.transform = 'scale(1.1)';
    maxPriceDisplay.style.transform = 'scale(1.1)';
    setTimeout(function() {
      minPriceDisplay.style.transform = 'scale(1)';
      maxPriceDisplay.style.transform = 'scale(1)';
    }, 200);
  });
});