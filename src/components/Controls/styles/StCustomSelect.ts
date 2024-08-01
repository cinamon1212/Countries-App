import { SelectProps } from 'antd';
import Select, { ControlProps, CSSObjectWithLabel } from 'react-select';
import styled from 'styled-components';

export const StCustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) =>
      ({
        ...provided,
        backgroundColor: 'var(--colors-ui-base)',
        color: 'var(--colors-text)',
        borderRadius: 'var(--radii)',
        padding: '0.25rem',
        border: 'none',
        boxShadow: 'var(--shadow)',
        height: '50px',
      } as CSSObjectWithLabel),
    option: (provided, state) =>
      ({
        ...provided,
        cursor: 'pointer',
        color: 'var(--colors-text)',
        backgroundColor: state.isSelected
          ? 'var(--colors-bg)'
          : 'var(--colors-ui-base)',
      } as CSSObjectWithLabel),
  },
})`
  width: 200px;
  font-family: var(--family);
  border: none;
  & > * {
    box-shadow: var(--shadow);
  }
  & * {
    color: var(--colors-text) !important;
  }
  & > div[id] {
    background-color: var(--colors-ui-base);
  }
`;
