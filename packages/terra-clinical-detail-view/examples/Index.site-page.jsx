/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../docs/README.md';
import { name } from '../package.json';

// Component Source
import DetailViewSrc from '!raw-loader!../src/DetailView.jsx';
import DetailListSrc from '!raw-loader!../src/DetailList.jsx';
import DetailListItemSrc from '!raw-loader!../src/DetailListItem.jsx';

// Example files
import DetailViewDivided from './index-examples/DetailViewDivided';
import DetailViewDividedSrc from '!raw-loader!./index-examples/DetailViewDivided';
import DetailViewNoDivider from './index-examples/DetailViewNoDivider';
import DetailViewNoDividerSrc from '!raw-loader!./index-examples/DetailViewNoDivider';
import DetailViewDividedSmallerTitles from './index-examples/DetailViewDividedSmallerTitles';
import DetailViewDividedSmallerTitlesSrc from '!raw-loader!./index-examples/DetailViewDividedSmallerTitles';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-clinical/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Divided Detail View',
        example: <DetailViewDivided />,
        source: DetailViewDividedSrc,
      },
      {
        title: 'Non-Divided Detail View',
        example: <DetailViewNoDivider />,
        source: DetailViewNoDividerSrc,
      },
      {
        title: 'Divided Detail View with Smaller Titles',
        example: <DetailViewDividedSmallerTitles />,
        source: DetailViewDividedSmallerTitlesSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Detail View',
        componentSrc: DetailViewSrc,
      },
      {
        componentName: 'Detail List',
        componentSrc: DetailListSrc,
      },
      {
        componentName: 'Detail List Item',
        componentSrc: DetailListItemSrc,
      },
    ]}
  />
);

export default DocPage;
