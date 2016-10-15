/**
 * message360
 *
 * This file was automatically generated for message360 by APIMATIC v2.0 ( https://apimatic.io ) on 10/15/2016
 */

var _request = require('../Http/Client/RequestClient'),
    _configuration = require('../configuration'),
    _APIHelper = require('../APIHelper');

var CallController = {

    /**
     * View Call Response
     * @param {string} callsid    Required parameter: Call Sid id for particular Call
     * @param {string|null} responseType    Optional parameter: Response format, xml or json
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createViewCall : function(callsid, responseType, callback){
        //Assign default values
        responseType = responseType || "json";

        //validating required parameters
        if (callsid == null || callsid == undefined){
            return callback({errorMessage: "The parameter 'callsid' is a required parameter and cannot be null.", errorCode:-1},null,null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/calls/viewcalls.{ResponseType}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "ResponseType" : (null != responseType)? responseType: "json"
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "user-agent" : "message360-api"
        };

        //prepare form data
        var _form = {
            "callsid" : callsid
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
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * You can experiment with initiating a call through Message360 and view the request response generated when doing so and get the response in json
     * @param {string} fromCountryCode    Required parameter: from country code
     * @param {string} from    Required parameter: This number to display on Caller ID as calling
     * @param {string} toCountryCode    Required parameter: To cuntry code number
     * @param {string} to    Required parameter: To number
     * @param {string} url    Required parameter: URL requested once the call connects
     * @param {HttpMethodEnum|null} method    Optional parameter: Specifies the HTTP method used to request the required URL once call connects.
     * @param {string|null} statusCallBackUrl    Optional parameter: specifies the HTTP methodlinkclass used to request StatusCallbackUrl.
     * @param {HttpMethodEnum|null} statusCallBackMethod    Optional parameter: Specifies the HTTP methodlinkclass used to request StatusCallbackUrl.
     * @param {string|null} fallBackUrl    Optional parameter: URL requested if the initial Url parameter fails or encounters an error
     * @param {HttpMethodEnum|null} fallBackMethod    Optional parameter: Specifies the HTTP method used to request the required FallbackUrl once call connects.
     * @param {string|null} heartBeatUrl    Optional parameter: URL that can be requested every 60 seconds during the call to notify of elapsed tim
     * @param {bool|null} heartBeatMethod    Optional parameter: Specifies the HTTP method used to request HeartbeatUrl.
     * @param {int|null} timeout    Optional parameter: Time (in seconds) Message360 should wait while the call is ringing before canceling the call
     * @param {string|null} playDtmf    Optional parameter: DTMF Digits to play to the call once it connects. 0-9, #, or *
     * @param {bool|null} hideCallerId    Optional parameter: Specifies if the caller id will be hidden
     * @param {bool|null} record    Optional parameter: Specifies if the call should be recorded
     * @param {string|null} recordCallBackUrl    Optional parameter: Recording parameters will be sent here upon completion
     * @param {HttpMethodEnum|null} recordCallBackMethod    Optional parameter: Method used to request the RecordCallback URL.
     * @param {bool|null} transcribe    Optional parameter: Specifies if the call recording should be transcribed
     * @param {string|null} transcribeCallBackUrl    Optional parameter: Transcription parameters will be sent here upon completion
     * @param {IfMachineEnum|null} ifMachine    Optional parameter: How Message360 should handle the receiving numbers voicemail machine
     * @param {string|null} responseType    Optional parameter: Response format, xml or json
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createMakeCall : function(fromCountryCode, from, toCountryCode, to, url, method, statusCallBackUrl, statusCallBackMethod, fallBackUrl, fallBackMethod, heartBeatUrl, heartBeatMethod, timeout, playDtmf, hideCallerId, record, recordCallBackUrl, recordCallBackMethod, transcribe, transcribeCallBackUrl, ifMachine, responseType, callback){
        //Assign default values
        responseType = responseType || "json";

        //validating required parameters
        if (fromCountryCode == null || fromCountryCode == undefined){
            return callback({errorMessage: "The parameter 'fromCountryCode' is a required parameter and cannot be null.", errorCode:-1},null,null);
        } else if (from == null || from == undefined){
            return callback({errorMessage: "The parameter 'from' is a required parameter and cannot be null.", errorCode:-1},null,null);
        } else if (toCountryCode == null || toCountryCode == undefined){
            return callback({errorMessage: "The parameter 'toCountryCode' is a required parameter and cannot be null.", errorCode:-1},null,null);
        } else if (to == null || to == undefined){
            return callback({errorMessage: "The parameter 'to' is a required parameter and cannot be null.", errorCode:-1},null,null);
        } else if (url == null || url == undefined){
            return callback({errorMessage: "The parameter 'url' is a required parameter and cannot be null.", errorCode:-1},null,null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/calls/makecall.{ResponseType}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "ResponseType" : (null != responseType)? responseType: "json"
        });

        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "Method" : (method != null)?method:null
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "user-agent" : "message360-api"
        };

        //prepare form data
        var _form = {
            "FromCountryCode" : fromCountryCode,
            "From" : from,
            "ToCountryCode" : toCountryCode,
            "To" : to,
            "Url" : url,
            "StatusCallBackUrl" : statusCallBackUrl,
            "StatusCallBackMethod" : (statusCallBackMethod != null)?statusCallBackMethod:null,
            "FallBackUrl" : fallBackUrl,
            "FallBackMethod" : (fallBackMethod != null)?fallBackMethod:null,
            "HeartBeatUrl" : heartBeatUrl,
            "HeartBeatMethod" : heartBeatMethod,
            "Timeout" : timeout,
            "PlayDtmf" : playDtmf,
            "HideCallerId" : hideCallerId,
            "Record" : record,
            "RecordCallBackUrl" : recordCallBackUrl,
            "RecordCallBackMethod" : (recordCallBackMethod != null)?recordCallBackMethod:null,
            "Transcribe" : transcribe,
            "TranscribeCallBackUrl" : transcribeCallBackUrl,
            "IfMachine" : (ifMachine != null)?ifMachine:null
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
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Play Dtmf and send the Digit
     * @param {int} length    Required parameter: Time limit in seconds for audio play back
     * @param {DirectionEnum} direction    Required parameter: The leg of the call audio will be played to
     * @param {bool} loop    Required parameter: Repeat audio playback indefinitely
     * @param {bool} mix    Required parameter: If false, all other audio will be muted
     * @param {string|null} callSid    Optional parameter: The unique identifier of each call resource
     * @param {string|null} audioUrl    Optional parameter: URL to sound that should be played. You also can add more than one audio file using semicolons e.g. http://example.com/audio1.mp3;http://example.com/audio2.wav
     * @param {string|null} responseType    Optional parameter: Response format, xml or json
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createPlayAudio : function(length, direction, loop, mix, callSid, audioUrl, responseType, callback){
        //Assign default values
        responseType = responseType || "json";

        //validating required parameters
        if (length == null || length == undefined){
            return callback({errorMessage: "The parameter 'length' is a required parameter and cannot be null.", errorCode:-1},null,null);
        } else if (direction == null || direction == undefined){
            return callback({errorMessage: "The parameter 'direction' is a required parameter and cannot be null.", errorCode:-1},null,null);
        } else if (loop == null || loop == undefined){
            return callback({errorMessage: "The parameter 'loop' is a required parameter and cannot be null.", errorCode:-1},null,null);
        } else if (mix == null || mix == undefined){
            return callback({errorMessage: "The parameter 'mix' is a required parameter and cannot be null.", errorCode:-1},null,null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/calls/playaudios.{ResponseType}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "ResponseType" : (null != responseType)? responseType: "json"
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "user-agent" : "message360-api"
        };

        //prepare form data
        var _form = {
            "Length" : length,
            "Direction" : (direction != null)?direction:null,
            "Loop" : loop,
            "Mix" : mix,
            "CallSid" : callSid,
            "AudioUrl" : audioUrl
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
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Record a Call
     * @param {string} callSid    Required parameter: The unique identifier of each call resource
     * @param {bool} record    Required parameter: Set true to initiate recording or false to terminate recording
     * @param {DirectionEnum|null} direction    Optional parameter: The leg of the call to record
     * @param {int|null} timeLimit    Optional parameter: Time in seconds the recording duration should not exceed
     * @param {string|null} callBackUrl    Optional parameter: URL consulted after the recording completes
     * @param {AudioFormatEnum|null} fileformat    Optional parameter: Format of the recording file. Can be .mp3 or .wav
     * @param {string|null} responseType    Optional parameter: Response format, xml or json
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createRecordCall : function(callSid, record, direction, timeLimit, callBackUrl, fileformat, responseType, callback){
        //Assign default values
        responseType = responseType || "json";

        //validating required parameters
        if (callSid == null || callSid == undefined){
            return callback({errorMessage: "The parameter 'callSid' is a required parameter and cannot be null.", errorCode:-1},null,null);
        } else if (record == null || record == undefined){
            return callback({errorMessage: "The parameter 'record' is a required parameter and cannot be null.", errorCode:-1},null,null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/calls/recordcalls.{ResponseType}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "ResponseType" : (null != responseType)? responseType: "json"
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "user-agent" : "message360-api"
        };

        //prepare form data
        var _form = {
            "CallSid" : callSid,
            "Record" : record,
            "Direction" : (direction != null)?direction:null,
            "TimeLimit" : timeLimit,
            "CallBackUrl" : callBackUrl,
            "Fileformat" : (fileformat != null)?fileformat:null
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
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Voice Effect
     * @param {string} callSid    Required parameter: Example: 
     * @param {AudioDirectionEnum|null} audioDirection    Optional parameter: Example: 
     * @param {double|null} pitchSemiTones    Optional parameter: value between -14 and 14
     * @param {double|null} pitchOctaves    Optional parameter: value between -1 and 1
     * @param {double|null} pitch    Optional parameter: value greater than 0
     * @param {double|null} rate    Optional parameter: value greater than 0
     * @param {double|null} tempo    Optional parameter: value greater than 0
     * @param {string|null} responseType    Optional parameter: Response format, xml or json
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createVoiceEffect : function(callSid, audioDirection, pitchSemiTones, pitchOctaves, pitch, rate, tempo, responseType, callback){
        //Assign default values
        responseType = responseType || "json";

        //validating required parameters
        if (callSid == null || callSid == undefined){
            return callback({errorMessage: "The parameter 'callSid' is a required parameter and cannot be null.", errorCode:-1},null,null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/calls/voiceeffect.{ResponseType}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "ResponseType" : (null != responseType)? responseType: "json"
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "user-agent" : "message360-api"
        };

        //prepare form data
        var _form = {
            "CallSid" : callSid,
            "AudioDirection" : (audioDirection != null)?audioDirection:null,
            "PitchSemiTones" : pitchSemiTones,
            "PitchOctaves" : pitchOctaves,
            "Pitch" : pitch,
            "Rate" : rate,
            "Tempo" : tempo
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
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Play Dtmf and send the Digit
     * @param {string} callSid    Required parameter: The unique identifier of each call resource
     * @param {string} playDtmf    Required parameter: DTMF digits to play to the call. 0-9, #, *, W, or w
     * @param {DirectionEnum|null} playDtmfDirection    Optional parameter: The leg of the call DTMF digits should be sent to
     * @param {string|null} responseType    Optional parameter: Response format, xml or json
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createSendDigit : function(callSid, playDtmf, playDtmfDirection, responseType, callback){
        //Assign default values
        responseType = responseType || "json";

        //validating required parameters
        if (callSid == null || callSid == undefined){
            return callback({errorMessage: "The parameter 'callSid' is a required parameter and cannot be null.", errorCode:-1},null,null);
        } else if (playDtmf == null || playDtmf == undefined){
            return callback({errorMessage: "The parameter 'playDtmf' is a required parameter and cannot be null.", errorCode:-1},null,null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/calls/senddigits.{ResponseType}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "ResponseType" : (null != responseType)? responseType: "json"
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "user-agent" : "message360-api"
        };

        //prepare form data
        var _form = {
            "CallSid" : callSid,
            "PlayDtmf" : playDtmf,
            "PlayDtmfDirection" : (playDtmfDirection != null)?playDtmfDirection:null
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
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Interrupt the Call by Call Sid
     * @param {string} callSid    Required parameter: Call SId
     * @param {string|null} url    Optional parameter: URL the in-progress call will be redirected to
     * @param {HttpMethodEnum|null} method    Optional parameter: The method used to request the above Url parameter
     * @param {InterruptedCallStatusEnum|null} status    Optional parameter: Status to set the in-progress call to
     * @param {string|null} responseType    Optional parameter: Response format, xml or json
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createInterruptedCall : function(callSid, url, method, status, responseType, callback){
        //Assign default values
        responseType = responseType || "json";

        //validating required parameters
        if (callSid == null || callSid == undefined){
            return callback({errorMessage: "The parameter 'callSid' is a required parameter and cannot be null.", errorCode:-1},null,null);
        }

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/calls/interruptcalls.{ResponseType}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "ResponseType" : (null != responseType)? responseType: "json"
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "user-agent" : "message360-api"
        };

        //prepare form data
        var _form = {
            "CallSid" : callSid,
            "Url" : url,
            "Method" : (method != null)?method:null,
            "Status" : (status != null)?status:null
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
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null, _response.body,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * A list of calls associated with your Message360 account
     * @param {string|null} page    Optional parameter: Which page of the overall response will be returned. Zero indexed
     * @param {string|null} pageSize    Optional parameter: Number of individual resources listed in the response per page
     * @param {string|null} to    Optional parameter: Only list calls to this number
     * @param {string|null} from    Optional parameter: Only list calls from this number
     * @param {string|null} dateCreated    Optional parameter: Only list calls starting within the specified date range
     * @param {string|null} responseType    Optional parameter: Response format, xml or json
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {void}
     */
    createListCalls : function(page, pageSize, to, from, dateCreated, responseType, callback){
        //Assign default values
        responseType = responseType || "json";


        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/calls/listcalls.{ResponseType}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "ResponseType" : (null != responseType)? responseType: "json"
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "user-agent" : "message360-api"
        };

        //prepare form data
        var _form = {
            "Page" : page,
            "PageSize" : pageSize,
            "To" : to,
            "From" : from,
            "DateCreated" : dateCreated
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
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null,null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    }

};

module.exports = CallController;