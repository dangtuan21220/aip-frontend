import * as React from 'react';
import styled from 'styled-components/macro';
// import { P } from './P';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import NOT_FOUND from '../../assets/images/imagesGuide/404.png';
import { Button } from 'antd';

export function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>404 {t('page-not-found')}</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <Wrapper>
        <img src={NOT_FOUND} alt="404" />
        <p>Oops... Somethings went wrong!</p>
        <Button size="large">Back to home</Button>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
`;
