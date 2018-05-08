/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../docs/README.md';
import { name } from '../package.json';

// Component Source
import ItemViewSrc from '!raw-loader!../src/ItemView.jsx';

// Example Files
import ItemViewStandard from './index-examples/ItemViewStandard';
import ItemViewStandardSrc from '!raw-loader!./index-examples/ItemViewStandard';
import ItemViewTwoColumn from './index-examples/ItemViewTwoColumn';
import ItemViewTwoColumnSrc from '!raw-loader!./index-examples/ItemViewTwoColumn';
import ItemViewTwoColumnStart from './index-examples/ItemViewTwoColumnStart';
import ItemViewTwoColumnStartSrc from '!raw-loader!./index-examples/ItemViewTwoColumnStart';
import ItemViewComment from './index-examples/ItemViewComment';
import ItemViewCommentSrc from '!raw-loader!./index-examples/ItemViewComment';
import ItemViewAll from './index-examples/ItemViewAll';
import ItemViewAllSrc from '!raw-loader!./index-examples/ItemViewAll';
import ItemViewAllTopAligned from './index-examples/ItemViewAllTopAligned';
import ItemViewAllTopAlignedSrc from '!raw-loader!./index-examples/ItemViewAllTopAligned';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-clinical/tree/master/packages/${name}`}
    examples={[
      {
        title: 'ItemView - Default',
        example: <ItemViewStandard />,
        source: ItemViewStandardSrc,
      },
      {
        title: 'ItemView - Two Column Layout',
        example: <ItemViewTwoColumn />,
        source: ItemViewTwoColumnSrc,
      },
      {
        title: 'ItemView - Start Emphasis',
        example: <ItemViewTwoColumnStart />,
        source: ItemViewTwoColumnStartSrc,
      },
      {
        title: 'ItemView - Comment',
        example: <ItemViewComment />,
        source: ItemViewCommentSrc,
      },
      {
        title: 'ItemView - All Elements',
        example: <ItemViewAll />,
        source: ItemViewAllSrc,
      },
      {
        title: 'ItemView - All Elements Top Aligned',
        example: <ItemViewAllTopAligned />,
        source: ItemViewAllTopAlignedSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Item View',
        componentSrc: ItemViewSrc,
      },
    ]}
  />
);

export default DocPage;
