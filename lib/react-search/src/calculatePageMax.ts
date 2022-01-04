/**
 * Calculate the 0-based pagination page given a number of objects per page and the total number of objects available.
 */
export const calculatePageMax = (kwds: {
  objectsPerPage: number;
  totalObjects: number;
}) => Math.ceil(kwds.totalObjects / kwds.objectsPerPage) - 1;
