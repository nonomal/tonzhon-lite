import { List } from 'antd';

import SongItem from './SongItem';

function SongList({ songs, showPlatform }) {
  return (
    <List
      itemLayout="horizontal"
      dataSource={songs}
      renderItem={song => (
        <SongItem
          song={song}
          showPlatform={showPlatform}
        />
      )}
    />
  );
}

export default SongList;