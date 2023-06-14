import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { navDelay } from '@utils';
import { Layout } from '@components';
import { usePrefersReducedMotion } from '@hooks';

const StyledMainContainer = styled.main`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
`;

const StyledLinkButton = styled(Link)`
  ${({ theme }) => theme.mixins.bigButton};
  margin-top: 40px;
  text-align: center;
  width: 20em;
`;

const SocialRedirectPage = ({ location }) => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const content = (
    <StyledMainContainer className="fillHeight">
      <StyledLinkButton
        href="https://peing.net/zh-TW/fanlan"
        target="_blank"
        rel="noreferrer noopener">
        提問箱（匿名留言）
      </StyledLinkButton>
      <StyledLinkButton to="/">回個人網站首頁</StyledLinkButton>
    </StyledMainContainer>
  );

  return (
    <Layout location={location}>
      <Helmet title="Redirection Page" />

      {prefersReducedMotion ? (
        <>{content}</>
      ) : (
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition timeout={500} classNames="fadeup">
              {content}
            </CSSTransition>
          )}
        </TransitionGroup>
      )}
    </Layout>
  );
};

SocialRedirectPage.propTypes = {
  location: PropTypes.object.isRequired,
  prefersReducedMotion: true,
};

export default SocialRedirectPage;
