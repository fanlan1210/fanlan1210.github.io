import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--turquoise);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin: 30px 10px;
  }

  .button-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin: 30px 10px;
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">聯絡與更多</h2>

      <h2 className="title">到達底部</h2>

      <p>如果上面的內容不足以滿足你的好奇心，或是有其他想知道的部分，歡迎來信給我！</p>

      <a className="email-link" href={`mailto:${email}`}>
        發&nbsp;信
      </a>

      <p>或是去造訪我的好朋友們的網站：</p>

      <a
        className="button-link"
        href="https://qaz5823091.github.io"
        target="_blank"
        rel="noreferrer noopener">
        羲加加
      </a>
      <a
        className="button-link"
        href="https://web.cc.ncu.edu.tw/~109502533/"
        target="_blank"
        rel="noreferrer noopener">
        布丁
      </a>
      <a className="button-link" href="https://ncchen.ga" target="_blank" rel="noreferrer noopener">
        念誠
      </a>
      <a
        className="button-link"
        href="https://www.yaowei.tw"
        target="_blank"
        rel="noreferrer noopener">
        方塊酥曜維
      </a>

      <p>也歡迎提交 issue 或 PR 新增！</p>
    </StyledContactSection>
  );
};

export default Contact;
