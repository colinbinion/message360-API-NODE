/**
 * message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const _request = require('../Http/Client/RequestClient');
const _configuration = require('../configuration');
const _apiHelper = require('../APIHelper');
const _baseController = require('./BaseController');

class LetterController {
    /**
     * Retrieve a letter object by its LetterSid.
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['lettersid'] The unique identifier for a letter object.
     * @param {string} input['responseType'] Response Type either json or xml
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static viewLetter(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.lettersid === null || input.lettersid === undefined) {
            const _err = { errorMessage: 'The property `lettersid` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/letter/viewletter.{ResponseType}'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            ResponseType: input.responseType,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'user-agent': 'message360-api',
        };

        // prepare form data
        const _form = {
            lettersid: input.lettersid,
        };

        // remove null values
        _apiHelper.cleanObject(_form);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _callback(null, _response.body, _context);
                    _fulfill(_response.body);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }

    /**
     * Create, print, and mail a letter to an address. The letter file must be supplied as a PDF
     * or an HTML string.
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['to'] The AddressId or an object structured when creating an address
     * by addresses/Create.
     * @param {string} input['from'] The AddressId or an object structured when creating an address
     * by addresses/Create.
     * @param {string} input['attachbyid'] Set an existing letter by attaching its LetterId.
     * @param {string} input['file'] File can be a 8.5"x11" PDF uploaded file or URL that links to
     * a file.
     * @param {string} input['color'] Specify if letter should be printed in color.
     * @param {string} input['responseType'] Response Type either json or xml
     * @param {string} input['description'] (optional) A description for the letter.
     * @param {string} input['extraservice'] (optional) Add an extra service to your letter.
     * Options are "certified" or "registered". Certified
     * provides tracking and delivery confirmation for
     * domestic destinations and is an additional $5.00.
     * Registered provides tracking and confirmation for
     * international addresses and is an additional $16.50.
     * @param {string} input['doublesided'] (optional) Specify if letter should be printed on both
     * sides.
     * @param {string} input['template'] (optional) Boolean that defaults to true. When set to
     * false, this specifies that your letter does not follow the
     * m360 address template. In this case, a blank address page
     * will be inserted at the beginning of your file and you
     * will be charged for the extra page.
     * @param {string} input['htmldata'] (optional) A string value that contains HTML markup.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createLetter(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.to === null || input.to === undefined) {
            const _err = { errorMessage: 'The property `to` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.from === null || input.from === undefined) {
            const _err = { errorMessage: 'The property `from` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.attachbyid === null || input.attachbyid === undefined) {
            const _err = { errorMessage: 'The property `attachbyid` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.file === null || input.file === undefined) {
            const _err = { errorMessage: 'The property `file` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.color === null || input.color === undefined) {
            const _err = { errorMessage: 'The property `color` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/letter/create.{ResponseType}'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            ResponseType: input.responseType,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'user-agent': 'message360-api',
        };

        // prepare form data
        const _form = {
            to: input.to,
            from: input.from,
            attachbyid: input.attachbyid,
            file: input.file,
            color: input.color,
            description: input.description,
            extraservice: input.extraservice,
            doublesided: input.doublesided,
            template: input.template,
            htmldata: input.htmldata,
        };

        // remove null values
        _apiHelper.cleanObject(_form);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _callback(null, _response.body, _context);
                    _fulfill(_response.body);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }

    /**
     * Retrieve a list of letter objects. The letter objects are sorted by creation date, with
     * the most recently created letters appearing first.
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['responseType'] Response Type either json or xml
     * @param {int} input['page'] (optional) The page count to retrieve from the total results in
     * the collection. Page indexing starts at 1.
     * @param {int} input['pagesize'] (optional) The count of objects to return per page.
     * @param {string} input['lettersid'] (optional) The unique identifier for a letter object.
     * @param {string} input['dateCreated'] (optional) The date the letter was created.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static listLetters(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/letter/listsletter.{ResponseType}'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            ResponseType: input.responseType,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'user-agent': 'message360-api',
        };

        // prepare form data
        const _form = {
            page: (input.page !== null) ? input.page : 1,
            pagesize: (input.pagesize !== null) ? input.pagesize : 10,
            lettersid: input.lettersid,
            dateCreated: input.dateCreated,
        };

        // remove null values
        _apiHelper.cleanObject(_form);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _callback(null, _response.body, _context);
                    _fulfill(_response.body);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }

    /**
     * Remove a letter object by its LetterId.
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['lettersid'] The unique identifier for a letter object.
     * @param {string} input['responseType'] Response Type either json or xml
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static deleteLetter(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.lettersid === null || input.lettersid === undefined) {
            const _err = { errorMessage: 'The property `lettersid` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/letter/delete.{ResponseType}'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            ResponseType: input.responseType,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'user-agent': 'message360-api',
        };

        // prepare form data
        const _form = {
            lettersid: input.lettersid,
        };

        // remove null values
        _apiHelper.cleanObject(_form);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _callback(null, _response.body, _context);
                    _fulfill(_response.body);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }

}

module.exports = LetterController;
