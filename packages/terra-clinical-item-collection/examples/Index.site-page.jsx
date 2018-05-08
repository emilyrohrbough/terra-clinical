/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../docs/README.md';
import { name } from '../package.json';

// Component Source
import ItemCollectionSrc from '!raw-loader!../src/ItemCollection';
import ItemSrc from '!raw-loader!../src/Item';

// Example Files
import ItemCollectionExample from './index-examples/ItemCollectionExample';
import ItemCollectionExampleSrc from '!raw-loader!./index-examples/ItemCollectionExample';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-clinical/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Item Collection Item',
        description: 'This component handles the rendering of a list item or table row for the ItemCollection. By default, this renders an ListItem with an ItemView as the content. Else it will render a TableRow with the element layout of startAccessory, displays, comment, and endAccessory. This component does not handle missing element logic, but provides a clean way to represent an item as a child within the item collection. \n\n Additionally, this component will export the ItemView.Display and ItemView.Comment components as Item.Display & Item.Comment.',
      },
      {
        title: 'Divided Detail View',
        example: <ItemCollectionExample />,
        source: ItemCollectionExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Item Collection',
        componentSrc: ItemCollectionSrc,
      },
      {
        componentName: 'Item',
        componentSrc: ItemSrc,
      },
    ]}
  />
);

export default DocPage;
