import styled from "styled-components";

export const BrandingButton = styled.button`
  transition: all 200ms ease-in-out;
  background: #582a6a;
  border-radius: 4px;
  padding: 18px 30px;
  line-height: 27px;
  font-size: 18px;
  color: white;
  border-width: 1px;

  &:hover {
    cursor: pointer;
    color: #582a6a !important;
    background-color: #f1f4f3 !important;
    border-color: #582a6a !important;
  }
`;

export const InvertedBrandingButton = styled(BrandingButton)`
  background-color: white;
  border-color: #582a6a;
  color: #582a6a;

  &:hover{
    cursor: pointer;
    color: #f1f4f3 !important;
    background-color: #582a6a !important;
    opacity: 0.8;
  }

`;