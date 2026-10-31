/** Dot colour for a status. The visible label always carries the meaning. */
export type StatusKind = 'done' | 'progress' | 'planned';

export interface Status {
  /** Exact wording shown on the site. */
  label: string;
  kind: StatusKind;
}
