import * as React from 'react';
import { SVGProps } from 'react';
const SVGComponent: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={13}
    height={12}
    viewBox="0 0 13 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.34628 12H0V0H2.34628V4.78322L6.79612 0H9.70874L5.17799 4.8L10 12H7.24919L3.52751 6.39441L2.34628 7.63636V12Z"
      fill="black"
    />
    <path
      d="M12.5607 9.43934C12.2794 9.15804 11.8978 9 11.5 9C11.1022 9 10.7206 9.15804 10.4393 9.43934C10.158 9.72064 10 10.1022 10 10.5C10 10.8978 10.158 11.2794 10.4393 11.5607C10.7206 11.842 11.1022 12 11.5 12C11.8978 12 12.2794 11.842 12.5607 11.5607C12.842 11.2794 13 10.8978 13 10.5C13 10.1022 12.842 9.72064 12.5607 9.43934Z"
      fill="black"
    />
    <path
      d="M12.5607 4.93934C12.2794 4.65804 11.8978 4.5 11.5 4.5C11.1022 4.5 10.7206 4.65804 10.4393 4.93934C10.158 5.22064 10 5.60218 10 6C10 6.39782 10.158 6.77936 10.4393 7.06066C10.7206 7.34196 11.1022 7.5 11.5 7.5C11.8978 7.5 12.2794 7.34196 12.5607 7.06066C12.842 6.77936 13 6.39782 13 6C13 5.60218 12.842 5.22064 12.5607 4.93934Z"
      fill="black"
    />
  </svg>
);
export default SVGComponent;