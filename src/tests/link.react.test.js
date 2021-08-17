import React from 'react';
import renderer from 'react-test-renderer';


it('Render works correctly', () => {
    const tree= renderer.create(<div>buttons</div>).toJSON();
    expect(tree).toMatchSnapshot();
  });
