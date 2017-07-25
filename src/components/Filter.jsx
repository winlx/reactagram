import React from 'react';

function getFilterCSSStyle(settings) {
  let filterString = '';

  for (let prop of Object.keys(settings)) {
    if (prop === 'hue') {
      filterString += 'hue-rotate(' + settings[prop] + 'deg) ';
    } else {
      filterString += prop + '(' + settings[prop] + '%) ';
    }
  }

  return filterString;
}

function Filter({ children, name, settings, selected, onClick = () => {} }) {
  const filter = getFilterCSSStyle(settings);
  const style = { filter };
  const className = `filter${selected ? 'selected' : ''}`;

  return (
    <div className={className} onClick={() => onClick(name, settings)}>
      <div className="image-container" style={style}>
        {children}
      </div>
    </div>
  );
}

export default Filter;