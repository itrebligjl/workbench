import React from 'react';

var MappleToolTip = require('reactjs-mappletooltip');

export default () => (
  <aside className="section">
    <h4 className="is-size-4">Shortcuts</h4>
    <div className="buttons">
	<MappleToolTip float={true} direction={'right'} mappleType={'info'}>
        <div>
          Float in bottom direction
        </div>
        <div>
          direction = 'right'<br/>
          float = true<br/>
          mappleType = 'info'
        </div>
      </MappleToolTip>
	  <button className="button" type="button">EA Mgmt. Toolkit</button>
      <button className="button" type="button">Knowledge & Search Tool </button>
      <button className="button" type="button">Steps Documentation Tool </button>
      <button className="button" type="button">Visualization Tool</button>
      <button className="button" type="button">Utilities</button>
      <button className="button" type="button">Workbench Blog</button>
      <button className="button" type="button">Planet EPA</button>
      <button className="button" type="button">Workbench Forum</button>
    </div>
  </aside>  
);