import { AppStateProvider } from 'app/state/AppStateProvider';

import { render } from 'tests';

import { Products } from './Products';

describe('Products', () => {
  test('Displays page navigation', async () => {
    const { getByText } = render(
      <AppStateProvider>
        <Products />
      </AppStateProvider>
    );
    const naavTitle = getByText("join.tsh.io");

    expect(naavTitle).toBeTruthy()
  });
});
