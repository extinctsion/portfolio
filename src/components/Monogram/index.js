import classNames from 'classnames';
import { useId } from 'hooks';
import './index.css';

function Monogram({ highlight, className, ...props }) {
  const id = useId();
  const clipId = `monogram-clip-${id}`;

  return (
    <svg
      aria-hidden
      className={classNames('monogram', className)}
      width="46"
      height="29"
      viewBox="0 0 46 29"
      {...props}
    >
      
      <defs>
        <clipPath id={clipId}>
          <path d="M0.38353 30L5.21307 0.909088H25.4972L24.5313 6.61932H11.2784L10.3125 12.5852H22.5284L21.5625 18.3097H9.3466L8.38069 24.2898H21.6335L20.6676 30H0.38353Z" />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className="monogram__highlight" width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
}

export default Monogram;
