import { css } from '@emotion/react';
import { colors } from '../../theme';

export const blogSectionStyle = css`
  background-color: ${colors.white};
`;

export const blogTitleStyle = css`
  flex: 1;

  input {
    font-weight: 600;
  }
`;

export const blogTitleHeaderStyle = css`
  padding: 0px 0px 20px;
  display: flex;
  justify-content: space-between;
`;


export const editorAreaStyle = css`
  background-color: ${colors.white};
  width: 100%;
  height: calc(100vh - 140px);
  padding: 30px;

  &.new-content {
    overflow-y: auto;
  }

  .ProseMirror {
    padding: 10px;
    height: calc(100vh - 230px);
    overflow-y: auto;
    outline: none;
  }

  flex: 1 1 auto;
  outline: none;
  -webkit-overflow-scrolling: touch !important;
  padding: 5px 1rem 1.25rem;
  margin-top: 0;
  background-color: #fff;
  border: 0 solid #0d0d0d;
  border-radius: .75rem;
  color: #0d0d0d;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 0;
  flex-grow: 1;
  padding: 0 1rem 50px;

  h1 {
    font-size: 2em; /* Typically 32px */
    font-weight: bold;
    margin: 0.67em 0;
  }

  h2 {
    font-size: 1.5em; /* Typically 24px */
    font-weight: bold;
    margin: 0.75em 0;
  }

  h3 {
    font-size: 1.17em; /* Typically 18.72px */
    font-weight: bold;
    margin: 0.83em 0;
  }

  h4 {
    font-size: 1em; /* Typically 16px */
    font-weight: bold;
    margin: 1.12em 0;
  }

  h5 {
    font-size: 0.83em; /* Typically 13.28px */
    font-weight: bold;
    margin: 1.5em 0;
  }

  h6 {
    font-size: 0.75em; /* Typically 12px */
    font-weight: bold;
    margin: 1.67em 0;
  }

`;

export const saveStatusStyle = css`
  width: 150px;
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const editorToolbarRootStyle = css`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid ${colors.border.default};
  gap: 5px;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #ececec;
  border-radius: .25rem;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  box-shadow: 0 2px 5px rgba(0, 0, 0, .041);
  padding: .5rem .5rem 0;
  margin-top: 10px;
  height: 4rem;

  .count {
    color: ${colors.text.lowContrast};
    margin-left: auto;

    .characters-count {
      display: none;
    }

    &:hover {
      .characters-count {
        display: block;
      }

      .words-count {
        display: none;
      }
    }
  }
`;

export const editorToggleGroupStyle = css`
  display: flex;
  gap: 1px;
`;

export const separatorStyle = css`
  width: 1px;
  height: 16px;
  background-color: ${colors.border.hover};
`;

export const toolbarToggleItemStyle = (isActive: boolean = false) => css`
  display: flex;
  align-items: center;
  background-color: unset;
  border: none;
  border-radius: 5px;
  border: 2px solid transparent;
  padding: 5px;

  &:hover {
    background-color: ${colors.interactive.primary};
    color: ${colors.text.lowContrast};
  }

  &:focus {
    border: 2px solid ${colors.border.focused};
  }

  ${isActive &&
  `
    background-color: ${colors.interactive.active};
    color: ${colors.text.lowContrast};
  `}
`;
