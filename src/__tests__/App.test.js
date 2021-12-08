import { render, screen } from '@testing-library/react';
import App from '../App';

test('<App />', () => {
    render(<App />);
    const linkElement = screen.getByText(/React Weather App/i);
    expect(linkElement).toBeInTheDocument();
});
