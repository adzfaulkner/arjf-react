import React from 'react';
import Handler from '../../../../../../src/app/React/Contact/components/fields/Handler';
import renderer from 'react-test-renderer';
import sinon from 'sinon';

test('Default should be rendered if prop type input is provided', () => {
  const component = renderer.create(<Handler type={`input`} inputKey={`test`} input={{}}/>);
  let tree = component.toJSON();
  expect(tree.type).toEqual('input');
});

test('Default should be rendered if prop type invalid is provided', () => {
  const component = renderer.create(<Handler type={`unknown`} inputKey={`test`} input={{}}/>);
  let tree = component.toJSON();
  expect(tree.type).toEqual('input');
});

test('Textarea should be rendered if prop type textarea is provided', () => {
  const component = renderer.create(<Handler type={`textarea`} inputKey={`test`} input={{}}/>);
  let tree = component.toJSON();
  expect(tree.type).toEqual('textarea');
});

test('Textarea should be rendered if prop type select is provided', () => {
  const opts = [
    { value: '1', label: 'A' },
    { value: '2', label: 'B' },
  ];

  const placeholder = 'Please Select'

  const component = renderer.create(<Handler
    type={`select`}
    inputKey={`test`}
    input={{}}
    options={opts}
    placeHolder={placeholder}
  />);
  let tree = component.toJSON();
  expect(tree.type).toEqual('select');
  expect(tree.children).toHaveLength(3);
});