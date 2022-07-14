import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
// import { email } from '@config';

const StyledHeaderSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--turquoise);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 1;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .header-button-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
    letter-spacing: 0.5em;
  }
`;

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>安安你好，我是</h1>;
  const two = <h2 className="big-heading">繁嵐，</h2>;
  const three = <h3 className="big-heading">一個目前就讀資工系的大學生。</h3>;
  const four = (
    <>
      <p>
        默默關注、討論社會議題，期望資訊科技能夠用以輔助社會。同時也在各種資訊社群打滾，歡迎不期而遇（？）
      </p>
    </>
  );
  const five = (
    <a className="header-button-link" href="#about">
      了解更多
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeaderSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeaderSection>
  );
};

export default Header;
