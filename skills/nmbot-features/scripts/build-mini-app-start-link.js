/**
 * This module provides a function to generate a mini app start link for nmBot.
 * The mini app start link allows users to start a mini app within nmBot by clicking the link.
 * The link is generated based on the bot's username and the specified path for the mini app.
 *
 * @param {string} username - The username of the bot (without the '@' symbol).
 * @param {string} [path='/'] - The path for the mini app, which will be encoded in base64 format. Default is '/'.
 * @returns {string} The generated mini app start link.
 */
export function miniAppStartLink(username, path = '/') {
  return `https://t.me/${username}/panel?startapp=${Buffer.from(path).toString('base64')}`;
}
