import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';


// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx= "" }) {

  // OR
  const logo = ""

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
