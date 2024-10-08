// Decode uplink function.
//
// Input is an object with the following fields:
// - bytes = Byte array containing the uplink payload, e.g. [255, 230, 255, 0]
// - fPort = Uplink fPort.
// - variables = Object containing the configured device variables.
//
// Output must be an object with the following fields:
// - data = Object representing the decoded payload.

function Decode(fPort, bytes, variables) {
  	var result = "";
	for(var i = 0; i < bytes.length; ++i){
		result+= (String.fromCharCode(bytes[i]));
	}
	var decoded = { text: result };
  	return decoded;
}

function decodeUplink(input) {
  return {
    data: Decode(input.fPort, input.bytes, input.variables)
  };
}

// Encode downlink function.
//
// Input is an object with the following fields:
// - data = Object representing the payload that must be encoded.
// - variables = Object containing the configured device variables.
//
// Output must be an object with the following fields:
// - bytes = Byte array containing the downlink payload.
function encodeDownlink(input) {
  return {
    bytes: [225, 230, 255, 0]
  };
}
