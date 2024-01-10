/**
 * Load balancer function that returns a promise that resolves or rejects
 * based on the first promise that settles (either resolves or rejects).
 *
 * @param {Promise} chinaDownload - The promise representing the download from China.
 * @param {Promise} USDownload - The promise representing the download from the US.
 * @returns {Promise} - A promise that resolves or rejects based on the first promise that settles.
 */
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
