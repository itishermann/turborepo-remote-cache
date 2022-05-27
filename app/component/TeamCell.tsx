import type { Team } from '@prisma/client';
import * as React from 'react';
import { Link } from 'remix';

type Props = {
  team: Team;
};

export const TeamCell = ({ team }: Props) => {
  return (
    <Link to={`/teams/${team.id}`}>
      {team.name} ({team.slug})
    </Link>
  );
};

export default TeamCell;
