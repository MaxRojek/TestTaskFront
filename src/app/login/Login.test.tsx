import React from 'react';
import { AppStateProvider } from 'app/state/AppStateProvider';

import { render } from 'tests';

import { Login } from './Login';

describe('Login', () => {
  test('Displays all information', async () => {
    const { getByText, getByLabelText } = render(
      <AppStateProvider>
        <Login />
      </AppStateProvider>
    );

    expect(getByText('Username')).toBeInTheDocument();
    expect(getByText('Password')).toBeInTheDocument();
  });
});
