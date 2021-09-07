import { render, screen } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme/theme';
import VisitCard from '../components/VisitCard';
import '@testing-library/jest-dom';

describe('<VisitCard />', () => {
  it('correctly render item on ListVisits', () => {
    const visit = {
      id: 1,
      name: 'Doctor Who',
      position: 'surgeon',
      description:
        'British science fiction television programme broadcast by BBC One since 1963.',
      date: '2021-08-14T18:05:43.511Z',
    };

    render(
      <ThemeProvider theme={theme}>
        <VisitCard visit={visit} />
      </ThemeProvider>,
    );

    expect(screen.getByText(/Doctor Who/i)).toBeInTheDocument();
    expect(screen.getByText(/surgeon/i)).toBeInTheDocument();
    expect(screen.getByText(/14.08/i)).toBeInTheDocument();
  });
});
