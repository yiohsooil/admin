import React from 'react';
import { Styled } from '../styles/oss';
import OssItem from '../components/oss/OssItem';

const Oss = () => {
  return (
    <Styled.Container>
      <Styled.Header>OSS Notice | AnyDaNA Plus</Styled.Header>
      <p>This application is Copyright@AnyDaNA Plus. All rights reserved.</p>
      <p>
        The following sets forth attribution notices for third party software
        that may be contained in the application.
      </p>
      <Styled.ListWrapper>
        <OssItem
          label="Retrofit"
          link="https://github.com/square/retrofit"
          descriptions={['Copyright 2013 Square, Inc.', 'Apache License 2.0']}
        />
        <OssItem
          label="Gson"
          link="https://github.com/google/gson"
          descriptions={['Copyright 2008 Google Inc.', 'Apache License 2.0']}
        />
        <OssItem
          label="RxJava"
          link="https://github.com/ReactiveX/RxJava"
          descriptions={[
            'Copyright (c) 2016-present, RxJava Contributors',
            'Apache License 2.0',
          ]}
        />
        <OssItem
          label="EventBus"
          link="https://github.com/greenrobot/EventBus"
          subLink="https://greenrobot.org"
          descriptions={[
            'Copyright (C) 2012-2021 Markus Junginger, greenrobot',
            'Apache License 2.0',
          ]}
        />
        <OssItem
          label="joda-time-android"
          link="https://github.com/dlew/joda-time-android?tab=Apache-2.0-1-ov-file"
          descriptions={['Apache License 2.0']}
        />
        <OssItem
          label="timber"
          link="https://github.com/JakeWharton/timber"
          descriptions={['Copyright 2013 Jake Wharton.', 'Apache License 2.0']}
        />
        <OssItem
          label="DynamicGrid"
          link="https://github.com/askerov/DynamicGrid"
          descriptions={['Apache License 2.0']}
        />
        <OssItem
          label="Datetimepicker"
          link="https://android.googlesource.com/platform/frameworks/opt/datetimepicker"
          descriptions={['Apache License 2.0']}
        />
        <OssItem
          label="Volley"
          link="https://google.github.io/volley"
          descriptions={['Apache License 2.0']}
        />
        <OssItem
          label="Apache POI Common"
          link="https://github.com/apache/poi"
          descriptions={['Apache License 2.0']}
        />
        <OssItem
          label="ExpandableLayout"
          link="https://github.com/skydoves/ExpandableLayout"
          descriptions={['Apache License 2.0']}
        />
        <OssItem
          label="Apache Commons"
          link="https://commons.apache.org/"
          descriptions={['Apache License 2.0']}
        />
      </Styled.ListWrapper>
    </Styled.Container>
  );
};

export default Oss;
