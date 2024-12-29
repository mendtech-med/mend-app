import { FC } from 'react';
import { spinnerBackdrop, spinnerMessage, spinnerStyle } from './spinner.style';
import { Text } from '@radix-ui/themes';

export type SpinnerType = 'fullScreen' | 'content' | 'inline';

interface SpinnerProps {
  type: SpinnerType;
  message?: string;
}

export const Spinner: FC<SpinnerProps> = ({ type, message }) => {
  return (
    <>
      {type !== 'inline' && <div css={spinnerBackdrop}></div>}
      <div css={spinnerStyle(type)}></div>
      {type !== 'inline' && message && (
        <Text as="span" css={spinnerMessage}>
          {message}
        </Text>
      )}
    </>
  );
};
