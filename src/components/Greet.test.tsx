import React from 'react';
import { render, screen } from '@testing-library/react';
import Greet from './Greet';

test('Check if Greet is mounted', () => {
    render(<Greet/> );
    const elm = screen.getByText(/Hello World/i);
    expect(elm).toBeInTheDocument()
});

