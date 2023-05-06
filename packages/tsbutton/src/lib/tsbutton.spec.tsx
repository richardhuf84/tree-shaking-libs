import { render } from '@testing-library/react';

import Tsbutton from './tsbutton';

describe('Tsbutton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Tsbutton />);
    expect(baseElement).toBeTruthy();
  });
});
