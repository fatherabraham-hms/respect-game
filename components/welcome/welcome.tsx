'use client';
import { SessionList } from '@/components/sessions-list/session-list';

export function Welcome() {

  return (
    <div>
      <h1>Welcome to Fractalgram!</h1>
      <h2>
        This is a voting application to arrive at consensus on rankings 6 hightest - 1 lowest.
      </h2>
      <p>Respect tokens are distributed based on the consensus rankings.</p>
      <p>To join a session, click on the link below or ask your group leader for the url.</p>
      <br />
      <br />
      <br />
      <SessionList/>
    </div>
  );
}
