import les from './index.less';
import {
  DayNote,
} from '@com'

export default function() {
  return (
    <div>
      <div className={les.lab}>
        <DayNote />
      </div>
    </div>
  );
}
