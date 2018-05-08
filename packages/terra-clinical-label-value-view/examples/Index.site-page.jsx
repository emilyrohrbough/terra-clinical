/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../docs/README.md';
import { name } from '../package.json';

// Component Source
import LabelValueViewSrc from '!raw-loader!../src/LabelValueView';

// Example Files
import LabelValueViewText from './index-examples/LabelValueViewText';
import LabelValueViewTextSrc from '!raw-loader!./index-examples/LabelValueViewText';
import LabelValueViewNode from './index-examples/LabelValueViewNode';
import LabelValueViewNodeSrc from '!raw-loader!./index-examples/LabelValueViewNode';
import LabelValueViewNodeCustom from './index-examples/LabelValueViewNodeCustom';
import LabelValueViewNodeCustomSrc from '!raw-loader!./index-examples/LabelValueViewNodeCustom';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-clinical/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Label Value View with a Text Input',
        example: <LabelValueViewText />,
        source: LabelValueViewTextSrc,
      },
      {
        title: 'Label Value View with a Node Input',
        example: <LabelValueViewNode />,
        source: LabelValueViewNodeSrc,
      },
      {
        title: 'Label Value View with a Node Input (Custom)',
        example: <LabelValueViewNodeCustom />,
        source: LabelValueViewNodeCustomSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Label Value View',
        componentSrc: LabelValueViewSrc,
      },
    ]}
  />
);

export default DocPage;
