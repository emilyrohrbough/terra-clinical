/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../docs/README.md';
import { name } from '../package.json';

// Component Source
import HeaderSrc from '!raw-loader!../src/Header';

// Example Files
import TitleHeader from './index-examples/TitleHeader';
import TitleHeaderSrc from '!raw-loader!./index-examples/TitleHeader';
import ContentHeader from './index-examples/ContentHeader';
import ContentHeaderSrc from '!raw-loader!./index-examples/ContentHeader';
import HeaderLongText from './index-examples/HeaderLongText';
import HeaderLongTextSrc from '!raw-loader!./index-examples/HeaderLongText';
import HeaderLongTextWithContent from './index-examples/HeaderLongTextWithContent';
import HeaderLongTextWithContentSrc from '!raw-loader!./index-examples/HeaderLongTextWithContent';
import Subheader from './index-examples/Subheader';
import SubheaderSrc from '!raw-loader!./index-examples/Subheader';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-clinical/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Header With Title Only',
        example: <TitleHeader />,
        source: TitleHeaderSrc,
      },
      {
        title: 'Header With Content',
        example: <ContentHeader />,
        source: ContentHeaderSrc,
      },
      {
        title: 'Header With Long Title',
        example: <HeaderLongText />,
        source: HeaderLongTextSrc,
      },
      {
        title: 'Header With Long Title, Children, And Content',
        example: <HeaderLongTextWithContent />,
        source: HeaderLongTextWithContentSrc,
      },
      {
        title: 'Subheader with content',
        example: <Subheader />,
        source: SubheaderSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Header',
        componentSrc: HeaderSrc,
      },
    ]}
  />
);

export default DocPage;
