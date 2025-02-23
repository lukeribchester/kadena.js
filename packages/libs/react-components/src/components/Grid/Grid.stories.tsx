import { spacingVariant } from './styles';
import { Grid } from './';

import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta<typeof Grid.Container> = {
  title: 'Layout/Grid',
  component: Grid.Container,
  argTypes: {
    spacing: {
      options: Object.keys(spacingVariant) as (keyof typeof spacingVariant)[],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid.Container>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/react/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
  name: 'Grid',
  args: {
    spacing: 'xl',
  },
  render: ({ spacing }) => (
    <>
      <Grid.Container spacing={spacing}>
        <Grid.Item bg="$neutral3">1</Grid.Item>
        <Grid.Item bg="$neutral3">2</Grid.Item>
        <Grid.Item bg="$neutral3">3</Grid.Item>
        <Grid.Item bg="$neutral3">4</Grid.Item>
        <Grid.Item bg="$neutral3">5</Grid.Item>
        <Grid.Item bg="$neutral3">6</Grid.Item>
        <Grid.Item bg="$neutral3">7</Grid.Item>
        <Grid.Item bg="$neutral3">8</Grid.Item>
        <Grid.Item bg="$neutral3">9</Grid.Item>
        <Grid.Item bg="$neutral3">10</Grid.Item>
        <Grid.Item bg="$neutral3">11</Grid.Item>
        <Grid.Item bg="$neutral3">12</Grid.Item>
      </Grid.Container>

      <Grid.Container spacing={spacing}>
        <Grid.Item colStart={4} colEnd={7} bg="$primarySurface">
          1
        </Grid.Item>
        <Grid.Item bg="$primarySurface">2</Grid.Item>
        <Grid.Item bg="$primarySurface">3</Grid.Item>
        <Grid.Item bg="$primarySurface">4</Grid.Item>
        <Grid.Item bg="$primarySurface">5</Grid.Item>
        <Grid.Item bg="$primarySurface">6</Grid.Item>
        <Grid.Item bg="$primarySurface">7</Grid.Item>
      </Grid.Container>
    </>
  ),
};

export const GridAreas: Story = {
  name: 'GridTemplate areas',
  args: {
    spacing: 'md',
    templateRows: '50px 1fr 30px',
    templateColumns: `150px 1fr`,
    templateAreas: `"header header"
                  "nav main"
                  "nav footer"`,
  },
  render: ({ spacing, templateColumns, templateRows, templateAreas }) => (
    <Grid.Container
      spacing={spacing}
      templateAreas={templateAreas}
      templateRows={templateRows}
      templateColumns={templateColumns}
    >
      <Grid.Item area="header" bg="$primarySurface">
        0
      </Grid.Item>
      <Grid.Item area="nav" bg="$primarySurface">
        1
      </Grid.Item>
      <Grid.Item area="main" bg="$primarySurface">
        2
      </Grid.Item>
      <Grid.Item area="footer" bg="$primarySurface">
        3
      </Grid.Item>
    </Grid.Container>
  ),
};
