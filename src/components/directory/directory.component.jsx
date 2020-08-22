import React from 'react';
import './directory.styles.scss';
import { sections } from './directory-data.component';
import MenuItem from '../menu-item/menu-item.componenet';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections,
    };
  }
  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
