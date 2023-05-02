import React from 'react';

function WeatherIcon({ description }) {
  return (
    <>
      <div className="icon-sym">
        {/sun|sunny|clear|fair/i.test(description) && <img src="./day.svg" alt="Sun" />}
        {/cloud|cloudy|overcast/i.test(description) && (
          <img src="./cloudy.svg" alt="description" />
        )}
        {/rain|rainy|drizzle|shower/i.test(description) && (
          <img src="./rainy-2.svg" alt="description" />
        )}
        {/snow|snowy/i.test(description) && <img src="snow-icon.png" alt="Snow" />}
        {/thunderstorm|stormy/i.test(description) && (
          <img src="./thunder.svg" alt="description" />
        )}
        {/windy|breezy/i.test(description) && (
          <img src="./snowy-3.svg" alt="description" />
        )}
        {/fog|foggy/i.test(description) && <img src="./weather.svg" alt="description" />}
      </div>
    </>
  );
}

export default WeatherIcon;
