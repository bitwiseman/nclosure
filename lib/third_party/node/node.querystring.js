/**
 * @name node.querystring
 * @namespace
 * This module provides utilities for dealing with query strings.
 * It provides the following methods:
 */

goog.provide("node.querystring");

/**
 * @param {string} s
 * @param {string} decodeSpaces
 */
node.querystring.unescapeBuffer = function(s, decodeSpaces) {
  return node.querystring.core_.unescapeBuffer.apply(node.querystring.core_, arguments);
};

/**
 * The unescape function used by <code>querystring.parse</code>,
 * provided so that it could be overridden if necessary.
 * @param {string} s
 * @param {string} decodeSpaces
 */
node.querystring.unescape = function(s, decodeSpaces) {
  return node.querystring.core_.unescape.apply(node.querystring.core_, arguments);
};

/**
 * The escape function used by <code>querystring.stringify</code>,
 * provided so that it could be overridden if necessary.
 * @param {string} str
 */
node.querystring.escape = function(str) {
  return node.querystring.core_.escape.apply(node.querystring.core_, arguments);
};

/**
 * @param {Object} obj
 * @param {string} sep
 * @param {string} eq
 * @param {string} name
 */
node.querystring.encode = function(obj, sep, eq, name) {
  return node.querystring.core_.encode.apply(node.querystring.core_, arguments);
};

/**
 * Serialize an object to a query string.
 * Optionally override the default separator and assignment characters.
 *
 * Example:
 * <pre>
 *     querystring.stringify({foo: 'bar'})
 *     &#47;&#47; returns
 *     'foo=bar'
 *
 *     querystring.stringify({foo: 'bar', baz: 'bob'}, ';', ':')
 *     &#47;&#47; returns
 *     'foo:bar;baz:bob'
 * </pre>
 * @param {Object} obj
 * @param {string} sep
 * @param {string} eq
 * @param {string} name
 */
node.querystring.stringify = function(obj, sep, eq, name) {
  return node.querystring.core_.stringify.apply(node.querystring.core_, arguments);
};

/**
 * @param {string} qs
 * @param {string} sep
 * @param {string} eq
 */
node.querystring.decode = function(qs, sep, eq) {
  return node.querystring.core_.decode.apply(node.querystring.core_, arguments);
};

/**
 * Deserialize a query string to an object.
 * Optionally override the default separator and assignment characters.
 *
 * Example:
 * <pre>
 *     querystring.parse('a=b&b=c')
 *     &#47;&#47; returns
 *     { a: 'b', b: 'c' }
 * </pre>
 * @param {string} qs
 * @param {string} sep
 * @param {string} eq
 */
node.querystring.parse = function(qs, sep, eq) {
  return node.querystring.core_.parse.apply(node.querystring.core_, arguments);
};


/**
 * @private
 * @type {*}
 */
node.querystring.core_ = require("querystring");