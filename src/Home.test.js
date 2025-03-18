import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

// Mock the VF components
jest.mock('@visual-framework/vf-card/vf-card.react.js', () => ({
  VfCard: () => <div data-testid="mock-vf-card">Mock Card</div>
}));

jest.mock('@visual-framework/vf-button/vf-button.react.js', () => ({
  VfButton: () => <div data-testid="mock-vf-button">Mock Button</div>
}));

// Mock the VfIntro component
jest.mock('./component-templates/vf-intro', () => ({
  __esModule: true,
  default: ({ name }) => <div data-testid="mock-vf-intro">{name}</div>
}));

describe('Home component', () => {
  const renderWithRouter = (component) => {
    return render(
      <MemoryRouter>
        {component}
      </MemoryRouter>
    );
  };

  it('renders without crashing', () => {
    renderWithRouter(<Home />);
  });

  it('renders VfIntro with correct props', () => {
    renderWithRouter(<Home />);
    const intro = screen.getByTestId('mock-vf-intro');
    expect(intro).toHaveTextContent('React for the VF 2.0');
  });

  it('renders two VfCard components', () => {
    renderWithRouter(<Home />);
    const cards = screen.getAllByTestId('mock-vf-card');
    expect(cards).toHaveLength(2);
  });

  it('renders the quickstart section', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText('Quickstart')).toBeInTheDocument();
    expect(screen.getByText(/npm init @visual-framework\/vf-react/)).toBeInTheDocument();
  });

  it('renders the component installation instructions', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText('Component installation')).toBeInTheDocument();
    expect(screen.getByText(/yarn add @visual-framework\/vf-logo/)).toBeInTheDocument();
  });

  it('renders the manual installation section', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText('Manual installation for customisation')).toBeInTheDocument();
    expect(screen.getByText('Download a pattern')).toBeInTheDocument();
  });
});