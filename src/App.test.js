import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  const container = render(<App />);
  const blog = await screen.findByText(/Maximize Distributed Users/i);
  expect(blog).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
