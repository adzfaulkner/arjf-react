import React from 'react';
import Breadcrumbs from '../../../../src/app/React/Layout/Breadcrumbs';
import renderer from 'react-test-renderer';
import { mount, render, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';

test('Test rendering breadcrumbs using empty items prop', () => {
  const wrapper = render(
    <MemoryRouter initialEntries={[ '/' ]}>
      <Breadcrumbs items={[]}>Facebook</Breadcrumbs>
    </MemoryRouter>
  );

  expect(wrapper.find('li').length).toBe(1);
  expect(wrapper.find('a').length).toBe(0);
});