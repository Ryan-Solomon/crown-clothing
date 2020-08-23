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
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
