import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGitAlt,
  faReact,
  faJsSquare,
  faPython,
  faNode,
  faJava
} from '@fortawesome/free-brands-svg-icons';
import './styles/CubeSpinner.scss';

const CubeSpinner = () => {
  return (
    <div className="stage-cube-cont">
      <div className="cubespinner">
        <div className="face1">
          <FontAwesomeIcon icon={faJava} color="#DD0031" />
        </div>
        <div className="face2">
          <FontAwesomeIcon icon={faPython} color="#042666" />
        </div>
        <div className="face3">
          <FontAwesomeIcon icon={faNode} color="#4ed04c" />
        </div>
        <div className="face4">
          <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
        </div>
        <div className="face5">
          <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
        </div>
        <div className="face6">
          <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
        </div>
      </div>
    </div>
  );
};

export default CubeSpinner;
