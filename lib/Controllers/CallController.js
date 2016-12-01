/**
 * message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io ) on 12/01/2016
 */

var _request = require('../Http/Client/RequestClient'),
    _configuration = require('../configuration'),
    _APIHelper = require('../APIHelper');

var CallController = {

    /**
     * View Call Response
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} callsid    Required parameter: Call Sid id for particular Call
     *     {string|null} responseType    Optional parameter: Response type format xml or json
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createViewCall: function (input, callback) {
        //Assign default values
        input = input || {};

        //validating required parameters
        if (input.callsid == null || input.callsid == undefined){
            return callback({errorMessage: "The property 'callsid' in the input object cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/calls/viewcalls.{ResponseType}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "ResponseType": (null != input.responseType)? input.responseType: "json"
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "user-agent": "message360-api"
        };

        //prepare form data
        var _form = {
            "callsid": input.callsid
        };

        //Remove null values
        _APIHelper.cleanObject(_form);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            form : _form,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse: _response.body}, null, _context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Group Call
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} fromCountryCode    Required parameter: Example: 1
     *     {string} from    Required parameter: Example: 
     *     {string} toCountryCode    Required parameter: Example: 1
     *     {string} to    Required parameter: Example: 
     *     {string} url    Required parameter: Example: 
     *     {HttpAction|null} method    Optional parameter: Example: 
     *     {string|null} statusCallBackUrl    Optional parameter: Example: 
     *     {HttpAction|null} statusCallBackMethod    Optional parameter: Example: 
     *     {string|null} fallBackUrl    Optional parameter: Example: 
     *     {HttpAction|null} fallBackMethod    Optional parameter: Example: 
     *     {string|null} heartBeatUrl    Optional parameter: Example: 
     *     {HttpAction|null} heartBeatMethod    Optional parameter: Example: 
     *     {int|null} timeout    Optional parameter: Example: 
     *     {string|null} playDtmf    Optional parameter: Example: 
     *     {string|null} hideCallerId    Optional parameter: Example: 
     *     {bool|null} record    Optional parameter: Example: 
     *     {string|null} recordCallBackUrl    Optional parameter: Example: 
     *     {HttpAction|null} recordCallBackMethod    Optional parameter: Example: 
     *     {bool|null} transcribe    Optional parameter: Example: 
     *     {string|null} transcribeCallBackUrl    Optional parameter: Example: 
     *     {string|null} responseType    Optional parameter: Example: json
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createGroupCall: function (input, callback) {
        //Assign default values
        input = input || {};

        //validating required parameters
        if (input.from == null || input.from == undefined){
            return callback({errorMessage: "The property 'from' in the input object cannot be null.", errorCode: -1}, null, null);
        } else if (input.to == null || input.to == undefined){
            return callback({errorMessage: "The property 'to' in the input object cannot be null.", errorCode: -1}, null, null);
        } else if (input.url == null || input.url == undefined){
            return callback({errorMessage: "The property 'url' in the input object cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/calls/groupcall.{ResponseType}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "ResponseType": (null != input.responseType)? input.responseType: "json"
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "user-agent": "message360-api"
        };

        //prepare form data
        var _form = {
            "FromCountryCode": input.fromCountryCode,
            "From": input.from,
            "ToCountryCode": input.toCountryCode,
            "To": input.to,
            "Url": input.url,
            "Method": (input.method != null)?input.method:null,
            "StatusCallBackUrl": input.statusCallBackUrl,
            "StatusCallBackMethod": (input.statusCallBackMethod != null)?input.statusCallBackMethod:null,
            "FallBackUrl": input.fallBackUrl,
            "FallBackMethod": (input.fallBackMethod != null)?input.fallBackMethod:null,
            "HeartBeatUrl": input.heartBeatUrl,
            "HeartBeatMethod": (input.heartBeatMethod != null)?input.heartBeatMethod:null,
            "Timeout": input.timeout,
            "PlayDtmf": input.playDtmf,
            "HideCallerId": input.hideCallerId,
            "Record": input.record,
            "RecordCallBackUrl": input.recordCallBackUrl,
            "RecordCallBackMethod": (input.recordCallBackMethod != null)?input.recordCallBackMethod:null,
            "Transcribe": input.transcribe,
            "TranscribeCallBackUrl": input.transcribeCallBackUrl
        };

        //Remove null values
        _APIHelper.cleanObject(_form);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            form : _form,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse: _response.body}, null, _context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Voice Effect
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} callSid    Required parameter: Example: 
     *     {AudioDirection|null} audioDirection    Optional parameter: Example: 
     *     {double|null} pitchSemiTones    Optional parameter: value between -14 and 14
     *     {double|null} pitchOctaves    Optional parameter: value between -1 and 1
     *     {double|null} pitch    Optional parameter: value greater than 0
     *     {double|null} rate    Optional parameter: value greater than 0
     *     {double|null} tempo    Optional parameter: value greater than 0
     *     {string|null} responseType    Optional parameter: Response type format xml or json
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createVoiceEffect: function (input, callback) {
        //Assign default values
        input = input || {};

        //validating required parameters
        if (input.callSid == null || input.callSid == undefined){
            return callback({errorMessage: "The property 'callSid' in the input object cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/calls/voiceeffect.{ResponseType}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "ResponseType": (null != input.responseType)? input.responseType: "json"
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "user-agent": "message360-api"
        };

        //prepare form data
        var _form = {
            "CallSid": input.callSid,
            "AudioDirection": (input.audioDirection != null)?input.audioDirection:null,
            "PitchSemiTones": input.pitchSemiTones,
            "PitchOctaves": input.pitchOctaves,
            "Pitch": input.pitch,
            "Rate": input.rate,
            "Tempo": input.tempo
        };

        //Remove null values
        _APIHelper.cleanObject(_form);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            form : _form,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse: _response.body}, null, _context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Record a Call
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} callSid    Required parameter: The unique identifier of each call resource
     *     {bool} record    Required parameter: Set true to initiate recording or false to terminate recording
     *     {Direction|null} direction    Optional parameter: The leg of the call to record
     *     {int|null} timeLimit    Optional parameter: Time in seconds the recording duration should not exceed
     *     {string|null} callBackUrl    Optional parameter: URL consulted after the recording completes
     *     {AudioFormat|null} fileformat    Optional parameter: Format of the recording file. Can be .mp3 or .wav
     *     {string|null} responseType    Optional parameter: Response format, xml or json
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createRecordCall: function (input, callback) {
        //Assign default values
        input = input || {};

        //validating required parameters
        if (input.callSid == null || input.callSid == undefined){
            return callback({errorMessage: "The property 'callSid' in the input object cannot be null.", errorCode: -1}, null, null);
        } else if (input.record == null || input.record == undefined){
            return callback({errorMessage: "The property 'record' in the input object cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/calls/recordcalls.{ResponseType}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "ResponseType": (null != input.responseType)? input.responseType: "json"
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "user-agent": "message360-api"
        };

        //prepare form data
        var _form = {
            "CallSid": input.callSid,
            "Record": input.record,
            "Direction": (input.direction != null)?input.direction:null,
            "TimeLimit": input.timeLimit,
            "CallBackUrl": input.callBackUrl,
            "Fileformat": (input.fileformat != null)?input.fileformat:null
        };

        //Remove null values
        _APIHelper.cleanObject(_form);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            form : _form,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse: _response.body}, null, _context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Play Dtmf and send the Digit
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} callSid    Required parameter: The unique identifier of each call resource
     *     {string} audioUrl    Required parameter: URL to sound that should be played. You also can add more than one audio file using semicolons e.g. http://example.com/audio1.mp3;http://example.com/audio2.wav
     *     {int|null} length    Optional parameter: Time limit in seconds for audio play back
     *     {Direction|null} direction    Optional parameter: The leg of the call audio will be played to
     *     {bool|null} loop    Optional parameter: Repeat audio playback indefinitely
     *     {bool|null} mix    Optional parameter: If false, all other audio will be muted
     *     {string|null} responseType    Optional parameter: Response type format xml or json
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createPlayAudio: function (input, callback) {
        //Assign default values
        input = input || {};

        //validating required parameters
        if (input.callSid == null || input.callSid == undefined){
            return callback({errorMessage: "The property 'callSid' in the input object cannot be null.", errorCode: -1}, null, null);
        } else if (input.audioUrl == null || input.audioUrl == undefined){
            return callback({errorMessage: "The property 'audioUrl' in the input object cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/calls/playaudios.{ResponseType}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "ResponseType": (null != input.responseType)? input.responseType: "json"
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "user-agent": "message360-api"
        };

        //prepare form data
        var _form = {
            "CallSid": input.callSid,
            "AudioUrl": input.audioUrl,
            "Length": input.length,
            "Direction": (input.direction != null)?input.direction:null,
            "Loop": input.loop,
            "Mix": input.mix
        };

        //Remove null values
        _APIHelper.cleanObject(_form);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            form : _form,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse: _response.body}, null, _context);
            }
        }
        _request(_options, cb);
    },


    /**
     * A list of calls associated with your Message360 account
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {int|null} page    Optional parameter: Which page of the overall response will be returned. Zero indexed
     *     {int|null} pageSize    Optional parameter: Number of individual resources listed in the response per page
     *     {string|null} to    Optional parameter: Only list calls to this number
     *     {string|null} from    Optional parameter: Only list calls from this number
     *     {string|null} dateCreated    Optional parameter: Only list calls starting within the specified date range
     *     {string|null} responseType    Optional parameter: Response type format xml or json
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createListCalls: function (input, callback) {
        //Assign default values
        input = input || {};


        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/calls/listcalls.{ResponseType}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "ResponseType": (null != input.responseType)? input.responseType: "json"
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "user-agent": "message360-api"
        };

        //prepare form data
        var _form = {
            "Page": input.page,
            "PageSize": input.pageSize,
            "To": input.to,
            "From": input.from,
            "DateCreated": input.dateCreated
        };

        //Remove null values
        _APIHelper.cleanObject(_form);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            form : _form,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse: _response.body}, null, _context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Interrupt the Call by Call Sid
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} callSid    Required parameter: Call SId
     *     {string|null} url    Optional parameter: URL the in-progress call will be redirected to
     *     {HttpAction|null} method    Optional parameter: The method used to request the above Url parameter
     *     {InterruptedCallStatus|null} status    Optional parameter: Status to set the in-progress call to
     *     {string|null} responseType    Optional parameter: Response type format xml or json
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createInterruptedCall: function (input, callback) {
        //Assign default values
        input = input || {};

        //validating required parameters
        if (input.callSid == null || input.callSid == undefined){
            return callback({errorMessage: "The property 'callSid' in the input object cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/calls/interruptcalls.{ResponseType}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "ResponseType": (null != input.responseType)? input.responseType: "json"
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "user-agent": "message360-api"
        };

        //prepare form data
        var _form = {
            "CallSid": input.callSid,
            "Url": input.url,
            "Method": (input.method != null)?input.method:null,
            "Status": (input.status != null)?input.status:null
        };

        //Remove null values
        _APIHelper.cleanObject(_form);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            form : _form,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse: _response.body}, null, _context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Play Dtmf and send the Digit
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} callSid    Required parameter: The unique identifier of each call resource
     *     {string} playDtmf    Required parameter: DTMF digits to play to the call. 0-9, #, *, W, or w
     *     {Direction|null} playDtmfDirection    Optional parameter: The leg of the call DTMF digits should be sent to
     *     {string|null} responseType    Optional parameter: Response type format xml or json
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createSendDigit: function (input, callback) {
        //Assign default values
        input = input || {};

        //validating required parameters
        if (input.callSid == null || input.callSid == undefined){
            return callback({errorMessage: "The property 'callSid' in the input object cannot be null.", errorCode: -1}, null, null);
        } else if (input.playDtmf == null || input.playDtmf == undefined){
            return callback({errorMessage: "The property 'playDtmf' in the input object cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/calls/senddigits.{ResponseType}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "ResponseType": (null != input.responseType)? input.responseType: "json"
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "user-agent": "message360-api"
        };

        //prepare form data
        var _form = {
            "CallSid": input.callSid,
            "PlayDtmf": input.playDtmf,
            "PlayDtmfDirection": (input.playDtmfDirection != null)?input.playDtmfDirection:null
        };

        //Remove null values
        _APIHelper.cleanObject(_form);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            form : _form,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse: _response.body}, null, _context);
            }
        }
        _request(_options, cb);
    },


    /**
     * You can experiment with initiating a call through Message360 and view the request response generated when doing so and get the response in json
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} fromCountryCode    Required parameter: from country code
     *     {string} from    Required parameter: This number to display on Caller ID as calling
     *     {string} toCountryCode    Required parameter: To cuntry code number
     *     {string} to    Required parameter: To number
     *     {string} url    Required parameter: URL requested once the call connects
     *     {HttpAction|null} method    Optional parameter: Specifies the HTTP method used to request the required URL once call connects.
     *     {string|null} statusCallBackUrl    Optional parameter: specifies the HTTP methodlinkclass used to request StatusCallbackUrl.
     *     {HttpAction|null} statusCallBackMethod    Optional parameter: Specifies the HTTP methodlinkclass used to request StatusCallbackUrl.
     *     {string|null} fallBackUrl    Optional parameter: URL requested if the initial Url parameter fails or encounters an error
     *     {HttpAction|null} fallBackMethod    Optional parameter: Specifies the HTTP method used to request the required FallbackUrl once call connects.
     *     {string|null} heartBeatUrl    Optional parameter: URL that can be requested every 60 seconds during the call to notify of elapsed tim
     *     {bool|null} heartBeatMethod    Optional parameter: Specifies the HTTP method used to request HeartbeatUrl.
     *     {int|null} timeout    Optional parameter: Time (in seconds) Message360 should wait while the call is ringing before canceling the call
     *     {string|null} playDtmf    Optional parameter: DTMF Digits to play to the call once it connects. 0-9, #, or *
     *     {bool|null} hideCallerId    Optional parameter: Specifies if the caller id will be hidden
     *     {bool|null} record    Optional parameter: Specifies if the call should be recorded
     *     {string|null} recordCallBackUrl    Optional parameter: Recording parameters will be sent here upon completion
     *     {HttpAction|null} recordCallBackMethod    Optional parameter: Method used to request the RecordCallback URL.
     *     {bool|null} transcribe    Optional parameter: Specifies if the call recording should be transcribed
     *     {string|null} transcribeCallBackUrl    Optional parameter: Transcription parameters will be sent here upon completion
     *     {IfMachine|null} ifMachine    Optional parameter: How Message360 should handle the receiving numbers voicemail machine
     *     {string|null} responseType    Optional parameter: Response type format xml or json
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createMakeCall: function (input, callback) {
        //Assign default values
        input = input || {};

        //validating required parameters
        if (input.fromCountryCode == null || input.fromCountryCode == undefined){
            return callback({errorMessage: "The property 'fromCountryCode' in the input object cannot be null.", errorCode: -1}, null, null);
        } else if (input.from == null || input.from == undefined){
            return callback({errorMessage: "The property 'from' in the input object cannot be null.", errorCode: -1}, null, null);
        } else if (input.toCountryCode == null || input.toCountryCode == undefined){
            return callback({errorMessage: "The property 'toCountryCode' in the input object cannot be null.", errorCode: -1}, null, null);
        } else if (input.to == null || input.to == undefined){
            return callback({errorMessage: "The property 'to' in the input object cannot be null.", errorCode: -1}, null, null);
        } else if (input.url == null || input.url == undefined){
            return callback({errorMessage: "The property 'url' in the input object cannot be null.", errorCode: -1}, null, null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/calls/makecall.{ResponseType}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "ResponseType": (null != input.responseType)? input.responseType: "json"
        });

        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "Method": (input.method != null)?input.method:null
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "user-agent": "message360-api"
        };

        //prepare form data
        var _form = {
            "FromCountryCode": input.fromCountryCode,
            "From": input.from,
            "ToCountryCode": input.toCountryCode,
            "To": input.to,
            "Url": input.url,
            "StatusCallBackUrl": input.statusCallBackUrl,
            "StatusCallBackMethod": (input.statusCallBackMethod != null)?input.statusCallBackMethod:null,
            "FallBackUrl": input.fallBackUrl,
            "FallBackMethod": (input.fallBackMethod != null)?input.fallBackMethod:null,
            "HeartBeatUrl": input.heartBeatUrl,
            "HeartBeatMethod": input.heartBeatMethod,
            "Timeout": input.timeout,
            "PlayDtmf": input.playDtmf,
            "HideCallerId": input.hideCallerId,
            "Record": input.record,
            "RecordCallBackUrl": input.recordCallBackUrl,
            "RecordCallBackMethod": (input.recordCallBackMethod != null)?input.recordCallBackMethod:null,
            "Transcribe": input.transcribe,
            "TranscribeCallBackUrl": input.transcribeCallBackUrl,
            "IfMachine": (input.ifMachine != null)?input.ifMachine:null
        };

        //Remove null values
        _APIHelper.cleanObject(_form);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            form : _form,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse: _response.body}, null, _context);
            }
        }
        _request(_options, cb);
    }

};

module.exports = CallController;