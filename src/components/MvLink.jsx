import { MdOndemandVideo } from 'react-icons/md';

import { buildMvLink } from '../utils/build_link';

function MvLink({ platform, id, color }) {
  return (
    <a
      href={buildMvLink(platform, id)}
      target="_blank"
      rel="noreferrer"
      title="MV"
    >
      <MdOndemandVideo
        style={{
          display: 'block',
          fontSize: '20px',
          color,
        }}
      />
    </a>
  );
};

export default MvLink;