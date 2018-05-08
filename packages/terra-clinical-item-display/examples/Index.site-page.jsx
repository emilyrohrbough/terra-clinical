/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../docs/README.md';
import { name } from '../package.json';

// Component Source
import ItemDisplaySrc from '!raw-loader!../src/ItemDisplay.jsx';
import CommentSrc from '!raw-loader!../src/ItemComment.jsx';

// Example Files
import TextStyles from './index-examples/TextStyles';
import TextStylesSrc from '!raw-loader!./index-examples/TextStyles';
import TextStylesDisabled from './index-examples/TextStylesDisabled';
import TextStylesDisabledSrc from '!raw-loader!./index-examples/TextStylesDisabled';
import Icon from './index-examples/Icon';
import IconSrc from '!raw-loader!./index-examples/Icon';
import IconText from './index-examples/IconText';
import IconTextSrc from '!raw-loader!./index-examples/IconText';
import DefaultComment from './index-examples/DefaultComment';
import DefaultCommentSrc from '!raw-loader!./index-examples/DefaultComment';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-clinical/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Item Display: Text styles',
        example: <TextStyles />,
        source: TextStylesSrc,
      },
      {
        title: 'Disabled Item Display: Text styles',
        example: <TextStylesDisabled />,
        source: TextStylesDisabledSrc,
      },
      {
        title: 'Item Display: Icon',
        example: <Icon />,
        source: IconSrc,
      },
      {
        title: 'Item Display: Icon & Text',
        example: <IconText />,
        source: IconTextSrc,
      },
      {
        title: 'Comment Item Display',
        example: <DefaultComment />,
        source: DefaultCommentSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Item Display',
        componentSrc: ItemDisplaySrc,
      },
      {
        componentName: 'Item Comment',
        componentSrc: CommentSrc,
      },
    ]}
  />
);

export default DocPage;
