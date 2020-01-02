import React from 'react';
import Player from '../';
import TestRenderer from 'react-test-renderer';

describe('React howler player', () => {
  let data = {
    src: ''
  }
  const testRenderer = TestRenderer.create(
    <Player {...data}/>
  );

  it('is truthy', () => {
    expect(Player).toBeTruthy()
  })
})